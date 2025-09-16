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
        './TaskBoard': './src/components/TaskBoard.tsx',
        './TaskList': './src/components/TaskList.tsx',
        './CreateTask': './src/components/CreateTask.tsx'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true }
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
    port: 5002
  }
})