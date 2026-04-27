import { HeartPulse, ShieldAlert, Stethoscope, Activity } from "lucide-react";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type StatItem = {
  icon: "heart" | "shield" | "stethoscope" | "activity";
  value: number;
  suffix?: string;
  label: string;
};

type OverviewSectionProps = {
  specialtyName: string;
  paragraphs: string[];
  stats: StatItem[];
};

const iconMap = {
  heart: HeartPulse,
  shield: ShieldAlert,
  stethoscope: Stethoscope,
  activity: Activity,
};

export function OverviewSection({ specialtyName, paragraphs, stats }: OverviewSectionProps) {
  return (
    <section id="overview" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Overview</p>
            <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">About {specialtyName}</h2>
            <div className="mt-5 space-y-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.7] text-[var(--color-text-2)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <ScrollReveal key={stat.label} delay={index * 0.04}>
                <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 shadow-[var(--shadow-card)] transition-[var(--transition)] hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-hover)]">
                  <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                  <p className="mt-3 text-3xl font-bold text-[var(--color-text-1)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ""} />
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--color-text-3)]">{stat.label}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
