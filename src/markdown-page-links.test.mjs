import assert from 'node:assert/strict';
import test from 'node:test';
import { satteri } from '@astrojs/markdown-satteri';
import { markdownPageLinks } from './markdown-page-links.mjs';

const pagesDir = new URL('./pages/', import.meta.url);

async function render(markdown, source, base = '/') {
   const processor = satteri({
      hastPlugins: [markdownPageLinks(pagesDir, base)],
   });
   const renderer = await processor.createRenderer({ syntaxHighlight: false });
   return (
      await renderer.render(markdown, { fileURL: new URL(source, pagesDir) })
   ).code;
}

test('converts source-relative page links and preserves query and fragment', async () => {
   const html = await render(
      '[page](./amateur-radio.md?mode=1#beetown) [home](./index.md)',
      'meetings.md',
   );
   assert.match(html, /href="\/amateur-radio\/\?mode=1#beetown"/);
   assert.match(html, /href="\/"/);
});

test('resolves nested pages and reference links under a preview base', async () => {
   const html = await render(
      '[parent](../meetings.md) [nested][page] [home](../index.md)\n\n[page]: ./index.md#section',
      'guides/start.md',
      '/kc9kq.github.io-Astro',
   );
   assert.match(html, /href="\/kc9kq.github.io-Astro\/meetings\/"/);
   assert.match(html, /href="\/kc9kq.github.io-Astro\/guides\/#section"/);
   assert.match(html, /href="\/kc9kq.github.io-Astro\/"/);
});

test('leaves external, non-page, and fragment links unchanged', async () => {
   const html = await render(
      '[external](https://example.com/a.md) [protocol-relative](//example.com/a.md) [absolute](/a.md) [asset](./a.pdf) [fragment](#heading) [outside](../../README.md) ![image][image]\n\n[image]: ./a.md',
      'meetings.md',
   );
   for (const href of [
      'https://example.com/a.md',
      '//example.com/a.md',
      '/a.md',
      './a.pdf',
      '#heading',
      '../../README.md',
   ]) {
      assert.ok(html.includes(`href="${href}"`), href);
   }
   assert.ok(html.includes('src="./a.md"'));
});

test('leaves links from Markdown outside the pages directory unchanged', async () => {
   const html = await render('[page](./pages/meetings.md)', '../other.md');
   assert.ok(html.includes('href="./pages/meetings.md"'));
});
