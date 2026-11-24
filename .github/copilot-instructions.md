# Repository commands

- Prefer the existing npm scripts in `package.json` for development, builds, formatting, and linting.
- Run `npm run format:check` to check formatting. If fixes are needed, `npm run format` formats the entire repository.
- Use two-space indentation for JSON and JSONC files. Do not add trailing commas to JSON or JSONC; Prettier enforces this during `npm run format:check`.
- Run `npm run lint:markdown` when changing Markdown or its lint configuration.
