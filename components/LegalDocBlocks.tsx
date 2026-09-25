import { LegalBlock } from "@/lib/legalContent";

/**
 * Renders parsed legal-copy blocks with the same document structure as the
 * app's `LegalDocScreen` (heading / paragraph / bullets / contact card).
 */
export function LegalDocBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "heading":
            return (
              <h3 key={index} className="pt-2 text-lg font-semibold text-primary">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="leading-relaxed text-body">
                {block.text}
              </p>
            );
          case "bullets":
            return (
              <ul key={index} className="space-y-2">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "contact":
            return (
              <div key={index} className="overflow-hidden rounded-card border border-border bg-surface-muted">
                {block.rows.map((row, rowIndex) => {
                  const isEmail = row.value.includes("@");
                  const href = isEmail
                    ? `mailto:${row.value}`
                    : `tel:${row.value.replace(/[^0-9+]/g, "")}`;
                  return (
                    <a
                      key={rowIndex}
                      href={href}
                      className="flex min-h-[44px] items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm last:border-b-0 hover:bg-surface"
                    >
                      <span className="text-muted">{row.label}</span>
                      <span className="font-semibold text-heading">{row.value}</span>
                    </a>
                  );
                })}
              </div>
            );
        }
      })}
    </div>
  );
}
