import { PassPlan } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "./Button";

export function PricingCard({ plan }: { plan: PassPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-card border p-8 ${
        plan.highlight
          ? "border-primary bg-surface shadow-soft"
          : "border-border bg-surface"
      }`}
    >
      {plan.highlight ? (
        <span className="absolute -top-3 left-8 rounded-pill bg-primary px-3 py-1 text-xs font-semibold text-white">
          Most picked
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-heading">{plan.name}</h3>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-heading">
          {siteConfig.payments.currencySymbol}
          {plan.priceInInr}
        </span>
      </p>
      <p className="mt-1 text-sm text-muted">
        one-time, via Razorpay or Apple in-app purchase (iOS)
      </p>

      <ul className="mt-6 space-y-3 text-sm text-body">
        <li className="flex items-start gap-2">
          <Dot /> Valid for {plan.validityDays} days
        </li>
        <li className="flex items-start gap-2">
          <Dot /> Contact unlocks: to be confirmed
        </li>
        <li className="flex items-start gap-2">
          <Dot /> Re-viewing an unlocked contact is free
        </li>
      </ul>

      <p className="mt-6 text-sm text-body">{plan.description}</p>

      <ButtonLink
        href={siteConfig.webAppUrl}
        variant={plan.highlight ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Get {plan.name}
      </ButtonLink>
    </div>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />;
}
