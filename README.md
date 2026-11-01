# Soufiane Elghazi portfolio

React portfolio with the approved light blue and ivory design. Built as a static Vite application and deployed through the existing Vercel/GitHub integration.

## Local development

Use Node.js 24 and npm (the exact dependency tree is committed in `package-lock.json`).

```sh
npm ci
npm start
```

The development site runs at http://127.0.0.1:3000. Run `npm run preview` after a build to inspect the production output, including its security headers, at http://127.0.0.1:4175.

## Quality checks

```sh
npm run check
npm audit --audit-level=low
```

`check` runs lint, component and navigation tests, a production build, artifact/performance budgets, and HTTP smoke checks. The smoke tests bind a temporary local port. GitHub Actions runs the same checks for main, cleanup branches and pull requests. Tests mock external integrations; browser verification is still needed for real PDF rendering and visual changes.

## Source organization

- `src/App.jsx`: application shell and lazy routes.
- `src/components/`: pages and shared components.
- `src/style.css`: structural layout; `src/theme.css`: shared design tokens and visual styling. No legacy dark stylesheet is loaded.
- `src/Assets/optimized/`: generated WebP images and the optimized video used by the app. Keep the source originals for future edits.
- `public/cv.pdf`: the single source for the resume preview and download.
- `public/The_Seeker.pdf`: the book download. It is copied unchanged into the production build.
- `scripts/`: repeatable media optimization and build/HTTP checks.
- `vercel.json`: explicit Vite build settings, SPA routes, caching and security headers.

## Content updates

Replace `public/cv.pdf` or `public/The_Seeker.pdf`, then run `npm run check`. Downloads revalidate instead of caching an old document indefinitely. Do not put private files in `public/`: everything there is published.

For image changes, update the original imported PNG (the cover source is `public/The_Seeker.png`) and run `npm run optimize:images`. Generated images are tracked so CI does not require media processing. Run `npm run optimize:video` after changing `src/Assets/intro.mp4`; that optional authoring command requires FFmpeg. The video uses native controls, does not autoplay, and is not preloaded.

## Dependencies and security

Unused Firebase, Axios, Spline, particle, PDF-generation and legacy build packages were removed. React-PDF uses a matching, bundled PDF.js worker. JavaScript evaluation in PDF.js is disabled. Production headers block framing and object embedding and limit network origins to the integrations the portfolio uses. No credentials are required by this static site.

The `minimatch` override supplies the patched 11.x release to ESLint's development-only dependency tree. Revisit it when upstream ESLint adopts that version; validate lint, tests and the full audit before removing it.

GA4 keeps the existing measurement ID, loads only in production, and records client-side route changes. Development and tests send no analytics.

## Release workflow

Technical changes belong on a `codex/` branch and are reviewed before merging into `main`. Vercel builds `main` for production; `vercel.json` explicitly selects Vite while retaining the existing `build/` output directory. Node.js 24 is pinned in `package.json` and CI.

This is a client-rendered portfolio. The automated checks do not prove every browser/device combination, and an empty dependency audit is not a security guarantee. Review advisories and test the production preview when dependencies or media change.
