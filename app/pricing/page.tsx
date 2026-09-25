import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { passPlans, faqItems } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sheltr Pass pricing — a time-boxed pass that unlocks a fixed number of landlord contacts. Starter ₹299, Standard ₹499, Premium ₹999. No brokerage, no hidden fees.",
};

const pricingFaqs = faqItems.filter((item) =>
  ["Sheltr Pass", "contact unlocks", "Pass remain active"].some((needle) =>
    item.question.includes(needle)
  )
);

export default function PricingPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
        <div className="mt-6 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Sheltr Pass
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Simple, capped pricing to unlock landlord contacts
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Browsing every verified listing on Sheltr is free, forever. A Sheltr Pass is what
            unlocks a landlord&apos;s phone number so you can call or message them directly — no
            broker fee, no commission on your rent or deposit.
          </p>
        </div>
      </Section>

      {/* What is a Pass */}
      <Section muted>
        <SectionHeading eyebrow="How it works" title="What a Sheltr Pass actually buys you" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-heading">A time-boxed window</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Every Pass is valid for a fixed number of days from the moment you buy it — 7, 15,
              or 30 depending on the plan. You can unlock contacts any time within that window.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-heading">A fixed unlock quota</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Each Pass comes with a set number of unlocks — or unlimited unlocks on Premium.
              Unlocking a new landlord&apos;s number uses one unlock from your quota.
              Re-viewing an unlocked contact is free.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-heading">What happens at expiry</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Once a Pass expires, you can&apos;t unlock further contacts until you buy a new one
              — but any number you already unlocked stays visible to you, for free, forever.
            </p>
          </div>
        </div>
      </Section>

      {/* Plans */}
      <Section id="plans">
        <SectionHeading eyebrow="Choose a plan" title="Three plans, all paid securely via Razorpay" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {passPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* FAQ strip */}
      {pricingFaqs.length > 0 ? (
        <Section muted>
          <SectionHeading eyebrow="Questions" title="Pass pricing, answered" />
          <div className="mt-10 max-w-3xl">
            <FAQAccordion items={pricingFaqs} />
          </div>
          <p className="mt-6">
            <ButtonLink href="/faq" variant="ghost" className="!p-0">
              See all FAQs →
            </ButtonLink>
          </p>
        </Section>
      ) : null}

      {/* Final CTA */}
      <Section>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to unlock your first contact?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Browse verified listings free, then choose a Pass when you&apos;re ready to talk to a
            landlord directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              Get a Sheltr Pass
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
