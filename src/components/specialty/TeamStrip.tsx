"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, UserRound } from "lucide-react";
import { useRef } from "react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type TeamMember = {
  name: string;
  designation: string;
  profile: string;
  experience: string;
  hospitalAffiliation: string;
};

type TeamStripProps = {
  specialtyName: string;
  team: TeamMember[];
};

export function TeamStrip({ specialtyName, team }: TeamStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const slide = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="team" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--color-text-3)]">Clinical Team</p>
              <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">{specialtyName} Consultants</h2>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => slide(-220)}
                aria-label="Scroll team left"
                className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-primary)] transition-[var(--transition)] hover:bg-[var(--color-surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => slide(220)}
                aria-label="Scroll team right"
                className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-primary)] transition-[var(--transition)] hover:bg-[var(--color-surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div ref={scrollerRef} className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.04} className="shrink-0">
              <article className="w-[200px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 shadow-[var(--shadow-card)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] text-white">
                  <UserRound className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[var(--color-text-1)]">{member.name}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-3)]">{member.designation}</p>
                <p className="mt-1 text-xs text-[var(--color-text-3)]">Experience: {member.experience}</p>
                <p className="mt-1 text-xs text-[var(--color-text-3)]">{member.hospitalAffiliation}</p>
                <Link
                  href={member.profile}
                  className="mt-3 inline-flex text-xs font-semibold text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
                >
                  View Profile →
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
