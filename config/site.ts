/**
 * Single source of truth for every external URL and business-contact value
 * used across the site. Nothing outside this file should hardcode a link,
 * an email address, or a phone number — see FINAL_PLACEHOLDER_REPORT.md for
 * what still needs a real value before launch.
 */

export const siteConfig = {
  name: "Sheltr",
  tagline: "Verified homes. No brokerage.",
  description:
    "Sheltr is India's KYC-verified rental marketplace. Browse free, unlock a landlord's number with a Sheltr Pass, and connect directly — no broker fee.",

  // TODO: confirm the production marketing domain before launch.
  url: "https://mysheltr.in",

  // TODO(placeholder): intentionally empty — the tenant/landlord web app
  // isn't live yet. `ButtonLink` renders every CTA that points here as a
  // visible but inert (non-navigating) button while this stays empty.
  // Set to the real web-app origin once it ships. `erp.mysheltr.in` is the
  // backend/API host, not a consumer-facing app — never link to it directly
  // from marketing pages.
  webAppUrl: "",

  links: {
    // TODO(placeholder): replace with live Play Store listing URL.
    playStore: "https://play.google.com/store/apps/details?id=PLACEHOLDER",
    // TODO(placeholder): replace with live App Store listing URL once the
    // HESICS iOS release (target 2026-10-10) ships.
    appStore: "https://apps.apple.com/app/idPLACEHOLDER",
  },

  contact: {
    supportEmail: "findyoursheltr@gmail.com",
    // TODO(placeholder): real registered business address not yet provided.
    businessAddress: "[Sheltr business address — PLACEHOLDER]",
    businessName: "[Sheltr legal entity name — PLACEHOLDER]",
  },

  social: {
    // No social links confirmed yet — add here (and only here) once live.
  },

  payments: {
    // Razorpay handles payment on Android and web. iOS payments go through
    // Apple's in-app purchase system instead (App Store policy requires this
    // for digital goods) — mention both wherever payment method is described.
    provider: "Razorpay",
    iosProvider: "Apple in-app purchase",
    currency: "INR",
    currencySymbol: "₹",
  },
} as const;

export type SiteConfig = typeof siteConfig;
