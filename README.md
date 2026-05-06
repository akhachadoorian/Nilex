# Nilex Industrial & Safety Supplies

Marketing website for [Nilex Industrial and Safety Supplies](https://nilexindustrial.com) — a woman-owned, family-run small business providing industrial and safety products since 2012.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **GSAP** + **Lenis** — scroll-triggered animations and smooth scrolling
- **React Router** — client-side routing
- **Sass** — styling
- **FontAwesome** + **Phosphor Icons** — iconography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Page content and copy
├── hooks/          # Custom React hooks
├── pages/          # Page-level components
└── types/          # Shared TypeScript types
```

## Deployment

The site deploys to GitHub Pages via `gh-pages`. Run `npm run deploy` to build and publish to the `gh-pages` branch.
