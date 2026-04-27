import { HeartHandshake } from "lucide-react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ConsultCalloutProps = {
  paragraph: string;
  symptoms: string[];
};

export function ConsultCallout({ paragraph, symptoms }: ConsultCalloutProps) {
  return (
    <section id="consult" className="scroll-mt-28 bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_6%,white)] p-6 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
            <div>
              <div className="inline-flex rounded-full bg-white p-2 text-[var(--color-primary)]">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-3 text-[28px] font-semibold text-[var(--color-text-1)]">When to See a Specialist</h2>
              <p className="mt-3 text-[17px] leading-[1.7] text-[var(--color-text-2)]">{paragraph}</p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:mt-0">
              {symptoms.map((symptom) => (
                <p key={symptom} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-2)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                  {symptom}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
