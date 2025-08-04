// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(),
  icon()]
});
