import { defineConfig } from 'vite'
import path from "path"

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

const rootDir = './src';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@containers": path.resolve(__dirname, "./src/containers"),
    },
  }
})
