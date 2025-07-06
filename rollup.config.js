
import { defineConfig } from 'rollup';
import replace from '@rollup/plugin-replace';
import { generateDTS } from '@typhonjs-build-test/esm-d-ts';

export default defineConfig({
    input: 'src/js/main.js',
    plugins: [
        replace({
            preventAssignment: true,
            delimiters: ['', ''],
            values: {
                'this.Module = this.Module || {}': 'Module'
            }
        }),
        generateDTS.plugin({
            input: 'src/CreatureInit.js',
            output: 'Release/creature.d.ts'
        })
    ],
    output: {
        file: 'build_wasm/creature_webgl.js',
        format: 'iife',
        name: 'Module',
        extend: true
    }
});
