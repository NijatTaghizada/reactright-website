import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build works on GitHub Pages whatever the repo is named
export default defineConfig({
  base: './',
  plugins: [react()],
})
