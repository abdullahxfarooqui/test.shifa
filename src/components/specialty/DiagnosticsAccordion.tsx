"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type DiagnosticItem = {
  title: string;
  detail: string;
};

type DiagnosticsAccordionProps = {
  diagnostics: DiagnosticItem[];
};

export function DiagnosticsAccordion({ diagnostics }: DiagnosticsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="diagnostics" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Diagnostics</p>
          <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">Diagnostic Services</h2>
        </ScrollReveal>

        <div className="mt-6 divide-y divide-[var(--color-border)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)]">
          {diagnostics.map((item, index) => {
            const open = openIndex === index;
            return (
              <ScrollReveal key={item.title} delay={index * 0.04}>
                <div className="grid gap-2 p-4 md:grid-cols-[1fr_1.4fr] md:items-start">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`diagnostic-panel-${index}`}
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    className="flex w-full items-center justify-between text-left text-[17px] font-semibold text-[var(--color-text-1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
                  >
                    <span>{item.title}</span>
                    <Plus className={cn("h-5 w-5 text-[var(--color-primary)] transition-[var(--transition)]", open && "rotate-45")} />
                  </button>
                  <div
                    id={`diagnostic-panel-${index}`}
                    className={cn("overflow-hidden text-sm leading-relaxed text-[var(--color-text-2)] transition-[var(--transition)]", open ? "max-h-24 opacity-100" : "max-h-0 opacity-0")}
                  >
                    <p className="pt-1 md:pt-0">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
