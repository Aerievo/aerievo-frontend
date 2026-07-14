"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQAccordionSectionProps {
  data: PageSection["content"];
}

export default function FAQAccordionSection({ data }: FAQAccordionSectionProps) {
  const items = (data.items as FAQItem[]) || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        {(data.title || data.subtitle) && (
          <div className="text-center mb-12">
            {data.subtitle && (
              <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                {data.subtitle}
              </p>
            )}
            {data.title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight">
                {data.title}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-heading">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-secondary leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
