import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the original WordPress/Elementor CSS exactly as authored.
    cssMinify: false,
    // The Elementor stylesheets are bundled as strings (see src/styles/index.js).
    chunkSizeWarningLimit: 1000,
  },
});
