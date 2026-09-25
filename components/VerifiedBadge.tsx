export function VerifiedBadge({ label = "KYC Verified", className = "" }: { label?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill bg-verified-tint px-3 py-1 text-xs font-semibold text-verified ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 1.5 3 4.5v5c0 4.2 2.97 7.94 7 9 4.03-1.06 7-4.8 7-9v-5L10 1.5Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M10 1.5 3 4.5v5c0 4.2 2.97 7.94 7 9 4.03-1.06 7-4.8 7-9v-5L10 1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="m7 10 2.1 2.1L13.4 7.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </span>
  );
}
