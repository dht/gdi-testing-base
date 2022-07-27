import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'TestingBase',
            formats: ['es', 'umd'],
            fileName: (format) => `testing-base.${format}.js`,
        },
        rollupOptions: {
            external: ['@testing-library/react', 'react-test-renderer'],
            output: {
                globals: {
                    '@testing-library/react': 'testing',
                    'react-test-renderer': 'renderer',
                },
            },
        },
    },
});
