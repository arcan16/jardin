import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // El sitio se publica en https://arcan16.github.io/jardin/
  base: "/jardin/"
})
