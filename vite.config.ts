import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Needed for GitHub Pages when deployed under: /Safetrox/
  base: "/Safetrox/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
