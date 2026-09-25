import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LegalDraftNotice } from "@/components/LegalDraftNotice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "When a Sheltr Pass purchase may be eligible for a refund, and how to request one.",
};

export default function RefundCancellationPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Refund & Cancellation" }]} />

      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          This page explains how refunds work for Sheltr Pass purchases.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <LegalDraftNotice />
      </div>

      <div className="mt-10 max-w-2xl space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-heading">1. Passes are digital products</h2>
          <p className="mt-3 leading-relaxed text-body">
            A Sheltr Pass is a digital, time-boxed, quota-limited product: it activates
            immediately on successful payment and grants a contact-unlock quota (exact number per
            plan to be confirmed) for a fixed number of days. Because a Pass is delivered and can
            be used instantly, it is different from a physical good, and our refund stance
            reflects that.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">2. When a refund may be considered</h2>
          <p className="mt-3 leading-relaxed text-body">
            As a general position, Pass purchases are non-refundable once payment succeeds and the
            Pass is activated, except where a clear technical failure on our side prevented you
            from using any part of your Pass&apos;s unlock quota — for example, a failed unlock
            that was charged against your quota due to a platform error. We do not currently
            publish a specific refund window or percentage; eligibility is assessed case by case,
            and this section is intentionally general pending formal legal review.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">3. How to request a refund</h2>
          <p className="mt-3 leading-relaxed text-body">
            To request a refund, email{" "}
            <a
              href={`mailto:${siteConfig.contact.supportEmail}`}
              className="text-primary hover:underline"
            >
              {siteConfig.contact.supportEmail}
            </a>{" "}
            with your account email, the Pass purchased, and a description of the issue. Include
            any relevant details (such as when an unlock failed) so we can investigate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">4. How refunds are processed</h2>
          <p className="mt-3 leading-relaxed text-body">
            For payments made on Android or web (via Razorpay), approved refunds are processed
            back to your original payment method — on our side, a System Manager reviews and
            manually processes these, a real, working capability in our backend, not a
            placeholder. For payments made on iOS through Apple&apos;s in-app purchase system,
            refunds are issued by Apple directly under their own refund policy — we&apos;ll support
            your request, but the refund itself is processed by Apple, not Sheltr. Processing
            times after approval depend on your bank, payment provider, or Apple.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">5. Cancellations</h2>
          <p className="mt-3 leading-relaxed text-body">
            Because a Pass activates immediately on purchase, there is no separate
            &ldquo;cancel before it starts&rdquo; step — a cancellation request is handled the same
            way as a refund request, above.
          </p>
        </section>
      </div>
    </Section>
  );
}
