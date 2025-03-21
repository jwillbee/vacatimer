import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is correct
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html', 
    },
  },
  publicDir: 'public', 
});

