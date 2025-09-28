# Toolz — Productive tools for your flow

This is a Next.js 15 (App Router) site for the Toolz product studio. It showcases the SideThreadGPT Chrome extension and
future products with Radix Themes styling, TanStack Query providers, and Google Analytics instrumentation.

## Getting started

```bash
npm install
npm run dev
```

The site is available at `http://localhost:3000` with the following routes:

- `/` — marketing home
- `/products` — product catalog
- `/products/sidethreadgpt` — SideThreadGPT details (SSR)
- `/privacy` and `/terms`

## Environment variables

Create an `.env.local` file based on `.env.example` and set your production URL and GA4 ID.

## Assets

Screenshot assets are lightweight SVG placeholders located in `public/screenshots/sidethreadgpt/`. They can be replaced with
production-ready images (e.g., WebP) as needed.

Favicon and app icon assets are generated dynamically (SVG/OG) to avoid binary files in version control.
