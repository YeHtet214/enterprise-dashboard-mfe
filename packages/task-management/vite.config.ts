import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'task-management',
      filename: 'remoteEntry.js',
      exposes: {
        './TaskApp': './src/App.tsx',
      },
      remotes: {
        authApp: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: {
        react: { },
        'react-dom': { },
        'react-router-dom': { }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5002,
    strictPort: true
  }
})