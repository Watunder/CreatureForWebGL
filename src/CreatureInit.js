import { heapBytes, packManager } from './js/main.js';

/**
 * @param {{}} [moduleArg] 
 * @returns {Promise<{
 * heapBytes: typeof heapBytes;
 * packManager: typeof packManager;
 * } & import('./Creature.js').CreatureModule>}
 */
const CreatureInit = (moduleArg = {}) => { return; }
export default CreatureInit;