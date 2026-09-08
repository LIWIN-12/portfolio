import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Changed from '/portfolio/' to './'
  server: {
    port: 3000,
    open: false,
  },
});
