import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { TrustCard } from "@/components/TrustCard";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sheltr's mission is to make renting in India broker-free, verified, and fair — a marketplace that connects tenants and landlords directly, without a middleman.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <div className="mt-6 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Our mission
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Make renting in India <span className="text-primary">broker-free, verified, and fair</span>
          </h1>
        </div>
      </Section>

      {/* The problem */}
      <Section muted>
        <SectionHeading
          eyebrow="The problem"
          title="Renting shouldn't cost you a month's rent just to find a place"
          description="Anyone who has searched for a rental in an Indian city knows the pattern: listings that turn out to be fake or already taken, brokers who want a fee before you've even seen the property, and hours spent chasing numbers that don't answer."
        />
        <div className="mt-10 max-w-3xl space-y-4 text-body">
          <p className="leading-relaxed">
            The rental search itself is the hard part — not the moving in. Fake or outdated
            listings waste your time. Broker fees, often a full month&apos;s rent, are charged
            upfront regardless of whether the broker did much beyond sharing a phone number. And
            because so much of the process runs through word-of-mouth and unverified listings,
            tenants and landlords rarely get to deal with each other directly.
          </p>
        </div>
      </Section>

      {/* Why verification matters */}
      <Section>
        <SectionHeading
          eyebrow="Why verification matters"
          title="A listing is only useful if you can trust who posted it"
          description="Cutting out the broker fee doesn't help if it just replaces one unreliable middleman with an unverified one. Verification is what makes a broker-free marketplace usable."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<ShieldIcon />}
            title="Landlords, checked before they list"
            description="Every landlord is KYC-verified by our team before their property appears in search — identity and address documents, reviewed by a person, not an algorithm."
          />
          <TrustCard
            icon={<EyeOffIcon />}
            title="Contact details, protected"
            description="A landlord's phone number stays masked until a tenant is genuinely interested enough to unlock it — reducing spam contact and giving landlords some control over who reaches out."
          />
        </div>
      </Section>

      {/* What Sheltr is */}
      <Section muted>
        <SectionHeading
          eyebrow="What Sheltr actually is"
          title="A pay-to-unlock-contact marketplace — not a booking or broker platform"
          description="It's worth being precise about what Sheltr does and doesn't do, because it's a different model from both a traditional broker and a booking platform."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<SearchIcon />}
            title="We list and verify"
            description="Sheltr hosts verified rental listings and checks the landlord behind each one before it goes live."
          />
          <TrustCard
            icon={<KeyIcon />}
            title="We unlock contact — that's it"
            description="A Sheltr Pass unlocks a landlord's phone number. Once you have it, you and the landlord take the conversation from there, off-platform."
          />
          <TrustCard
            icon={<NoIcon />}
            title="We never collect rent or manage leases"
            description="Sheltr isn't a booking platform and doesn't process rent payments, deposits, or lease agreements. Those stay a direct matter between tenant and landlord."
          />
        </div>
      </Section>

      {/* Who it serves */}
      <Section>
        <SectionHeading
          eyebrow="Who it's for"
          title="Tenants and landlords, connected directly"
          description="Sheltr exists for two groups, and it's built to treat both fairly."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<TenantIcon />}
            title="Tenants"
            description="Browse verified listings for free, unlock a landlord's number when you're ready, and deal with them directly — no broker fee standing between you and a home."
          />
          <TrustCard
            icon={<LandlordIcon />}
            title="Landlords"
            description="List a property for free, complete KYC once per property, and hear directly from tenants who've chosen to reach out — no commission taken on your rent."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section muted>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            See how it works, or get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Read more about how we verify landlords and protect contact details, or reach out with
            questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/trust-safety" size="lg">
              Trust & Safety
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="!bg-transparent !text-white !border !border-white/40 hover:!bg-white/10"
            >
              Contact us
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

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m17 17-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.7 11.3 15 5l1.5 1.5L15 8l1.5 1.5L15 11l-1.7-1.7-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="m5.5 5.5 9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TenantIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 17c.9-3.6 3.6-5.5 6.5-5.5s5.6 1.9 6.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LandlordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 9.5 10 3l7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8.5V16h10V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
