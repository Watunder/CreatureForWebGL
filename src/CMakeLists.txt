
# CMake version check
cmake_minimum_required(VERSION 3.15)

project(creature)

# Set compiler flags
string(APPEND CMAKE_CXX_FLAGS
  " -O2"
  " -g1"
  " -flto"
)

set(CMAKE_CXX_STANDARD 14)

# Set linker flags
string(APPEND CMAKE_EXE_LINKER_FLAGS
  " -s WASM=1"
  " -s MODULARIZE=1"
  " -s FILESYSTEM=0"
  " -s DISABLE_EXCEPTION_CATCHING=1"
  " -s EXIT_RUNTIME=0"
  " -s INITIAL_MEMORY=33554432"
  " -s ALLOW_MEMORY_GROWTH=1"
  " -s EXPORT_NAME=\"'creature_native'\""
  " -s EXPORTED_FUNCTIONS=\"
  [
    '_malloc'
  ]\" "
  " -s EXPORTED_RUNTIME_METHODS=\"
  [
    'HEAPU8'
  ]\" "
  " --bind"
)

# Set include directories
include_directories(
  ${PROJECT_SOURCE_DIR}/cpp/*.h
)

# Set source files
file(GLOB creature_src
  ${PROJECT_SOURCE_DIR}/cpp/*.cpp
)

# Set output file extension
set(CMAKE_EXECUTABLE_SUFFIX ".js")

# Add build settings
add_executable(creature.core ${creature_src})
