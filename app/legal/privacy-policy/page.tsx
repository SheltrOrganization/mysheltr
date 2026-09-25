import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LegalDraftNotice } from "@/components/LegalDraftNotice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sheltr collects, uses, and protects personal data for tenants and landlords using the platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          This policy explains how {siteConfig.name} handles personal data. It is provided for
          transparency and is not a substitute for a lawyer-reviewed policy.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <LegalDraftNotice />
      </div>

      <div className="mt-10 max-w-2xl space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-heading">1. About this policy</h2>
          <p className="mt-3 leading-relaxed text-body">
            {siteConfig.name} (&ldquo;Sheltr&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates a
            marketplace that helps tenants discover verified rental listings and connect with
            landlords in India. This page describes, in plain language, what personal data we
            collect, why we collect it, and what rights you have over it. It is written with
            India&apos;s Digital Personal Data Protection Act (DPDP Act) in mind, but it is an
            informational draft prepared ahead of formal legal review — publishing this page does
            not, by itself, make Sheltr DPDP-compliant. A qualified lawyer should review and
            finalise this policy before it is relied on as a binding legal document.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">2. What personal data we collect</h2>
          <p className="mt-3 leading-relaxed text-body">
            We collect only what is needed to run the marketplace and to verify landlords before
            their listings go live:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
            <li>
              <span className="font-semibold text-heading">Account details</span> — name, email
              address, and phone number, for both tenants and landlords.
            </li>
            <li>
              <span className="font-semibold text-heading">Landlord KYC data</span> — for
              verification purposes only, we ask landlords to confirm their name against their
              Aadhaar and to submit a recent electricity bill for the listed property. We use this
              to match the landlord&apos;s identity and confirm their connection to the property.
              We do not collect or store a landlord&apos;s full Aadhaar number, and we do not
              retain raw identity documents beyond what is required to complete verification.
            </li>
            <li>
              <span className="font-semibold text-heading">Payment metadata</span> — when a Pass is
              purchased, payment is processed by our payment partner, Razorpay. We receive
              transaction metadata (such as payment status, amount, and a transaction reference)
              needed to activate your Pass — we do not receive or store your full card, UPI, or
              bank account details, which are handled directly by Razorpay.
            </li>
            <li>
              <span className="font-semibold text-heading">Usage data</span> — basic activity such
              as saved properties, unlocked contacts, and search preferences, so the product works
              as expected.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">3. Why we process this data</h2>
          <p className="mt-3 leading-relaxed text-body">
            We process personal data to: create and manage your account; verify landlord identity
            and property ownership before a listing is published; process Pass purchases and
            unlock landlord contact details on your behalf; provide customer support; and maintain
            the security and integrity of the platform. We do not sell personal data to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">4. Your rights</h2>
          <p className="mt-3 leading-relaxed text-body">
            You have the right to access the personal data we hold about you, to ask us to correct
            it if it is inaccurate, and to request that we erase it. Sheltr&apos;s backend supports
            a full account-deletion flow: requesting deletion removes your KYC files, saved
            properties, and contact-unlock records from our systems, subject to any data we are
            legally required to retain for a limited period (for example, for accounting or fraud
            prevention). To exercise any of these rights, contact us at{" "}
            <a
              href={`mailto:${siteConfig.contact.supportEmail}`}
              className="text-primary hover:underline"
            >
              {siteConfig.contact.supportEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">5. Data retention</h2>
          <p className="mt-3 leading-relaxed text-body">
            We retain personal data only for as long as it is needed for the purposes described
            above — for example, for as long as your account remains active, or as long as we are
            required to by law. Landlord KYC material is retained only as long as needed to keep a
            verification current; once you delete your account, associated KYC files are purged as
            part of that deletion flow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">6. Security</h2>
          <p className="mt-3 leading-relaxed text-body">
            We use reasonable technical and organisational measures to protect personal data
            against unauthorised access, loss, or misuse. No online system can be guaranteed
            completely secure, and we continue to improve our safeguards as the platform grows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">7. Contact us</h2>
          <p className="mt-3 leading-relaxed text-body">
            If you have questions about this policy or how your data is handled, write to us at{" "}
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
