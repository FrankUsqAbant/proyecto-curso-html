import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Vital para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2022'
  },
  server: {
    port: 3002,
    open: false
  }
});
