import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'settings',
      filename: 'remoteEntry.js',
      exposes: {
        './SettingsApp': './src/App.tsx',
        // './UserProfile': './src/components/UserProfile.tsx',
        // './Preferences': './src/components/Preferences.tsx',
        // './Security': './src/components/Security.tsx'
      },
      shared: {
        'react': { },
        'react-dom': {  },
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
    port: 5004
  }
})