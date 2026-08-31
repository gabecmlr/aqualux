import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.aqualux.example',
  output: 'server',
  adapter: vercel(),
  compressHTML: true,
});
