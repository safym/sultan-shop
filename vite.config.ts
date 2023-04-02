import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sultan-shop',
  server: {
    host: true
  }
})
