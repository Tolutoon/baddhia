import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
    rollupOptions: {
      input: ['src/main.jsx', './index.html']
    }
  },
})


// input: ['src/main.jsx', './index.html']