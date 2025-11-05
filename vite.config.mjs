import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/configs': 'https://back-end-vhmf.onrender.com/',
      '/logs': 'https://back-end-vhmf.onrender.com/'
    }
  }
})
