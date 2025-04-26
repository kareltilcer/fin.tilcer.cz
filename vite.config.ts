import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Load the version from package.json
const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const version = packageJson.version;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __APP_VERSION__: JSON.stringify(version),
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()), // ISO 8601 format for simplicity
    },
    build: {
        chunkSizeWarningLimit: 1024
    }
})
