import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LegalDraftNotice } from "@/components/LegalDraftNotice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Sheltr marketplace by tenants and landlords, including account, Pass, and conduct rules.",
};

export default function TermsOfServicePage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />

      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted">
          These terms govern your use of {siteConfig.name}. Please read them before creating an
          account or purchasing a Pass.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <LegalDraftNotice />
      </div>

      <div className="mt-10 max-w-2xl space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-heading">1. What Sheltr is</h2>
          <p className="mt-3 leading-relaxed text-body">
            {siteConfig.name} is a discovery and contact-unlock marketplace. We help tenants find
            KYC-verified rental listings and, for a Pass fee, unlock a landlord&apos;s contact
            details so the two parties can talk directly. Sheltr is <strong>not</strong> a broker,
            is <strong>not</strong> a party to any rental agreement between a tenant and a
            landlord, and is <strong>not</strong> responsible for the condition, legality,
            accuracy, or availability of any listed property, or for anything that happens after a
            tenant contacts a landlord. Any agreement to rent, view, or occupy a property is made
            directly between the tenant and the landlord.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">2. Account eligibility</h2>
          <p className="mt-3 leading-relaxed text-body">
            You must provide accurate information when creating an account and be legally able to
            enter into a rental arrangement (as a tenant) or to list a property (as a landlord).
            You are responsible for keeping your account credentials secure and for activity that
            happens under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">3. Tenant obligations</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-body">
            <li>Provide accurate account information.</li>
            <li>
              Use landlord contact details you unlock only for genuine rental inquiries — not for
              spam, harassment, solicitation unrelated to the listing, or resale of contact
              information.
            </li>
            <li>Not attempt to circumvent the contact-unlock mechanism or Pass system.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">4. Landlord obligations</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-body">
            <li>Provide accurate listing information, including price, location, and availability.</li>
            <li>
              Complete KYC verification (Aadhaar name-match and an electricity bill for the
              property) before a listing is published.
            </li>
            <li>
              Keep listing status current — mark a property as unavailable or remove it once it is
              no longer for rent.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">5. Sheltr Pass purchases</h2>
          <p className="mt-3 leading-relaxed text-body">
            A Sheltr Pass is a time-boxed, quota-limited digital product that unlocks a fixed
            number of landlord contacts within a fixed validity window, as described on our{" "}
            <a href="/pricing" className="text-primary hover:underline">
              pricing page
            </a>
            . Passes are paid for securely via Razorpay. Pass purchases are non-refundable except
            as described in our{" "}
            <a href="/legal/refund-cancellation" className="text-primary hover:underline">
              Refund &amp; Cancellation Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">6. Prohibited conduct</h2>
          <p className="mt-3 leading-relaxed text-body">
            You may not: submit false, misleading, or fraudulent information (including fake
            listings or fake identity documents); misuse unlocked contact details; attempt to
            interfere with, reverse-engineer, or disrupt the platform; or use the platform for any
            unlawful purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">7. Suspension and termination</h2>
          <p className="mt-3 leading-relaxed text-body">
            We may suspend or terminate an account that violates these terms, submits fraudulent
            KYC information, or misuses the platform. Where reasonably possible, we will notify you
            of the reason. You may close your account at any time; see our{" "}
            <a href="/legal/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            for what account deletion removes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">8. Limitation of liability</h2>
          <p className="mt-3 leading-relaxed text-body">
            To the maximum extent permitted by law, Sheltr is not liable for indirect, incidental,
            or consequential damages arising from your use of the platform, from any rental
            arrangement entered into with a landlord found through Sheltr, or from the accuracy of
            listing information provided by landlords. This section is general and non-specific and
            is subject to legal review.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">9. Governing law</h2>
          <p className="mt-3 leading-relaxed text-body">
            [Governing law / jurisdiction — PLACEHOLDER, requires legal review]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">10. Contact us</h2>
          <p className="mt-3 leading-relaxed text-body">
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${siteConfig.contact.supportEmail}`}
              className="text-primary hover:underline"
            >
              {siteConfig.contact.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
