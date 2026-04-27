"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Milestone = {
  period: string;
  achievement: string;
};

type MilestonesTimelineProps = {
  specialtyName: string;
  milestones: Milestone[];
};

export function MilestonesTimeline({ specialtyName, milestones }: MilestonesTimelineProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="milestones" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Milestones</p>
          <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">{specialtyName} Timeline</h2>
        </ScrollReveal>

        <div className="no-scrollbar mt-8 overflow-x-auto pb-2">
          <div className="min-w-[820px] lg:min-w-full">
            <svg viewBox="0 0 1000 20" className="h-5 w-full" aria-hidden="true">
              <motion.line
                x1="0"
                y1="10"
                x2="1000"
                y2="10"
                stroke="var(--color-border)"
                strokeWidth="2"
                initial={{ pathLength: reducedMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <div className="mt-3 grid grid-cols-4 gap-5">
              {milestones.map((item, index) => (
                <motion.button
                  key={`${item.period}-${item.achievement}-${index}`}
                  type="button"
                  initial={{ opacity: 0, scale: reducedMotion ? 1 : 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.2, delay: index * 0.08, ease: "easeOut" }}
                  className="text-left"
                >
                  <span className="inline-block h-3 w-3 rounded-full border-2 border-white bg-[var(--color-primary)] shadow-[var(--shadow-card)]" />
                  <p className="mt-3 font-mono text-[13px] text-[var(--color-text-3)]">{item.period}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-text-1)]">{item.achievement}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
