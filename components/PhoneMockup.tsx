import { ReactNode } from "react";

/**
 * Replaceable phone-frame slot for tenant/landlord app screenshots.
 * Ships with an abstract placeholder illustration — swap `children`
 * for a real screenshot when one is available.
 */
export function PhoneMockup({
  children,
  label,
}: {
  children?: ReactNode;
  label?: string;
}) {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-heading bg-heading p-1 shadow-soft sm:w-[300px]">
      <div className="absolute left-1/2 top-1 h-5 w-24 -translate-x-1/2 rounded-full bg-heading" />
      <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-surface-muted">
        {children ?? <PlaceholderScreen label={label} />}
      </div>
    </div>
  );
}

function PlaceholderScreen({ label }: { label?: string }) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-primary-tint to-surface p-4">
      <div className="space-y-2">
        <div className="h-3 w-2/3 rounded-full bg-surface" />
        <div className="h-24 w-full rounded-2xl bg-surface" />
        <div className="h-24 w-full rounded-2xl bg-surface" />
      </div>
      {label ? (
        <p className="rounded-full bg-surface px-3 py-2 text-center text-xs font-medium text-muted">
          {label}
        </p>
      ) : null}
    </div>
  );
}
