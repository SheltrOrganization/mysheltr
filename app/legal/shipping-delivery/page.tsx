import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LegalDraftNotice } from "@/components/LegalDraftNotice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shipping / Delivery Policy",
  description: "Sheltr sells digital Passes only — there is no physical shipping.",
};

export default function ShippingDeliveryPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shipping / Delivery" }]} />

      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Shipping / Delivery Policy
        </h1>
      </div>

      <div className="mt-8 max-w-2xl">
        <LegalDraftNotice />
      </div>

      <div className="mt-10 max-w-2xl space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-heading">No physical goods</h2>
          <p className="mt-3 leading-relaxed text-body">
            {siteConfig.name} Passes are digital services — there is no physical product and
            nothing is shipped. A Pass is delivered and activated digitally, immediately after
            successful payment via Razorpay, and appears in your account ready to use right away.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-heading">Questions</h2>
          <p className="mt-3 leading-relaxed text-body">
            If a Pass doesn&apos;t appear in your account after a successful payment, contact{" "}
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
