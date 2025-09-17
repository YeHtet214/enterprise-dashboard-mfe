import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth-app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/index.ts',
      },
      shared: ["react", "react-dom", "react-router-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5004
  }
})