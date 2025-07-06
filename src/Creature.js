/**
 * @typedef {|
 * Int8Array |
 * Uint8Array |
 * Int16Array |
 * Uint16Array |
 * Int32Array |
 * Uint32Array |
 * Float32Array |
 * Float64Array} TypedArray 
 */

/**
 * @typedef {{
 * heapBytes: (typedArray: TypedArray) => Uint8Array
 * } & import('../build_wasm/types.js').MainModule} CreatureModule
 */

/**
 * @type {CreatureModule}
 */
const Creature = exports;
export default Creature;
