import Link from "next/link";

/**
 * Inline recreation of the Sheltr mark (coral house + padlock) so the
 * website doesn't depend on a binary asset export from the app. Replace
 * with the exported brand SVG if/when one is provided.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Sheltr home">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3 3 13.5V29h9v-9h8v9h9V13.5L16 3Z" fill="var(--color-primary)" />
        <rect x="12.5" y="17.5" width="7" height="6" rx="1.5" fill="var(--color-background)" />
        <path
          d="M14 17.5v-1.8a2 2 0 0 1 4 0v1.8"
          stroke="var(--color-background)"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
      <span className="font-display text-xl font-semibold text-heading">Sheltr</span>
    </Link>
  );
}
