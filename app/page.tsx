import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustCard } from "@/components/TrustCard";
import { PricingCard } from "@/components/PricingCard";
import { SavingsComparison } from "@/components/SavingsComparison";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AppDownload } from "@/components/AppDownload";
import { PhoneMockup } from "@/components/PhoneMockup";
import { passPlans, faqItems } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const faqTeaser = faqItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <VerifiedBadge label="Every landlord is KYC-verified" />
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
              Verified homes. <span className="text-primary">No brokerage.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">
              Browse KYC-verified rental listings across India for free. When you&apos;re ready,
              unlock a landlord&apos;s number with a Sheltr Pass and talk to them directly — no
              broker fee, no middleman.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={siteConfig.webAppUrl} size="lg">
                Find a home
              </ButtonLink>
              <ButtonLink href={siteConfig.webAppUrl} variant="secondary" size="lg">
                List my property
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto">
            <PhoneMockup label="Verified listings near you" />
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section muted>
        <SectionHeading
          eyebrow="The problem"
          title="Renting in India still runs through brokers you didn't choose"
          description="Fake listings, unclear fees, and a broker fee due before you've even seen the place — the usual rental search wastes time and money before you've found a home."
        />
      </Section>

      {/* Why Sheltr */}
      <Section>
        <SectionHeading eyebrow="Why Sheltr" title="A rental marketplace built around verification, not commission" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<ShieldIcon />}
            title="KYC-verified landlords"
            description="Every landlord submits Aadhaar and an electricity bill, reviewed by our team, before a listing goes live."
          />
          <TrustCard
            icon={<EyeOffIcon />}
            title="Contact stays masked"
            description="Full listing details are visible from day one — the landlord's number stays protected until you unlock it."
          />
          <TrustCard
            icon={<RupeeIcon />}
            title="Pay for access, not commission"
            description="A capped Pass fee unlocks contacts. Sheltr never takes a cut of your rent or deposit."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section muted id="how-it-works">
        <SectionHeading eyebrow="How it works" title="From browsing to a phone call, in a few steps" />
        <div className="mt-10 space-y-10">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              For tenants
            </h3>
            <HowItWorks
              steps={[
                { title: "Browse free", description: "Search verified listings by city, budget, and type — no cost, no login wall." },
                { title: "Buy a Pass", description: "Choose a time-boxed Pass that fits your search, paid securely via Razorpay or Apple in-app purchase on iOS." },
                { title: "Unlock contact", description: "Reveal a landlord's number using your Pass's unlock quota." },
                { title: "Connect directly", description: "Call or message the landlord yourself — no broker in between." },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
              For landlords
            </h3>
            <HowItWorks
              accentClassName="bg-accent"
              steps={[
                { title: "Register free", description: "Create a landlord account — listing on Sheltr costs nothing." },
                { title: "Complete KYC", description: "Submit your Aadhaar and an electricity bill for the property." },
                { title: "Get verified", description: "A human verifier reviews your submission — approval publishes your listing." },
                { title: "Connect with tenants", description: "Verified tenants unlock your number and reach out directly." },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Pass teaser */}
      <Section id="pricing">
        <SectionHeading eyebrow="Sheltr Pass" title="Simple, capped pricing to unlock contacts" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {passPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          <ButtonLink href="/pricing" variant="ghost" className="!p-0">
            See full pricing details →
          </ButtonLink>
        </p>
      </Section>

      {/* Savings comparison */}
      <Section muted>
        <SectionHeading eyebrow="The savings" title="A Sheltr Pass costs a fraction of a broker fee" />
        <div className="mt-10">
          <SavingsComparison />
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Frequently asked" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={faqTeaser} />
        </div>
        <p className="mt-6">
          <ButtonLink href="/faq" variant="ghost" className="!p-0">
            See all FAQs →
          </ButtonLink>
        </p>
      </Section>

      {/* App download */}
      <Section muted>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-heading">Get the Sheltr app</h2>
            <p className="mt-2 max-w-md text-body">
              Search on the go, get notified about new verified listings, and manage your Pass —
              on Android today, iOS coming soon.
            </p>
          </div>
          <AppDownload />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Find your next home without a broker
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Browse verified listings free, or list your property in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              Find a home
            </ButtonLink>
            <ButtonLink
              href={siteConfig.webAppUrl}
              size="lg"
              className="!bg-transparent !text-white !border !border-white/40 hover:!bg-white/10"
            >
              List my property
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
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

function RupeeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 4h8M6 8h8M6 4c3.5 0 5.5 1.4 5.5 3.5S9.5 11 6 11l7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
