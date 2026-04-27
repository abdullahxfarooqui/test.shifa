import { Activity, HeartPulse, Hospital, ShieldPlus, Siren, Waves } from "lucide-react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type FacilityItem = {
  title: string;
  description: string;
};

type FacilitiesGridProps = {
  specialtyName: string;
  facilities: FacilityItem[];
};

const icons = [Hospital, Activity, HeartPulse, Siren, Waves, ShieldPlus];

export function FacilitiesGrid({ specialtyName, facilities }: FacilitiesGridProps) {
  return (
    <section id="facilities" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Facilities</p>
          <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">{specialtyName} Facilities</h2>
        </ScrollReveal>

        <div className="no-scrollbar mt-6 grid auto-cols-[280px] grid-flow-col gap-4 overflow-x-auto pb-2 lg:grid-cols-3 lg:grid-flow-row lg:auto-cols-auto lg:overflow-visible">
          {facilities.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-[var(--shadow-card)] transition-[var(--transition)] hover:-translate-y-1 hover:border-l-[3px] hover:border-l-[var(--color-primary)] hover:shadow-[var(--shadow-hover)]">
                  <div className="inline-flex rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] p-2">
                    <Icon className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[20px] font-semibold text-[var(--color-text-1)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-2)]">{item.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
