import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable.png'],
      manifest: {
        name: 'Notes',
        short_name: 'Notes',
        description: 'Make your notes',
        icons: [
          {
            src: 'maskable.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'logo384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#181818',
        background_color: '#fbc71d',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
      },
    }),
  ],
});
