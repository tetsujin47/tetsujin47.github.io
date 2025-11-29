# Repository Guidelines

## Project Structure & Module Organization
- `src/index.tsx` bootstraps the CRA-based React + TypeScript app; global styles live in `src/index.css`.
- Reusable UI lives in `src/components/` (one component per file, PascalCase filenames).
- Page scaffolding and theming: `src/LandingPage.tsx` and `src/getLPTheme.tsx`.
- Testing and utilities: `src/setupTests.ts` (Testing Library setup), `src/reportWebVitals.ts`.
- Static assets and HTML shell reside in `public/`; build output goes to `build/` (ignored).

## Build, Test, and Development Commands
- `yarn start` / `npm start`: Run the local dev server with hot reload.
- `yarn build` / `npm run build`: Create an optimized production bundle (used for deploys).
- `yarn test` / `npm test`: Run Jest in watch mode via `react-scripts test`.
- `yarn deploy` / `npm run deploy`: Publish `build/` to GitHub Pages (`homepage` is `/smartjan_site/`).

## Coding Style & Naming Conventions
- TypeScript/JSX with Prettier defaults: 2 spaces, single quotes, no semicolons, trailing commas where valid.
- Component files use PascalCase; hooks/utilities use camelCase.
- Keep components presentational where possible; lift shared state to parents.
- Styles follow MUI + Emotion patterns already used in `components/`.

## Testing Guidelines
- Use React Testing Library + Jest; place specs alongside code as `ComponentName.test.tsx`.
- Prefer testing user-facing behavior (text, ARIA roles) over implementation details.
- Run `yarn test --watch=false` before pushing for a deterministic pass locally.

## Commit & Pull Request Guidelines
- Commit messages are short and imperative; Japanese or English is fine (e.g., `画像の修正`, `Add FAQ layout`).
- Before opening a PR: ensure `yarn build` and `yarn test` pass; re-run Prettier if needed (`npx prettier --write src`).
- PRs should include a concise summary, linked issue (if any), and screenshots/gifs for UI changes (desktop + mobile when relevant).
- Keep changes focused; separate refactors from feature work when possible.

## Deployment Notes
- Deploys use `gh-pages`; the repo is served under `/smartjan_site/`. Verify asset paths stay relative.
- Avoid embedding secrets; configuration should be static and client-safe.

## Agent-Specific Instructions
- このリポジトリに関する返答は常に日本語で返してください。
