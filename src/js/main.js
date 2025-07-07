import Creature from '../Creature.js';

/**
 * @param {|
 * Int8Array |
 * Uint8Array |
 * Int16Array |
 * Uint16Array |
 * Int32Array |
 * Uint32Array |
 * Float32Array |
 * Float64Array} typedArray 
 * @returns {Uint8Array}
 */
export const heapBytes = (typedArray) => {
	var numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
	const memptr = Creature._malloc(numBytes);
	const heapBytes = new Uint8Array(Creature.HEAPU8.buffer, memptr, numBytes);
	heapBytes.set(new Uint8Array(typedArray.buffer));
	return heapBytes;
}

export const packManager = new Creature.PackManager();