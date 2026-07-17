import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Shared .env lives at the repo root (frontend/ and backend/ both read from it).
  envDir: fileURLToPath(new URL('..', import.meta.url)),
});
