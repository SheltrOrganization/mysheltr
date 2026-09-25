# Sheltr Website

The public marketing website for **Sheltr**, India's KYC-verified rental marketplace. This is a
Next.js 15 App Router project, fully statically exported (`output: "export"` in
`next.config.mjs`) — there are no API routes and no backend here. It's plain HTML/CSS/JS once
built.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Static export (`next build` produces a static `out/` directory — no Node server required to
  serve it)

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

Other useful scripts:

```bash
npm run lint        # ESLint
npm run typecheck    # tsc --noEmit
```

## Building for production

```bash
npm run build
```

Because `next.config.mjs` sets `output: "export"`, `npm run build` produces a fully static site
in `out/` — no `npm run start` / Node server is needed in production. You can host `out/` on any
static file host or CDN.

To preview the static export locally before deploying:

```bash
npx serve out
```

## Deployment

### Vercel

Works out of the box with Vercel's default Next.js build settings (Vercel detects the App Router
project and the static export automatically). No special configuration is required.

### Netlify

Configure:

- **Build command:** `npm run build`
- **Publish directory:** `out`

### Any other static host

Since the site is a plain static export, `out/` can be uploaded to any static hosting provider
(S3 + CloudFront, GitHub Pages, Cloudflare Pages, etc.) — there's no server-side runtime
dependency.

## Configuration

All external URLs, emails, and business-identity values (marketing domain, web app origin, Play
Store / App Store links, support email, business address, legal entity name) live in a single
file:

```
config/site.ts
```

Nothing else in the codebase should hardcode a URL, email address, or business-contact value —
everything reads from `siteConfig`. Several of these values are currently placeholders (see
`FINAL_PLACEHOLDER_REPORT.md`, below) and need to be replaced with real values before launch.

## Analytics

Analytics is abstracted behind a single function in `lib/analytics.ts` (`trackEvent`). Every
trackable interaction across the site (CTA clicks, FAQ expands, app download clicks, pricing plan
views, form submits) already calls `trackEvent(...)` — the function itself is currently a no-op
that only `console.debug`s in development.

To wire up real analytics, edit the body of `trackEvent()` in `lib/analytics.ts` to call either:

- **GA4** — via `window.gtag(...)`, once the GA4 script/measurement ID is added to the app, or
- **Plausible** — via `window.plausible(...)`, once the Plausible script/domain is added.

No other file needs to change — every call site already passes a typed `AnalyticsEvent`.

## Replacing placeholders before launch

Several values across the site (URLs, the support email, business address/legal entity name, App
Store / Play Store links, the production marketing domain) are currently placeholders, and the
four legal pages (`app/legal/*`) are drafts pending legal review. See
**[`FINAL_PLACEHOLDER_REPORT.md`](./FINAL_PLACEHOLDER_REPORT.md)** at the project root for a full,
grep-verified audit of everything that needs a real value or a legal sign-off before this site
goes live.
