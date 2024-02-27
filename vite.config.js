import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'build');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    define: {
        'process.env': {}
    },
    plugins: [vue()],
    resolve: {
        alias: {'@': src, '@test': test}
    },
    build: {
        target: 'es6',
        lib: {
            entry: `${src}/index.ts`,
            name: 'LktI18n',
            formats: ['es']
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: ['lkt-object-tools', 'lkt-string-tools', 'lkt-ts-interfaces'],
            output: {
                globals: {
                    "lkt-object-tools": 'LktObjectTools',
                    "lkt-string-tools": 'LktStringTools',
                    "lkt-ts-interfaces": 'LktTsInterfaces'
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: ['text', 'lcov']
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
        }
    }
};