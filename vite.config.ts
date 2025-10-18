import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for DevBlog
// - Uses React plugin for fast refresh
// - No advanced optimizations to keep it simple
export default defineConfig({
  plugins: [react()],
})
