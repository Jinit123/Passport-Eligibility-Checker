// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({

  site: " https://passporteligibilitychecker.vercel.app",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap()
  ]

});