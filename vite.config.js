import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: '/' cocok untuk user/organization page (Whanss.github.io)
// Untuk project page (username.github.io/repo), ganti base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
