# 72dev-BTP — Premium Construction & Engineering

A production-ready marketing site for **72dev-BTP SARL**, a construction company delivering
road, bridge, building and infrastructure projects across Cameroon and West Africa.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**, styled with a
sharp, square, navy + teal luxury design system and **Space Grotesk** typography.

## Features

- 🎞️ Auto-advancing hero slider (3 real slides, fade transitions, dot navigation, slide counter)
- 🎨 Per-page accent color system (each route shifts the global `--accent` teal shade)
  - Home `#2BBFBF` · About `#2BC4A0` · Services `#2AAFC4` · Portfolio `#3BBFA8` · Contact `#1FA8B8`
- 📐 Square geometric aesthetic (zero border-radius), bento project grid, animated entrances
- 🧭 Sticky navbar with scroll shadow + mobile hamburger menu
- 🗂️ Portfolio with live category filter tabs
- ✉️ Contact form posting to an API route (`/api/contact`)
- 📱 Fully responsive (desktop / tablet / mobile)
- 🐳 Production multi-stage Dockerfile + `output: 'standalone'` — ready for Coolify

## Pages

| Route         | Description                          |
|---------------|--------------------------------------|
| `/`           | Home — hero slider, stats, services, about, projects, process, why-us, testimonials, CTA, partners |
| `/about`      | Our story, why choose us, mission & values |
| `/services`   | Service icon grid + 4 detailed service rows |
| `/portfolio`  | Filterable bento grid of projects    |
| `/contact`    | Contact info + form                  |

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deploy on Coolify

1. Push this repo to GitHub.
2. In Coolify, create a new resource → **Dockerfile** based application from your GitHub repo.
3. Coolify builds the included `Dockerfile` and runs the standalone server on port **3000**.
4. No environment variables are required for the base site. To enable real email delivery,
   wire an email provider inside `app/api/contact/route.ts`.

## Image assets

All imagery is referenced from the live `72dev-btp.com` CDN and centralized in
[`lib/images.ts`](./lib/images.ts) for easy swapping or self-hosting later
(drop files into `/public` and update the manifest).
