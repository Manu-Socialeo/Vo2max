"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[20px] border border-border/50 bg-white transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium transition-colors hover:text-primary"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="border-t border-border/50 px-6 py-4 text-sm leading-relaxed text-foreground/70">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
