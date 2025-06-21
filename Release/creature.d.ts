declare class PackManager {
    /**
     * Adds a new CreaturePackLoader.
     * @param {String} fileName - The file name.
     * @param {Number} byteLength - The `Uint8Array.byteLength` from {@link Creature.heapBytes} result.
     * @param {Number} byteOffset - The `Uint8Array.byteOffset` from {@link Creature.heapBytes} result.
     * @returns {Boolean} Whether there is a file.
     */
    addPackLoader(fileName: string, byteLength: number, byteOffset: number): void;

    /**
     * Adds a new CreaturePackPlayer.
     * @param {String} fileName - The file name.
     * @returns {Number} The player id.
     */
    addPackPlayer(fileName: string): void;

    /**
     * Removes an existing CreaturePackPlayer.
     * @param {Number} playerId - The player id.
     */
    removePackPlayer(playerId: number): void;

    /**
     * Sets an active animation.
     * @param {Number} playerId - The player id.
     * @param {String} animationName - The animation name.
     */
    setPlayerActiveAnimation(playerId: number, animationName: string): void;

    /**
     * Blends into an animation.
     * @param {Number} playerId - The player id.
     * @param {String} animationName - The animation name.
     * @param {Number} blendDelta - [0.0, 1.0]
     */
    setPlayerBlendToAnimation(playerId: number, animationName: string, blendDelta: number): void;

    /**
     * Steps the player object.
     * @param {Number} playerId - The player id.
     * @param {Number} delta - The time delta.
     */
    stepPlayer(playerId: number, delta: number): void;

    /**
     * Sets the absolute time for the player object
     * @param {Number} playerId - The player id.
     * @param {Number} currentTime - The absolute time.
     */
    setPlayerRunTime(playerId: number, currentTime: number): void;

    /**
     * Gets the absolute time of a player object
     * @param {Number} playerId - The player id.
     * @returns {Number} The absolute time.
     */
    getPlayerRunTime(playerId: number): void;

    /**
     * Applies an offset z to each mesh region.
     * @param {Number} playerId - The player id.
     * @param {Number} offsetZ - Z Offset.
     */
    applyRegionOffsetsZ(playerId: number, offsetZ: number): void;

    /**
     * Gets the points of the player object.
     * @param {Number} playerId - The player id.
     * @returns {Float32Array} The points(X,Y) array.
     */
    getPlayerPoints(playerId: number): void;

    /**
     * Gets the points of the player object.
     * @param {Number} playerId - The player id.
     * @returns {Float32Array} The points(X,Y,Z) array.
     */
    getPlayerPoints3D(playerId: number): void;

    /**
     * Gets the colors of the player object.
     * @param {Number} playerId - The player id.
     * @returns {Uint8Array} The colors(R,G,B,A) array.
     */
    getPlayerColors(playerId: number): void;

    /**
     * Gets the uvs of the player ocject.
     * @param {Number} playerId - The player id.
     * @returns {Float32Array} The uvs(S,T) array.
     */
    getPlayerUVs(playerId: number): void;

    /**
     * Gets the indices of a player
     * @param {Number} playerId - The player id.
     * @returns {Float32Array} The indices array.
     */
    getPlayerIndices(playerId: number): void;

    /**
     * Gets the bounds of a player.
     * @param {Number} playerId - The player id.
     * @returns {Array} The bounds array.
     */
    getPlayerBounds(playerId: number): void;

    /**
     * Gets the starting time of the currently active animation
     * @param {Number} playerId - The player id.
     * @returns {Number} The absolute time.
     */
    getActiveAnimStartTime(playerId: number): void;

    /**
     * Gets the ending time of the currently active animation
     * @param {Number} playerId - The player id.
     * @returns {Number} The absolute time.
     */
    getActiveAnimEndTime(playerId: number): void;

    /**
     * Gets the name of the currently active animation.
     * @param {Number} playerId - The player id.
     * @returns {String} The animation name.
     */
    getActiveAnimName(playerId: number): void;

    /**
     * Gets the array of the animations name.
     * @param {Number} playerId - The player id.
     * @returns {Array} The animations name array.
     */
    getAllAnimNames(playerId: number): void;
}

declare namespace creature {

    const packManager: PackManager;

    export function initRuntime(path: string, onload?: (packManager: PackManager) => void, onerror?: Function): void;

    /**
     * @param {Uint8Array} typedArray 
     * @returns 
     */
    export function heapBytes(typedArray: Uint8Array): void;
}

declare module "creature" {
    export = creature;
}
