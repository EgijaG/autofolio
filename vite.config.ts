import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/autofolio/",
  server: {
    open: true,
    port: 3001,
  }
})
