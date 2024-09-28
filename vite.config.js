import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  //   host: '192.168.1.14'
  // },
  plugins: [react()],
})
