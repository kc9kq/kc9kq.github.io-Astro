// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const preview = process.env.GITHUB_PAGES_PREVIEW === 'true';
const previewBase = '/kc9kq.github.io-Astro';

export default defineConfig({
   site: 'https://www.kc9kq.net',
   base: preview ? previewBase : '/',
   trailingSlash: 'always',
});
