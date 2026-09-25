/**
 * Product facts shared across pages. Sourced from the live Sheltr product
 * docs (BRD.md / PRD.md / DATA_MODEL.md, Downloads/shltr documents/) — not
 * invented for the website. Update this file, not individual pages, when a
 * product fact changes.
 */

export type PassPlan = {
  id: string;
  name: string;
  priceInInr: number;
  validityDays: number;
  // TODO(placeholder): the exact unlock quota per plan is not finalized yet
  // — keep this unspecified everywhere it's rendered until product confirms
  // real numbers. Do not substitute a guessed number or "unlimited".
  unlockQuota: "unspecified";
  highlight?: boolean;
  description: string;
};

// Seeded idempotently by the backend's setup/install.py — see DATA_MODEL.md
// "Pass Plan". Price and validity are the live, real tiers; unlock quota is
// intentionally left unspecified (not yet finalized — see PassPlan above).
export const passPlans: PassPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceInInr: 299,
    validityDays: 7,
    unlockQuota: "unspecified",
    description: "For a focused, short search in one neighbourhood.",
  },
  {
    id: "standard",
    name: "Standard",
    priceInInr: 499,
    validityDays: 15,
    unlockQuota: "unspecified",
    highlight: true,
    description: "The most-picked plan for a typical city-wide search.",
  },
  {
    id: "premium",
    name: "Premium",
    priceInInr: 999,
    validityDays: 30,
    unlockQuota: "unspecified",
    description: "For a wide, unhurried search across the city.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  audience: "tenant" | "landlord";
};

export const faqItems: FaqItem[] = [
  {
    audience: "tenant",
    question: "How does Sheltr work?",
    answer:
      "Browse KYC-verified listings for free — every detail is visible except the landlord's phone number. When you're ready to talk to owners, buy a Sheltr Pass to unlock a set number of contacts, then call or message them directly. Sheltr doesn't broker the deal, collect rent, or manage the lease.",
  },
  {
    audience: "tenant",
    question: "Is browsing free?",
    answer:
      "Yes. You can search, filter, and view full listing details — rent, location, amenities, photos — without paying anything. Only the landlord's phone number is masked until you unlock it.",
  },
  {
    audience: "tenant",
    question: "What is a Sheltr Pass?",
    answer:
      "A time-boxed pass that unlocks landlord phone numbers. Plans range from a 7-day Starter pass to a 30-day Premium pass — the exact number of unlocks per plan will be confirmed soon. Payments are handled securely through Razorpay, or through Apple's in-app purchase system on iOS.",
  },
  {
    audience: "tenant",
    question: "How do contact unlocks work?",
    answer:
      "Each time you unlock a new landlord's number, it counts against your pass's quota. Re-viewing a number you've already unlocked is free — you're never charged twice for the same listing.",
  },
  {
    audience: "tenant",
    question: "How long does a Pass remain active?",
    answer:
      "Validity depends on the plan you choose — 7, 15, or 30 days from purchase. Once it expires, you'll need a new pass to unlock further contacts, but numbers you already unlocked remain visible to you.",
  },
  {
    audience: "tenant",
    question: "Can I contact a landlord directly?",
    answer:
      "Yes. Once a number is unlocked, you contact the landlord directly, off-platform — by call or message. Sheltr's role ends at putting you in touch.",
  },
  {
    audience: "tenant",
    question: "Can I schedule a viewing through Sheltr?",
    answer:
      "Not in the app today. Once you've connected with a landlord, arrange the viewing directly with them, the same way you would after any phone introduction.",
  },
  {
    audience: "tenant",
    question: "What happens if a listing looks suspicious?",
    answer:
      "Flag it from the listing page. Our Verifier team reviews every report and can pull a listing from the marketplace if it doesn't hold up.",
  },
  {
    audience: "landlord",
    question: "How do I list my property?",
    answer:
      "Create a landlord account, add your property details and photos, and submit it for review. Your listing goes live once your KYC is approved — there's no separate publish step.",
  },
  {
    audience: "landlord",
    question: "Is listing free?",
    answer:
      "Yes. Sheltr doesn't charge landlords to list or to stay listed. Revenue comes from tenants purchasing Passes to unlock contacts, not from landlord fees.",
  },
  {
    audience: "landlord",
    question: "What documents are required for KYC?",
    answer:
      "Your Aadhaar (name as printed on the ID) and a recent electricity bill for the property. A human verifier reviews the submission — there's no automated document matching.",
  },
  {
    audience: "landlord",
    question: "How does KYC verification work?",
    answer:
      "You submit your documents once per property. A member of our Verifier team manually checks them before your listing is published. If something's unclear, you can resubmit.",
  },
  {
    audience: "landlord",
    question: "How long does verification take?",
    answer:
      "Review times vary with volume. We'll notify you as soon as a decision is made — approved listings publish immediately, and you can resubmit right away if a submission is rejected.",
  },
  {
    audience: "landlord",
    question: "How do tenants contact me?",
    answer:
      "Once a tenant unlocks your number using their Pass, they'll call or message you directly. You don't need to do anything in the app to receive that contact.",
  },
  {
    audience: "landlord",
    question: "How can I manage my listing?",
    answer:
      "Update your listing's status — Available, Reserved, or Rented — any time from your dashboard, so tenants always see accurate availability.",
  },
];

export type City = {
  slug: string;
  name: string;
  live: boolean;
};

// Architecture placeholder for /rent/[city] — no city coverage is claimed
// live yet. Populate `live: true` only once a city actually has verified
// listings to show.
export const cities: City[] = [
  { slug: "coimbatore", name: "Coimbatore", live: false },
  { slug: "chennai", name: "Chennai", live: false },
  { slug: "bangalore", name: "Bangalore", live: false },
  { slug: "hyderabad", name: "Hyderabad", live: false },
];
