import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    svgr({
      include: '**/*.svg?reactComponent',
    }),
  ],
  build: {
    outDir: 'public',
  },
})
