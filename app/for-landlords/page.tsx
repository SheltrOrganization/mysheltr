import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustCard } from "@/components/TrustCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { faqItems } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "For Landlords",
  description:
    "List your property on Sheltr for free. Complete a one-time KYC check and let verified tenants unlock your number and contact you directly.",
};

export default function ForLandlordsPage() {
  const landlordFaqs = faqItems.filter((item) => item.audience === "landlord");

  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Landlords" }]} />
        <div className="mt-6 max-w-2xl">
          <VerifiedBadge label="Free to list, always" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            List your property. <span className="text-primary">Pay nothing to do it.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Register, complete a one-time KYC check for your property, and get verified by a
            real member of our team. Once you&apos;re live, tenants who&apos;ve unlocked your
            number reach out to you directly — no fee, ever, for listing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              List my property
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Free listing */}
      <Section muted>
        <SectionHeading
          eyebrow="Step 1"
          title="Register and add your property, free"
          description="Create a landlord account and add your property's details and photos. Sheltr never charges landlords to list or to stay listed — revenue comes only from tenants buying Passes to unlock contacts."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<RupeeOffIcon />}
            title="No listing fee, no commission"
            description="There's no charge to create a listing, and no cut taken from your rent or deposit once you find a tenant."
          />
          <TrustCard
            icon={<CameraIcon />}
            title="Add the details tenants look for"
            description="Rent, deposit, amenities, floor, and photos — the same information tenants see in full before they ever contact you."
          />
        </div>
      </Section>

      {/* KYC requirements */}
      <Section>
        <SectionHeading
          eyebrow="Step 2"
          title="Complete KYC for the property"
          description="Submit your Aadhaar details and a recent electricity bill for the address you're listing. This is a one-time step per property."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<IdIcon />}
            title="Aadhaar name match"
            description="Your Aadhaar details confirm who you are — the name on file is checked against your submission."
          />
          <TrustCard
            icon={<BoltIcon />}
            title="Electricity bill for the property"
            description="A recent electricity bill for the listed address helps confirm your connection to that specific property."
          />
        </div>
      </Section>

      {/* Human verification */}
      <Section muted>
        <SectionHeading
          eyebrow="Step 3"
          title="A human Verifier reviews your submission"
          description="There's no automated document matching deciding who gets listed. A member of our Verifier team manually checks your Aadhaar and electricity bill before your property goes live."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<UserCheckIcon />}
            title="Manually reviewed"
            description="A real person on our Verifier team looks at what you've submitted — not an automated system."
          />
          <TrustCard
            icon={<ShieldIcon />}
            title="Approval goes live immediately"
            description="Once your submission is approved, your listing is live — there's no separate publish step to remember."
          />
          <TrustCard
            icon={<RefreshIcon />}
            title="Resubmit if something's unclear"
            description="If a submission is rejected, you can correct it and resubmit right away."
          />
        </div>
      </Section>

      {/* Verified badge / moderation */}
      <Section>
        <SectionHeading
          eyebrow="Trust"
          title="Verified listings, kept honest"
          description="Once live, your listing carries a KYC Verified badge. Tenants can also flag a listing that looks off, and our Verifier team reviews every report."
        />
      </Section>

      {/* Tenant contact */}
      <Section muted>
        <SectionHeading
          eyebrow="Step 4"
          title="Tenants unlock your number and contact you directly"
          description="When a tenant is ready, they use their Sheltr Pass to unlock your phone number. They then call or message you directly, off-platform — you don't do anything extra in the app to receive it."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<PhoneIcon />}
            title="A real call or message, not in-app chat"
            description="There's no in-app messaging between tenant and landlord. You'll simply get a call or a WhatsApp message from a tenant who has already unlocked your number."
          />
          <TrustCard
            icon={<HomeIcon />}
            title="Viewings happen off-platform"
            description="Sheltr doesn't schedule property visits in the app. If a tenant wants to see the place, you arrange the time directly with them."
          />
        </div>
      </Section>

      {/* Manage listing */}
      <Section>
        <SectionHeading
          eyebrow="Managing your listing"
          title="Keep your status up to date"
          description="Update your listing yourself as things change, so tenants always see accurate availability."
        />
        <div className="mt-10">
          <HowItWorks
            steps={[
              {
                title: "Available",
                description: "Your default status — the listing appears in tenant search results.",
              },
              {
                title: "Reserved",
                description: "Mark a property reserved once you've agreed terms with a tenant, so others know it's spoken for.",
              },
              {
                title: "Rented",
                description: "Once the property is let out, mark it rented to take it out of active search.",
              },
            ]}
          />
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section muted>
        <SectionHeading eyebrow="Questions" title="Frequently asked by landlords" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={landlordFaqs} />
        </div>
        <p className="mt-6">
          <ButtonLink href="/faq" variant="ghost" className="!p-0">
            See all FAQs →
          </ButtonLink>
        </p>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            List your property, free
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Complete KYC once, get verified by a real person, and let tenants reach you directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              List my property
            </ButtonLink>
            <ButtonLink
              href="/for-tenants"
              size="lg"
              className="!bg-transparent !text-white !border !border-white/40 hover:!bg-white/10"
            >
              I&apos;m a tenant
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function RupeeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 4h8M6 8h8M6 4c3.5 0 5.5 1.4 5.5 3.5S9.5 11 6 11l7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3l14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 6.5h3l1.2-2h5.6l1.2 2h3v9.5H3V6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 13.3c.5-1.1 1.3-1.6 2-1.6s1.5.5 2 1.6M11.5 8.5h4M11.5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11 2 4 11.5h5L9 18l7-9.5h-5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 17c.7-3 2.9-4.5 5.5-4.5 1 0 1.9.2 2.7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m13 12.5 1.8 1.8L18.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16 6a6.5 6.5 0 1 0 1.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M16 2.5V6h-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
