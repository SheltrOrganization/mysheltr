import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-pressed)]",
  secondary:
    "bg-surface text-heading border border-border hover:border-primary hover:text-primary",
  ghost: "text-heading hover:text-primary",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm min-h-[44px]",
  lg: "px-7 py-4 text-base min-h-[52px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const combinedClassName = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // No destination configured (e.g. the web app isn't live yet): render the
  // same visual button, but as an inert, non-navigating control instead of
  // a link — keeps it visible and clickable without pointing anywhere.
  if (!href) {
    return (
      <button type="button" className={combinedClassName}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClassName} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
