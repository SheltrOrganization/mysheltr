# Final Placeholder Report

A grep-verified audit of every remaining placeholder, `TODO`, "coming soon" state, and
launch-blocking item in `app/`, `components/`, `config/`, and `lib/`, as of this report. Re-run
the commands below before launch to confirm nothing new has crept in:

```bash
grep -rn "PLACEHOLDER" app components config lib
grep -rn "TODO" app components config lib
grep -rni "coming soon" app components
```

Note: **Pass pricing and validity are real data, not placeholders.** `lib/content.ts` sources plan
prices and validity windows from the live product docs (BRD/PRD/DATA_MODEL). **Unlock quota per
plan is the one exception** — product has confirmed the exact number of unlocks per plan is not
finalized yet, so `PassPlan.unlockQuota` is intentionally typed as `"unspecified"` and rendered as
"Contact unlocks: to be confirmed" everywhere it appears (`components/PricingCard.tsx`,
`app/pricing/page.tsx`, and the "What is a Sheltr Pass?" FAQ answer in `lib/content.ts`). Update
`PassPlan.unlockQuota`'s type and the three `passPlans` entries once real numbers are confirmed.

---

## 1. URLs

| Item | File | Current value | What's needed |
|---|---|---|---|
| Production marketing domain | `config/site.ts` (`url`) | `"https://mysheltr.in"` | Confirm this is the real production domain before launch (flagged with a `TODO` in the source: "confirm the production marketing domain before launch"). |
| Web app origin | `config/site.ts` (`webAppUrl`) | `""` (empty) | The tenant/landlord web app isn't live yet, so every CTA that would point here (`ButtonLink` with `href={siteConfig.webAppUrl}`) intentionally renders as a visible but inert, non-navigating `<button>` instead of a link. Set to the real web-app origin once it ships — CTAs will automatically become real links again. Source comment explicitly warns not to link to `erp.mysheltr.in` (the backend/API host) directly. |
| Play Store listing | `config/site.ts` (`links.playStore`) | `"https://play.google.com/store/apps/details?id=PLACEHOLDER"` | Replace `id=PLACEHOLDER` with the real Play Store package ID once listed live. |
| App Store listing | `config/site.ts` (`links.appStore`) | `"https://apps.apple.com/app/idPLACEHOLDER"` | Replace `idPLACEHOLDER` with the real App Store ID. Source comment notes this is expected once the HESICS iOS release (target 2026-10-10) ships. Also referenced as "(coming soon)" next to the App Store button in `components/AppDownload.tsx` — remove that label once the real link is live. |

## 2. Emails / contact

| Item | File | Current value | Status |
|---|---|---|---|
| Support email | `config/site.ts` (`contact.supportEmail`) | `"findyoursheltr@gmail.com"` | **Resolved** — confirmed real inbox, used across the site (footer, contact page, all four legal pages). Note: the Privacy Policy page (`app/legal/privacy-policy/page.tsx`) uses two different, role-specific addresses instead — `findyoursheltr@gmail.com` (tenant) and `rentyoursheltr@gmail.com` (landlord) — sourced verbatim from the app's own privacy copy in `lib/legalContent.ts`, not from this config value. |

## 3. Business address / legal entity name

| Item | File | Current value | What's needed |
|---|---|---|---|
| Business address | `config/site.ts` (`contact.businessAddress`) | `"[Sheltr business address — PLACEHOLDER]"` | Real registered business address not yet provided. Surfaced verbatim on `/contact`. |
| Legal entity name | `config/site.ts` (`contact.businessName`) | `"[Sheltr legal entity name — PLACEHOLDER]"` | Real legal entity name not yet provided. Defined in config but not currently rendered on any page — should be wired into the legal pages and/or footer once a real value exists (e.g. entity name in a copyright/legal-entity line). |
| Governing law / jurisdiction | `app/legal/terms-of-service/page.tsx` (§9) | `"[Governing law / jurisdiction — PLACEHOLDER, requires legal review]"` | Needs a lawyer-specified governing law and jurisdiction clause. |

## 4. App Store / Play Store URLs

See section 1 (URLs) — both listed there. Additional note: the App Store button in
`components/AppDownload.tsx` shows a `(coming soon)` badge (see section 7) that should be removed
once the real App Store link goes live.

## 5. Analytics

