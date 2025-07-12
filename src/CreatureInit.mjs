import { heapBytes, packManager } from './js/main.mjs';

/**
 * @param {{}} [moduleArg] 
 * @returns {Promise<{
 * heapBytes: typeof heapBytes;
 * packManager: typeof packManager;
 * } & import('./Creature.mjs').CreatureModule>}
 */
const CreatureInit = (moduleArg = {}) => { return; }
export default CreatureInit;