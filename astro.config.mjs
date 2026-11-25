// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { markdownPageLinks } from './src/markdown-page-links.mjs';

// https://astro.build/config
const preview = process.env.GITHUB_PAGES_PREVIEW === 'true';
const previewBase = '/kc9kq.github.io-Astro';
const base = preview ? previewBase : '/';

export default defineConfig({
   site: 'https://www.kc9kq.net',
   base,
   trailingSlash: 'always',
   markdown: {
      processor: satteri({
         hastPlugins: [
            markdownPageLinks(new URL('./src/pages/', import.meta.url), base),
         ],
      }),
   },
});
