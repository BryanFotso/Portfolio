import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const fromSource = (directory) => path.resolve(rootDirectory, 'src', directory);

export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH || (command === 'serve' ? '/' : '/Portfolio/'),
  plugins: [react()],
  resolve: {
    alias: {
      components: fromSource('components'),
      data: fromSource('data'),
      hooks: fromSource('hooks'),
      i18n: fromSource('i18n'),
      sections: fromSource('sections'),
      styles: fromSource('styles'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: true,
    restoreMocks: true,
  },
}));
