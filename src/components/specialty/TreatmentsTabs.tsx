"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type TreatmentItem = {
  title: string;
  description: string;
};

type TreatmentsTabsProps = {
  specialtyName: string;
  treatments: TreatmentItem[];
};

export function TreatmentsTabs({ specialtyName, treatments }: TreatmentsTabsProps) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const selected = treatments[active];

  return (
    <section id="treatments" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Treatments</p>
          <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">Treatment & Management</h2>
        </ScrollReveal>

        <div role="tablist" aria-label={`${specialtyName} treatment tabs`} className="no-scrollbar mt-6 flex gap-2 overflow-x-auto">
          {treatments.map((item, index) => (
            <button
              key={item.title}
              role="tab"
              id={`treatment-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`treatment-panel-${index}`}
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.04em] transition-[var(--transition)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]",
                active === index
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-surface-2)] text-[var(--color-text-2)] hover:bg-[var(--color-border)]",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-6 min-h-[160px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.title}
              role="tabpanel"
              id={`treatment-panel-${active}`}
              aria-labelledby={`treatment-tab-${active}`}
              initial={{ opacity: 0, x: reducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion ? 0 : -20 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <h3 className="text-[20px] font-semibold text-[var(--color-text-1)]">{selected.title}</h3>
                <p className="mt-2 text-[17px] leading-[1.7] text-[var(--color-text-2)]">{selected.description}</p>
              </div>
              <div className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white">
                <Heart className="h-8 w-8 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
