import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "flipbet-u0o7.onrender.com"
    ]
  }
})