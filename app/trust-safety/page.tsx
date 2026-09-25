import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { TrustCard } from "@/components/TrustCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Sheltr verifies landlords, moderates listings, masks contact details, and handles your personal data — explained plainly, without overclaiming.",
};

export default function TrustSafetyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trust & Safety" }]} />
        <div className="mt-6 max-w-2xl">
          <VerifiedBadge label="Every landlord is KYC-verified by our team" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            How Sheltr keeps the marketplace trustworthy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Verification, human review, and contact masking are built into how Sheltr works — not
            add-ons. Here&apos;s exactly what we check, what we don&apos;t, and what you can do if
            something looks wrong.
          </p>
        </div>
      </Section>

      {/* KYC */}
      <Section muted>
        <SectionHeading
          eyebrow="Landlord verification"
          title="Every landlord is KYC-verified by our team"
          description="Before a property can be listed, the landlord submits identity and address documents tied to that property — this happens once per property, not once per platform sign-up."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<IdIcon />}
            title="Aadhaar name-match"
            description="Landlords submit their Aadhaar so the name on the ID can be matched against the name on the listing and the property's electricity bill."
          />
          <TrustCard
            icon={<BoltIcon />}
            title="Electricity bill for the property"
            description="A recent electricity bill for the specific property is required, so the listing is tied to a real, currently-occupied or owned address."
          />
        </div>
      </Section>

      {/* Human verification */}
      <Section>
        <SectionHeading
          eyebrow="Human review"
          title="A person reviews every submission — not an algorithm"
          description="Sheltr does not run automated document matching to approve landlords. A member of our Verifier team manually checks the Aadhaar and electricity bill before a listing is allowed to go live."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<UserCheckIcon />}
            title="Manual review, every time"
            description="A Verifier looks at each submission by hand and decides whether the name and address details hold together before approving it."
          />
          <TrustCard
            icon={<RefreshIcon />}
            title="Resubmission if something's unclear"
            description="If a submission is rejected — a blurry document, a name mismatch — the landlord can resubmit corrected documents and go through review again."
          />
        </div>
      </Section>

      {/* Listing moderation */}
      <Section muted>
        <SectionHeading
          eyebrow="Listing moderation"
          title="Listings are checked before — and after — they go live"
          description="Passing KYC gets a landlord to the point of listing; it doesn't mean every listing detail goes unchecked afterwards. Our team can review, correct, or take down a listing at any time."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<ShieldIcon />}
            title="Tied to a verified landlord"
            description="Every live listing is linked to a landlord who has passed KYC for that specific property — not a generic account-level check."
          />
          <TrustCard
            icon={<StatusIcon />}
            title="Status kept current"
            description="Landlords mark listings Available, Reserved, or Rented, so what you see reflects what's actually on the market."
          />
          <TrustCard
            icon={<TakedownIcon />}
            title="Listings can be pulled"
            description="If a listing doesn't hold up to review — ours or a tenant's report — our team can remove it from the marketplace."
          />
        </div>
      </Section>

      {/* Contact masking */}
      <Section>
        <SectionHeading
          eyebrow="Contact masking"
          title="A landlord's number stays hidden until you unlock it"
          description="Every other listing detail — rent, location, amenities, photos — is visible to everyone, for free. Only the phone number is protected."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<EyeOffIcon />}
            title="Masked by default"
            description="A landlord's phone number is never shown on a public listing page. It stays masked for every tenant until that tenant unlocks it."
          />
          <TrustCard
            icon={<KeyIcon />}
            title="Unlocked with an active Pass"
            description="A tenant needs an active Sheltr Pass with unlock quota remaining to reveal a number. Once unlocked for that tenant, it stays visible to them going forward."
          />
        </div>
      </Section>

      {/* Reporting / flagging */}
      <Section muted>
        <SectionHeading
          eyebrow="Reporting"
          title="See something off? Flag it"
          description="If a listing looks suspicious — mismatched photos, an unrealistic price, details that don't add up — you can flag it directly from the listing page."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <TrustCard
            icon={<FlagIcon />}
            title="Report from any listing"
            description="Flagging takes a moment and doesn't require you to have unlocked the contact — you can report a listing based on what's publicly visible."
          />
          <TrustCard
            icon={<UserCheckIcon />}
            title="Reviewed by our Verifier team"
            description="Every report is reviewed by a person on our team, who can re-check the landlord's KYC or take the listing down if it doesn't hold up."
          />
        </div>
      </Section>

      {/* Privacy */}
      <Section>
        <SectionHeading
          eyebrow="Your data"
          title="How we think about your personal data"
          description="This section explains our approach in plain language. It's informational, not a legal or compliance statement — for the full legal terms, see our Privacy Policy."
        />
        <div className="mt-10 max-w-3xl space-y-6 text-body">
          <p className="leading-relaxed">
            India&apos;s Digital Personal Data Protection Act (DPDP Act) sets out principles for
            how personal data should be collected, used, and protected. We look to those
            principles — like purpose limitation, your rights over your own data, and secure
            handling — as a guide for how we operate. Referencing them here doesn&apos;t mean
            Sheltr is certified compliant or that this page constitutes legal advice; it&apos;s
            an explanation of our approach, not a compliance guarantee.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-card border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-heading">Purpose limitation</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We collect KYC documents and contact details to verify landlords and connect
                tenants and landlords — not to sell your data or use it for unrelated purposes.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-heading">Your rights</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                You can ask what personal data we hold about you, request corrections, and ask
                questions about how it&apos;s used by writing to our support team.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-heading">Erasure and deletion</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                You can request deletion of your account and associated personal data, subject to
                any records we&apos;re required to retain — for example, for fraud prevention or
                legal reasons.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-heading">Security and retention</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We take reasonable steps to protect the data you share with us and keep it only
                for as long as it&apos;s needed for verification, support, or legal obligations.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted">
            Questions about your data? Write to us at{" "}
            <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-primary hover:underline">
              {siteConfig.contact.supportEmail}
            </a>
            .
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section muted>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Have questions about trust on Sheltr?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Read our full FAQ, or get in touch with our team directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/faq" size="lg">
              See FAQs
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

function IdIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.3 13c.4-1.2 1.4-1.8 1.7-1.8s1.3.6 1.7 1.8M11 8.5h4M11 11.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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
      <path d="M2.5 17c.6-3 2.9-5 5.5-5 .9 0 1.7.2 2.5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m12.5 12.5 2 2 3-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10a6 6 0 0 1 10.2-4.3M16 10a6 6 0 0 1-10.2 4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 3v3h-3M5.5 17v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function StatusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6.5v4l2.6 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TakedownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 6h12M8 6V4.5h4V6M6 6l.7 9.5a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.7 11.3 15 5l1.5 1.5L15 8l1.5 1.5L15 11l-1.7-1.7-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
