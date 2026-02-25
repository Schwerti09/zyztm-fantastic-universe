import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react(), netlify()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
