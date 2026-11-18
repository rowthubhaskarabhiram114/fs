import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No dev proxy: the app always calls VITE_API_BASE_URL directly,
// so local and production behave the same way.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
