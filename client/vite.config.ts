import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://kanban-board-rptx.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'https://kanban-board-rptx.onrender.com',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
