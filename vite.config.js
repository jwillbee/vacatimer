import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  root: ".", 
  publicDir: "public", 
  base: "./", 
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
  build: {
    rollupOptions: {
      input: '/public/index.html'
    }
  }
});
