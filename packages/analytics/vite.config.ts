import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'analytics',
      filename: 'remoteEntry.js',
      exposes: {
        './AnalyticsApp': './src/App.tsx',
      },
      remotes: {
        employeeDirectory: 'http://localhost:5001/assets/remoteEntry.js',
        taskManagement: 'http://localhost:5002/assets/remoteEntry.js',
        authApp: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5003,
    strictPort: true
  }
})