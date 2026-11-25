export function markdownPageLinks(pagesDir, base) {
   return {
      name: 'markdown-page-links',
      element: {
         filter: ['a'],
         visit(node, ctx) {
            const href = node.properties?.href;
            if (
               typeof href !== 'string' ||
               !ctx.fileURL?.href.startsWith(pagesDir.href) ||
               /^(?:\/|[a-z][a-z\d+.-]*:)/i.test(href) ||
               !/^[^?#]+\.md(?:[?#]|$)/.test(href)
            ) {
               return;
            }

            const target = new URL(href, ctx.fileURL);
            if (!target.href.startsWith(pagesDir.href)) return;

            const route = target.pathname
               .slice(pagesDir.pathname.length)
               .replace(/\.md$/, '')
               .replace(/(^|\/)index$/, '');
            const prefix = base === '/' ? '' : base.replace(/\/$/, '');
            const path = route ? `/${route.replace(/\/$/, '')}/` : '/';
            ctx.setProperty(
               node,
               'href',
               `${prefix}${path}${target.search}${target.hash}`,
            );
         },
      },
   };
}
