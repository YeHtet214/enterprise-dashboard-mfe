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
        // './Dashboard': './src/components/Dashboard.tsx',
        // './Charts': './src/components/Charts.tsx',
        // './MetricsCard': './src/components/MetricsCard.tsx'
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
    port: 5003
  }
})