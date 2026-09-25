import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LegalDocBlocks } from "@/components/LegalDocBlocks";
import { privacyTenant, privacyLandlord, parseLegalBlocks } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sheltr's Privacy Policy for tenants and landlords — the same policy shown in the Sheltr app.",
};

export default function PrivacyPolicyPage() {
  const tenantBlocks = parseLegalBlocks(privacyTenant);
  const landlordBlocks = parseLegalBlocks(privacyLandlord);

  return (
    <Section className="pt-10 sm:pt-14">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          This is the same Privacy Policy shown inside the Sheltr app, under &ldquo;Your data
          &amp; privacy&rdquo;. It has a tenant version and a landlord version — both are shown
          below.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            For Tenants
          </h2>
          <div className="mt-4">
            <LegalDocBlocks blocks={tenantBlocks} />
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            For Landlords
          </h2>
          <div className="mt-4">
            <LegalDocBlocks blocks={landlordBlocks} />
          </div>
        </div>
      </div>
    </Section>
  );
}
