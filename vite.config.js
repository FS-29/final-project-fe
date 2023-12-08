import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

//   build: {
//     rollupOptions: {
//       external: ['embla-carousel-react', 'embla-carousel-autoplay'], // Add both modules here
//     },
//   },


})
