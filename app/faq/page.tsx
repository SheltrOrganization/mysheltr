import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { faqItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions from tenants and landlords about how Sheltr works, Sheltr Pass pricing, KYC verification, and contact unlocks.",
};

export default function FaqPage() {
  const tenantFaqs = faqItems.filter((item) => item.audience === "tenant");
  const landlordFaqs = faqItems.filter((item) => item.audience === "landlord");

  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <div className="mt-6 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Everything tenants and landlords usually ask about how Sheltr works, verification, and
            pricing — grouped below by who&apos;s asking.
          </p>
        </div>
      </Section>

      {/* Tenants */}
      <Section muted>
        <SectionHeading eyebrow="For Tenants" title="Questions from tenants" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={tenantFaqs} />
        </div>
      </Section>

      {/* Landlords */}
      <Section>
        <SectionHeading eyebrow="For Landlords" title="Questions from landlords" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={landlordFaqs} />
        </div>
      </Section>
    </>
  );
}
