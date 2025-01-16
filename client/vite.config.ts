import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.DB_URL || 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: process.env.DB_URL || 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
