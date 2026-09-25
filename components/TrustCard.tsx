import { ReactNode } from "react";

export function TrustCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-card border border-border bg-surface p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-heading">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
    </div>
  );
}
