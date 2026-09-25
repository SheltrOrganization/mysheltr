import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { TrustCard } from "@/components/TrustCard";
import { PricingCard } from "@/components/PricingCard";
import { SavingsComparison } from "@/components/SavingsComparison";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { passPlans, faqItems } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "For Tenants",
  description:
    "Browse KYC-verified rental listings for free. Buy a Sheltr Pass to unlock a landlord's number and connect directly — no broker fee, no middleman.",
};

export default function ForTenantsPage() {
  const tenantFaqs = faqItems.filter((item) => item.audience === "tenant");

  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Tenants" }]} />
        <div className="mt-6 max-w-2xl">
          <VerifiedBadge label="Every landlord is KYC-verified" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Find a home, and talk to the landlord <span className="text-primary">yourself</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Search verified listings for free. When you find a place you like, unlock the
            landlord&apos;s number with a Sheltr Pass and call or message them directly — no
            broker fee, no one in between.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              Find a home
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              See Pass pricing
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Free browsing */}
      <Section muted>
        <SectionHeading
          eyebrow="Step 1"
          title="Browse and search for free"
          description="Search by city, budget, and property type. Rent, location, amenities, and photos are all visible from the start — no login wall, no payment needed just to look."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<SearchIcon />}
            title="Full listing details, always visible"
            description="Everything about a listing is open to view — rent, deposit, amenities, floor, and photos — the moment you find it."
          />
          <TrustCard
            icon={<EyeOffIcon />}
            title="Only the phone number is masked"
            description="The landlord's contact number stays hidden until you choose to unlock it. Nothing else about the listing is held back."
          />
        </div>
      </Section>

      {/* Verified listings */}
      <Section>
        <SectionHeading
          eyebrow="Step 2"
          title="Every landlord is KYC-verified before a listing goes live"
          description="Before a property appears in search, its landlord has submitted Aadhaar details and an electricity bill for that address, and a human Verifier has reviewed the submission."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<ShieldIcon />}
            title="Human-reviewed, not automated"
            description="A member of our Verifier team checks each submission by hand — there's no automated document-matching deciding who gets listed."
          />
          <TrustCard
            icon={<BadgeIcon />}
            title="Verified badge on every listing"
            description="Listings you see carry a KYC Verified badge, so you know the landlord behind the property has been checked."
          />
          <TrustCard
            icon={<FlagIcon />}
            title="Flag anything that looks off"
            description="If a listing seems suspicious, flag it from the listing page. A Verifier reviews the report and can pull the listing if it doesn't hold up."
          />
        </div>
      </Section>

      {/* Pass explanation */}
      <Section muted id="pass">
        <SectionHeading
          eyebrow="Step 3"
          title="Buy a Sheltr Pass to unlock contacts"
          description="A Pass is time-boxed and gives you a fixed number of phone-number unlocks. Pick the plan that fits how long and how widely you're searching."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {passPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Re-viewing a number you&apos;ve already unlocked is always free — you&apos;re never
          charged twice for the same listing.
        </p>
        <p className="mt-4">
          <ButtonLink href="/pricing" variant="ghost" className="!p-0">
            Full pricing details →
          </ButtonLink>
        </p>
      </Section>

      {/* Direct contact + viewing note */}
      <Section>
        <SectionHeading
          eyebrow="Step 4"
          title="Call or message the landlord directly"
          description="Once you unlock a number, Sheltr's part is done — you reach out to the landlord yourself, the same way you'd contact anyone else."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<PhoneIcon />}
            title="A real phone number, not in-app chat"
            description="There's no in-app messaging between tenant and landlord. You get the landlord's actual number and take it from there — call or WhatsApp, whichever suits you both."
          />
          <TrustCard
            icon={<HomeIcon />}
            title="Viewings are arranged directly with the landlord"
            description="Sheltr doesn't schedule visits in the app. Once you've connected, agree on a time to see the place directly with the landlord, off-platform."
          />
        </div>
      </Section>

      {/* Savings comparison */}
      <Section muted>
        <SectionHeading
          eyebrow="The savings"
          title="A Sheltr Pass costs a fraction of a broker fee"
          description="Sheltr replaces the broker fee with a smaller, capped Pass fee — it doesn't remove every cost of renting, but it does cut out the biggest one."
        />
        <div className="mt-10">
          <SavingsComparison />
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Frequently asked by tenants" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={tenantFaqs} />
        </div>
        <p className="mt-6">
          <ButtonLink href="/faq" variant="ghost" className="!p-0">
            See all FAQs →
          </ButtonLink>
        </p>
      </Section>

      {/* Final CTA */}
      <Section muted>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Start browsing verified listings
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Search for free, unlock contacts when you&apos;re ready, and talk to landlords
            directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              Find a home
            </ButtonLink>
            <ButtonLink
              href="/for-landlords"
              size="lg"
              className="!bg-transparent !text-white !border !border-white/40 hover:!bg-white/10"
            >
              I&apos;m a landlord
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m17 17-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 3l14 14M8.3 8.3a2.5 2.5 0 0 0 3.4 3.4M6.2 6c-1.7 1-3 2.5-3.7 4 1.5 3 4.6 5 7.5 5 1 0 2-.2 2.9-.6M13.8 5.6C12.7 5.2 11.4 5 10 5c-.4 0-.8 0-1.2.1M15.8 8c.7.8 1.3 1.7 1.8 2.5-1 2-2.9 3.6-5.1 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2 3 4.5v5c0 4 2.9 7.4 7 8.5 4.1-1.1 7-4.5 7-8.5v-5L10 2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m7 10 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 1.5 3 4.5v5c0 4.2 2.97 7.94 7 9 4.03-1.06 7-4.8 7-9v-5L10 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="m7 10 2.1 2.1L13.4 7.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 2.5v15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 3.5h9l-2.2 3 2.2 3H5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 3.5h2.7l1 3.6-1.6 1.3a10 10 0 0 0 4.5 4.5l1.3-1.6 3.6 1v2.7c0 .7-.6 1.2-1.3 1.1A13.5 13.5 0 0 1 2.9 4.8c0-.7.4-1.3 1.1-1.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 9.5 10 3l7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8.5V16h10V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
