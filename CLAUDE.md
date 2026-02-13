# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

There are no tests and no linter configured.

`npx tsc --noEmit` reports a pre-existing error about missing `@types/node` — use `npx vite build` to verify actual compilation correctness instead.

## Architecture

Single-page marketing site for a café in Olsztyn, Poland. React + TypeScript, built with Vite, deployed to GitHub Pages at `/cafe-moderna/`.

**Tailwind is loaded from CDN** (`index.html`), not installed as a package. The theme (stone color palette, `font-sans`/`font-serif` aliases for Inter/Playfair Display) is configured inline in `index.html` via `tailwind.config`. There is no `tailwind.config.js` file. The stone palette only defines 50/100/200/300/400/500/800/900 — `stone-600` and `stone-700` are intentionally absent from the custom config but still resolve via Tailwind's defaults.

**Data flow:** All content lives in `constants.ts` and is imported directly into components. `types.ts` defines the shared interfaces (`MenuItem`, `MenuSection`, `Review`, `SocialLink`). There is no state management, routing, or API layer.

**Component structure** (`components/`): `Navbar`, `Hero`, `About`, `Menu`, `Gallery`, `Contact`, `Footer` — assembled in `App.tsx` top-to-bottom as page sections. Navigation uses anchor links (`#about`, `#menu`, etc.) with CSS smooth scroll.

**Animations:** Framer Motion throughout — all scroll-triggered entrance animations use `whileInView` + `viewport={{ once: true }}`. The `Menu` component uses `AnimatePresence` for a modal (full menu overlay) and tab transitions.

**CI/CD:** Push to `master` triggers `.github/workflows/deploy.yml` — runs `npm ci && npm run build`, then uploads `dist/` to GitHub Pages.
