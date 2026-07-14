---
name: Vercel/Next.js port: Link conversion
description: How to reliably replace next/link with plain anchors when porting a Next.js app to Vite, and how the fullstack-copy-frontend migration script behaves around next-only dependencies.
---

When converting `next/link` usages to plain `<a>` tags during a Vercel→Vite port:

- A single-line sed (`s/<Link /<a /`) only catches same-line opening tags. Multi-line JSX like:
  ```jsx
  <Link
    href={x}
  >
  ```
  needs a second pass: `sed -i 's/<Link$/<a/'` to catch the bare `<Link` at end of line before attributes wrap.
- `tsc --noEmit` catches leftover unconverted `<Link>` immediately as `TS17002: Expected corresponding JSX closing tag` — run typecheck right after the conversion, don't assume the sed pass was complete.

**Why:** Missed conversions silently break the build with a confusing generic JSX error rather than an obvious "next/link" reference, costing an extra debugging round trip.

**How to apply:** After converting Next.js Link/Image imports during a port, run `pnpm --filter @workspace/<slug> run typecheck` before moving on, and grep for the bare component name (`Link`) rather than trusting the importremoval alone.

Also: the `fullstack-copy-frontend.sh` script can mis-detect `next` as a dependency to (re)install even for a pure Vite target — check `package.json` after running it and strip `next`/`next-themes`/other Next-only deps it may have added or left behind.
