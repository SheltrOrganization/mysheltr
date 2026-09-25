export function LegalDraftNotice({
  lastUpdated,
}: {
  /** Human-readable date string, e.g. "25 September 2026". Optional. */
  lastUpdated?: string;
}) {
  return (
    <div
      role="note"
      aria-label="Draft notice"
      className="flex flex-col gap-2 rounded-card border border-border bg-primary-tint px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm font-semibold text-primary">
        DRAFT — requires legal review
      </p>
      <p className="text-sm text-heading">
        This page is a working draft prepared for launch planning. It has not been reviewed by a
        qualified lawyer and should not be treated as final or legally binding until it is.
        {lastUpdated ? ` Last updated: ${lastUpdated}.` : null}
      </p>
    </div>
  );
}
