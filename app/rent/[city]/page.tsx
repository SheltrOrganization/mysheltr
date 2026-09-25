import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { TrustCard } from "@/components/TrustCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { cities } from "@/lib/content";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) {
    return { title: "City not found" };
  }
  return city.live
    ? {
        title: `No-brokerage rentals in ${city.name}`,
        description: `Browse KYC-verified rental listings in ${city.name} for free. Unlock a landlord's number with a Sheltr Pass and connect directly — no broker fee.`,
      }
    : {
        title: `Coming soon to ${city.name}`,
        description: `Sheltr's verified, no-brokerage rental marketplace is coming soon to ${city.name}. Browse live verified listings elsewhere on Sheltr today.`,
      };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Rent" }, { label: city.name }]}
        />

        {city.live ? (
          <div className="mt-6 max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
              Verified rentals in {city.name} — <span className="text-primary">no brokerage</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Browse KYC-verified rental listings in {city.name} for free. When you&apos;re ready,
              unlock a landlord&apos;s number with a Sheltr Pass and talk to them directly — no
              broker fee, no middleman.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={siteConfig.webAppUrl} size="lg">
                Browse {city.name} listings
              </ButtonLink>
            </div>
          </div>
        ) : (
          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              Coming soon to {city.name}
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
              Verified rentals in {city.name} — no brokerage
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Sheltr isn&apos;t live in {city.name} yet, so we don&apos;t have verified listings
              to show here today. We&apos;re building out city coverage — in the meantime, you can
              browse the verified listings already live on Sheltr across other cities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={siteConfig.webAppUrl} size="lg">
                Browse verified listings on Sheltr
              </ButtonLink>
            </div>
          </div>
        )}
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Why Sheltr"
          title="What Sheltr offers, wherever it's live"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<ShieldIcon />}
            title="KYC-verified landlords"
            description="Every landlord submits Aadhaar and an electricity bill, reviewed by our team, before a listing goes live."
          />
          <TrustCard
            icon={<EyeOffIcon />}
            title="Contact stays masked"
            description="Full listing details are visible from day one — the landlord's number stays protected until you unlock it."
          />
          <TrustCard
            icon={<RupeeIcon />}
            title="Pay for access, not commission"
            description="A capped Pass fee unlocks contacts. Sheltr never takes a cut of your rent or deposit."
          />
        </div>
      </Section>

      <Section>
        <div className="rounded-card bg-heading px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {city.live
              ? `Find your next home in ${city.name}`
              : "Explore verified listings on Sheltr today"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            {city.live
              ? "Browse verified listings free, or list your property in minutes."
              : `While ${city.name} coverage is on its way, browse the verified listings already live on Sheltr elsewhere.`}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.webAppUrl} size="lg">
              Explore Sheltr
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

function RupeeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 4h8M6 8h8M6 4c3.5 0 5.5 1.4 5.5 3.5S9.5 11 6 11l7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
