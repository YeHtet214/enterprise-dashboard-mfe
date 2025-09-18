import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'employee-directory',    
      filename: 'remoteEntry.js',  
      exposes: {
        './EmployeeApp': './src/App.tsx',
      },
      remotes: {
        authApp: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: {
        'react': { 
        },
        'react-dom': { 
          // Remove the 'singleton' property
        },
        'react-router-dom': { 
          // Remove the 'singleton' property
        },
      },
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5001,
    strictPort: true                
  }
})