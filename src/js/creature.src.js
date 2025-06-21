
const creature = (() => {
	let Module = {};
	let _onloadAssembly = () => { }
	let _onerrorAssembly = () => { }
	let _is_runtime_initialized = false;
	let _onRuntimeInitialized = () => {
		_is_runtime_initialized = true;
		_onloadAssembly();
	}

	const _initalize_wasm = (url) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = "arraybuffer";
		xhr.onload = () => {
			var params = {};
			params.wasmBinary = xhr.response;
			// params.onRuntimeInitialized = _onRuntimeInitialized;
			creature_native(params).then(function (module) {
				Module = module;
				_onRuntimeInitialized();
			});
		};
		xhr.onerror = () => {
			_onerrorAssembly();
		};
		xhr.send(null);
	};

	class Creature {
		initRuntime(path, onload, onerror) {
			if (typeof creature_native === "undefined") {
				onload();
				return;
			}

			if (typeof onload === "function")
				_onloadAssembly = () => {
					this.PackManager = new Module.PackManager();
					onload(this.PackManager);
				};

			if (typeof onerror === "function")
				_onerrorAssembly = onerror;

			_initalize_wasm(path);
		}

		heapBytes(typedArray) {
			var numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
			var ptr = Module["_malloc"](numBytes);
			var heapBytes = new Uint8Array(Module["HEAPU8"].buffer, ptr, numBytes);
			heapBytes.set(new Uint8Array(typedArray.buffer));
			return heapBytes;
		};
	}

	return new Creature();
})();

if (typeof exports !== 'undefined') {
	exports = creature;
}
