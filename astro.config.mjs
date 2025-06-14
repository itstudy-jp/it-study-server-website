import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://itstudy-jp.github.io/it-study-server-website',
  base: '/it-study-server-website/',
  integrations: [sitemap()],
})