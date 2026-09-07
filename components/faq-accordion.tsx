"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faqs";

export default function FaqAccordion({
  faqs,
  className = "",
}: {
  faqs: Faq[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-brand/25 bg-tint/50" : "border-forest/10 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
            >
              <span className="font-semibold text-ink">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-muted">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
