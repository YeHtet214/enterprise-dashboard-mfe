import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell-app',                    // Name of this microfrontend
      remotes: {
        // Map of remote names to their entry points
        employeeDirectory: 'http://localhost:5001/assets/remoteEntry.js',
        taskManagement: 'http://localhost:5002/assets/remoteEntry.js',
        analytics: 'http://localhost:5003/assets/remoteEntry.js',
        settings: 'http://localhost:5004/assets/remoteEntry.js',
      },
      // shared: {
      //   // Shared dependencies to avoid duplication
      //   react: { 
      //     eager: true          // Load immediately
      //   },
      //   'react-dom': { 
      //     singleton: true, 
      //     eager: true 
      //   },
      //   'react-router-dom': {
      //     singleton: true,
      //     eager: true
      //   }
      // }
      shared: [react(), react_dom()]
    })
  ],
  build: {
    modulePreload: false,    // Disable module preloading
    target: 'esnext',        // Use modern JS features
    minify: false,           // Keep readable for debugging
    cssCodeSplit: false      // Keep CSS together
  },
  preview: {
    port: 3000              // Shell app runs on port 3000
  }
})