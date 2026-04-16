# Technical Setup

This repository is a static SvelteKit portfolio deployed to GitHub Pages. The codebase is structured around typed content configuration, reusable Svelte sections, and a small validation pipeline that protects the homepage build.

## Architecture

- `src/routes/+layout.svelte`
  - global metadata, favicon, and app-wide styling entrypoint
- `src/routes/+page.svelte`
  - homepage composition and GSAP motion orchestration
- `src/lib/content/site.ts`
  - typed source of truth for portfolio copy, metadata, services, outcomes, and contact settings
- `src/lib/components/*`
  - reusable homepage sections

## Stack

- Node 22
- SvelteKit 2
- Svelte 5
- TypeScript
- Tailwind CSS 4
- GSAP
- Vitest
- Testing Library
- `@sveltejs/adapter-static`

## Static Deployment Notes

The site is built for GitHub Pages:

- `@sveltejs/adapter-static` writes output to `build/`
- `BASE_PATH` is set in the deploy workflow so both project pages and user/organization pages work
- `trailingSlash = 'always'` and `fallback = '404.html'` remain enabled for static hosting compatibility

## Validation Pipeline

The project expects these commands to pass:

```sh
npm run check
npm test
npm run build
```

Validation coverage:

- `npm run check`
  - SvelteKit sync + type checking with `svelte-check`
- `npm run test:unit`
  - renders the homepage and verifies key sections and form configuration
- `npm run test:build`
  - performs a production build and confirms the generated static HTML includes the expected portfolio content

## Contact Form Integration

Because GitHub Pages is static, the contact form posts to a third-party form endpoint instead of a custom backend. The placeholder lives in `src/lib/content/site.ts` and must be replaced before launch.

## Motion and Accessibility

- GSAP motion is scoped through the existing `withGsapContext` helper
- animations are skipped when `prefers-reduced-motion: reduce` is enabled
- styling includes visible focus states and mobile-first layouts
