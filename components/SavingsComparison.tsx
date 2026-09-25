import { passPlans } from "@/lib/content";
import { siteConfig } from "@/config/site";

export function SavingsComparison() {
  const cheapest = passPlans[0];
  const priciest = passPlans[passPlans.length - 1];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-card border border-border bg-surface p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          Traditional brokerage
        </p>
        <p className="mt-4 text-3xl font-bold text-heading">1–2 months&apos; rent</p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Typical broker fee charged for finding and closing a rental, on top of the deposit —
          paid whether or not the broker actually helped much.
        </p>
      </div>

      <div className="rounded-card border-2 border-primary bg-primary-tint/40 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Sheltr Pass</p>
        <p className="mt-4 text-3xl font-bold text-heading">
          {siteConfig.payments.currencySymbol}
          {cheapest.priceInInr}–{siteConfig.payments.currencySymbol}
          {priciest.priceInInr}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          A capped, one-time pass fee to unlock landlord contacts directly — no percentage of
          rent, no hidden add-ons. You keep talking to landlords yourself, at no extra cost.
        </p>
      </div>
    </div>
  );
}
