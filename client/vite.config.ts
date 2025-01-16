import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: process.env.VITE_API_BASE_URL,
    //     changeOrigin: true,
    //     secure: false,
    //   },
    //   '/auth': {
    //     target: process.env.VITE_API_BASE_URL,
    //     changeOrigin: true,
    //     secure: false
    //   },
    // },
  },
});
