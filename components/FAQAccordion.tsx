"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-card border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full min-h-[44px] items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-heading"
                onClick={() => {
                  const next = isOpen ? null : index;
                  setOpenIndex(next);
                  if (next !== null) {
                    trackEvent({ name: "faq_expand", props: { question: item.question } });
                  }
                }}
              >
                {item.question}
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-body"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
