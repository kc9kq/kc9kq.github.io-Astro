# kc9kq.org

This is the Astro site for local development and a GitHub Pages preview. The existing Jekyll site and its deployment are unchanged.

Use Node.js 22.23.4 or newer and npm. Run `npm install` and `npm run dev`, then open the local URL printed by Astro. Use `npm run build` and `npm run preview` to build and preview the static site locally.
Run `npm run all` to build and run all checks.
Run `npm test` to test Markdown link conversion.
Run `npm run format:check` to verify formatting, or `npm run format` to apply
Prettier formatting. Run `npm run lint:markdown` to lint Markdown documentation.
Markdown files use two-space indentation.
JSON and JSONC files also use two-space indentation and no trailing commas;
the formatting check verifies these conventions in CI.

## Production deployment

Pull requests run the site checks. Pushes to `main` build and deploy the
production site to <https://www.kc9kq.net/> using GitHub Pages and the custom
domain in `public/CNAME`. This replaces the previous Jekyll site.

The Astro build targets the root of `https://www.kc9kq.net`. Relative Markdown
links to `.md` files in `src/pages/` resolve from the source file to the
corresponding page URL, including query strings and fragments. Other links
are unchanged. Use relative HTML `<img>` paths for files in `public/`;
Astro treats relative Markdown image paths as source imports.

## Dependency updates

Renovate proposes dependency updates as pull requests for manual review and
merge; automerge is disabled. Its Dependency Dashboard issue tracks updates
and flags potentially abandoned packages.

The update window is midnight to 5 a.m. Central Time each night. Renovate's
service controls its actual run frequency, so the window does not guarantee
exactly one run per night. Install and enable the Renovate GitHub App for this
repository to use the configuration. Dependabot remains enabled separately and
may also propose updates.

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
| `npm run all`             | Build and run all checks                         |
| `npm test`                | Test Markdown link conversion                    |
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