| Item | File | Current state | What's needed |
|---|---|---|---|
| Analytics wiring | `lib/analytics.ts` (`trackEvent`) | No-op stub; only `console.debug`s in development (`TODO: wire to GA4 (window.gtag) or Plausible (window.plausible) once an analytics ID is configured`) | Every interaction site already calls `trackEvent(...)` with a typed event — once a GA4 measurement ID or Plausible domain is available, implement the real call inside this single function. No analytics ID (GA4 or Plausible) exists anywhere in the codebase yet. |

## 6. Legal pages requiring review

All four pages below are new (this task) and each carries a **"DRAFT — requires legal review"**
banner (`components/LegalDraftNotice.tsx`) at the top of the page:

| Page | File |
|---|---|
| Privacy Policy | `app/legal/privacy-policy/page.tsx` |
| Terms of Service | `app/legal/terms-of-service/page.tsx` |
| Refund & Cancellation Policy | `app/legal/refund-cancellation/page.tsx` |
| Shipping / Delivery Policy | `app/legal/shipping-delivery/page.tsx` |

None of these should be treated as final or DPDP-compliant until a qualified lawyer reviews them.
The Terms of Service page additionally contains the explicit governing-law placeholder listed in
section 3.

## 7. "Coming soon" states

| Item | File | Current state | What's needed |
|---|---|---|---|
| iOS app | `app/page.tsx` (homepage app-download section) | "on Android today, iOS coming soon" | Update copy once the iOS app ships (HESICS contract target 2026-10-10 per project notes) and the App Store link (section 1) goes live. |
| App Store button badge | `components/AppDownload.tsx` | `App Store (coming soon)` label next to the button | Remove once a real App Store link is live. |
| City pages — Coimbatore | `app/rent/[city]/page.tsx` via `lib/content.ts` (`cities`) | `live: false` | No city currently has `live: true`. Each city page renders a "Coming soon to {city}" state (badge + copy) driven entirely by this flag. Flip to `live: true` in `lib/content.ts` once verified listings actually exist for that city — do this per-city, not all at once, unless all four genuinely have live inventory simultaneously. |
| City pages — Chennai | same as above | `live: false` | Same. |
| City pages — Bangalore | same as above | `live: false` | Same. |
| City pages — Hyderabad | same as above | `live: false` | Same. |

`lib/content.ts` line 153 has an explicit comment calling this an "architecture placeholder... no
city coverage is claimed live yet."

## 8. Image / screenshot placeholders

| Item | File | Current state | What's needed |
|---|---|---|---|
| Phone mockup screenshots | `components/PhoneMockup.tsx` | Renders an abstract gradient/skeleton `PlaceholderScreen` (rounded bars, no real UI) when no `children` is passed. Component doc comment: "Ships with an abstract placeholder illustration — swap `children` for a real screenshot when one is available." | Used on the homepage hero (`app/page.tsx`, `<PhoneMockup label="Verified listings near you" />` with no `children`). Replace with a real app screenshot (image or screen component) once available. |

## 9. Other functional TODOs (not content placeholders, but launch-relevant)

| Item | File | Current state | What's needed |
|---|---|---|---|
| Contact form submission | `app/contact/page.tsx` | `TODO: Connect form submission to production support endpoint.` Form currently just flips local `submitted` state and tells the user to email support directly instead — it does not actually send anything anywhere. | Since this is a static-export site with no backend, wire the form to a real endpoint (e.g. a form-as-a-service provider, or a serverless function hosted elsewhere) before launch, or keep the current "email us directly" fallback copy if no such integration is planned. |

---

## Summary count

- **Config placeholders (`config/site.ts`):** 5 — marketing domain (confirm), web app URL,
  Play Store URL, App Store URL, support email, business address, business name (7 distinct
  `TODO`/`PLACEHOLDER` markers across 6 fields).
- **Legal placeholder text:** 1 explicit bracketed placeholder (governing law/jurisdiction in
  Terms of Service) + all 4 legal pages pending lawyer review.
- **"Coming soon" states:** iOS app/App Store button (1) + 4 city pages (Coimbatore, Chennai,
  Bangalore, Hyderabad).
- **Image placeholders:** 1 (`PhoneMockup` abstract illustration, used on the homepage).
- **Functional TODO:** 1 (contact form has no live backend to submit to).

Nothing else matched the `PLACEHOLDER` / `TODO` / "coming soon" / bracketed-text greps beyond
ordinary code syntax (React `useState<...>` generics, Tailwind arbitrary-value classes like
`hover:bg-[var(--color-primary-hover)]`, and CSS attribute selectors like
`:root[data-theme="dark"]`), which are not content placeholders and are not listed above.
