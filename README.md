# Bill Raymond Portfolio

A static SvelteKit portfolio for Bill Raymond focused on AI leadership consulting, selected client outcomes, and client conversion.

## Stack

- SvelteKit 2
- Svelte 5
- TypeScript
- Tailwind CSS 4
- GSAP
- Vitest + Testing Library
- GitHub Pages via `@sveltejs/adapter-static`

## Local Development

```sh
npm install
npm run dev
```

Open the forwarded dev server and iterate on the homepage sections in `src/routes/+page.svelte` and the shared content in `src/lib/content/site.ts`.

## Validation

```sh
npm run check
npm test
npm run build
```

`npm test` runs:

- unit/component tests with Vitest
- a production build smoke test that verifies the generated static site contains the key homepage content

## Content Updates

Most portfolio content is centralized in:

- `src/lib/content/site.ts` for profile copy, services, outcome highlights, metadata, and contact configuration

Reusable homepage sections live in:

- `src/lib/components`

## Contact Form

The contact form is set up for a static-site-friendly form provider. Before launch, replace the placeholder Formspree endpoint in `src/lib/content/site.ts`:

```ts
formAction: 'https://formspree.io/f/placeholder'
```

You should also replace the placeholder email and scheduling links before publishing.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages.

- `ci.yml` runs type checks, tests, and a production build on pushes and pull requests
- `deploy-pages.yml` validates the site and publishes the `build/` output on `main`

`BASE_PATH` is still handled automatically for GitHub Pages project sites versus user/org sites.
