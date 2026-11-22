# kc9kq.org

This is the Astro site for local development and a GitHub Pages preview. The existing Jekyll site and its deployment are unchanged.

Use Node.js 22.23.4 or newer and npm. Run `npm install` and `npm run dev`, then open the local URL printed by Astro. Use `npm run build` and `npm run preview` to build and preview the static site locally.
Run `npm run format:check` to verify formatting, or `npm run format` to apply
Prettier formatting. Run `npm run lint:markdown` to lint Markdown documentation.
Markdown files use two-space indentation.

## GitHub Pages preview

CI checks pull requests and builds a separate project-site preview on pushes to
`main`. Once this repository's Pages source is set to **GitHub Actions**, the
preview is published at <https://kc9kq.github.io/kc9kq.github.io-Astro/>.
GitHub redirects it to <https://www.kc9kq.net/kc9kq.github.io-Astro/> because
the organization site uses that custom domain. The preview is public and marked
`noindex`; the existing Jekyll site at the domain root remains unchanged.

The workflow sets `GITHUB_PAGES_PREVIEW=true` to build with the preview's
repository path and canonical URL. Without this variable, the build targets
the root of `https://www.kc9kq.net` for a future production cutover. Use
page-relative links in Markdown, and relative HTML `<img>` paths for files in
`public/`; Astro treats relative Markdown image paths as source imports.

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run format`          | Format supported project files with Prettier     |
| `npm run format:check`    | Check formatting without changing files          |
| `npm run lint:markdown`   | Lint Markdown documentation                      |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
