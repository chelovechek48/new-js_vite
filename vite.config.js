import { defineConfig } from 'vite';
import path from 'path';

const repositoryName = '/new-js_vite';
const setAlias = (localPath) => path.resolve(__dirname, localPath);

export default defineConfig({
  base: repositoryName,
  server: { port: 8080 },

  resolve: {
    alias: {
      '@': setAlias('./src'),
      '@components': setAlias('./src/components'),
      '@styles': setAlias('./src/styles'),
    },
  },
});
