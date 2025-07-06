// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    let HEAPU8: any;
}
interface WasmModule {
  _malloc(_0: number): number;
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  // @ts-ignore - If targeting lower than ESNext, this symbol might not exist.
  [Symbol.dispose](): void;
  clone(): this;
}
interface PackManager extends ClassHandle {
  removePackPlayer(_0: number): boolean;
  setPlayerLoop(_0: number, _1: boolean): boolean;
  getActiveAnimStartTime(_0: number): number;
  getActiveAnimEndTime(_0: number): number;
  getPlayerBounds(_0: number): PlayerBounds;
  stepPlayer(_0: number, _1: number): boolean;
  getPlayerRunTime(_0: number): number;
  setPlayerRunTime(_0: number, _1: number): boolean;
  applyRegionOffsetsZ(_0: number, _1: number): void;
  addPackLoader(_0: EmbindString, _1: number, _2: number): boolean;
  addPackPlayer(_0: EmbindString): number;
  setPlayerActiveAnimation(_0: number, _1: EmbindString): boolean;
  setPlayerBlendToAnimation(_0: number, _1: EmbindString, _2: number): boolean;
  getActiveAnimName(_0: number): string;
  getPlayerPoints(_0: number): any;
  getPlayerPoints3D(_0: number): any;
  getPlayerColors(_0: number): any;
  getPlayerUVs(_0: number): any;
  getPlayerIndices(_0: number): any;
  getAllAnimNames(_0: number): any;
}

type PlayerBounds = [ number, number, number, number ];

interface EmbindModule {
  PackManager: {
    new(): PackManager;
  };
}

type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;

type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
type CreatureModule = {
    heapBytes: (typedArray: TypedArray) => Uint8Array;
} & MainModule;

/**
 * @param {{}} [moduleArg]
 * @returns {Promise<import('./Creature.js').CreatureModule>}
 */
declare function CreatureInit(moduleArg?: {}): Promise<CreatureModule>;

export { CreatureInit as default };
