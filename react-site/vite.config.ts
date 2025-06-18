import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dueseasondigital.github.io/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    strictPort: true,
    port: 3000,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
});
