import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //前者改成github的庫
  base: process.env.NODE_ENV === 'production' ? '/react-work-2/':'/',
  plugins: [react()],
})
