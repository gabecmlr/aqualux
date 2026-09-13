import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.aqualuxmalta.com',
  output: 'server',
  adapter: vercel(),
  compressHTML: true,
});
