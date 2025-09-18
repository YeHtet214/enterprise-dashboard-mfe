import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell-app',             
      remotes: {
        employeeDirectory: 'http://localhost:5001/assets/remoteEntry.js',
        taskManagement: 'http://localhost:5002/assets/remoteEntry.js',
        analytics: 'http://localhost:5003/assets/remoteEntry.js',
        authApp: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: {
        react: { 
          // singleton: true,      
          // eager: true          
        },
        'react-dom': { 
          // singleton: true, 
          // eager: true 
        },
        'react-router-dom': {
          // singleton: true,
          // eager: true
        }
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
    port: 3000,
    strictPort: true
  }
})