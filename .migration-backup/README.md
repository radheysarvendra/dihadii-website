# Dihadii Website

Modern marketing website for **Dihadii** ("Kaam Pe Chalo") — an on-demand platform connecting people to verified labour, mistri, and contractors.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Logo Setup

Add your logo files to the `public/` folder:

- `public/logo.png` — full-color logo for the header
- `public/logo-white.png` — white/light logo for the footer

Until those files are added, placeholder SVGs (`logo.svg`, `logo-white.svg`) are included as fallbacks. Update `Header.tsx` and `Footer.tsx` image paths once your PNGs are ready.

## Tech Stack

- Next.js 14+ (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui (Accordion, Button, Card)
- Lucide React icons

## Project Structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── sections/     # Page sections (Hero, Services, FAQ, etc.)
│   ├── shared/       # Reusable wrappers (SectionWrapper, CountUp)
│   └── ui/           # shadcn/ui components
└── lib/              # Utilities and animation variants
```

## Customization

All placeholder content is clearly marked in the source:

- **Stats** — edit numbers in `WhyTrustUs.tsx` and `TrustBar.tsx`
- **Cities** — update the `cities` array in `Coverage.tsx`
- **Testimonials** — replace sample quotes in `Testimonials.tsx`
- **Press logos** — replace placeholder names in `TrustBar.tsx`
- **FAQ** — edit Q&A pairs in `FAQ.tsx`

## Deploy

Ready for Vercel deployment:

```bash
npm run build
```

## Brand Guidelines

- Primary: `#1554F6` (royal blue)
- Accent: `#F59E0B` (warm orange) — CTAs only
- Background: `#F7F9FC`
- Text: `#0B1730`
- Tagline: "Right Worker, Right Price"
- No speed/ETA claims anywhere on the site
