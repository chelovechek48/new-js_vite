import { defineConfig } from 'vite';
import path from 'path';

const repositoryName = '/new-js_vite';
const setAlias = (localPath) => path.resolve(__dirname, localPath);

export default defineConfig({
  base: repositoryName,
  server: { port: 8080 },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          normalize: ['@styles/normalize.scss'],
          blocks: ['@styles/blocks/_index.scss'],
          module: ['@js/module.js'],
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': setAlias('./src'),
      '@js': setAlias('./src/js'),
      '@styles': setAlias('./src/styles'),
    },
  },
});
