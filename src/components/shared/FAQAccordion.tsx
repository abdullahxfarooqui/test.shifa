"use client";

import { useState } from "react";

import type { FaqItem } from "@/types/shifa";

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.question ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItem === item.question;
        return (
          <article key={item.question} className="rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.question)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900"
            >
              {item.question}
              <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="px-4 pb-4 text-sm text-slate-600">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
