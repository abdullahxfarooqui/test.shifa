import Link from "next/link";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type BookingCTAProps = {
  specialtyName: string;
  phone: string;
};

export function BookingCTA({ specialtyName, phone }: BookingCTAProps) {
  return (
    <section id="book" className="scroll-mt-28 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-text-1)] p-6 text-white lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <div>
              <h2 className="text-[28px] font-semibold">Schedule Your Consultation</h2>
              <p className="mt-2 text-sm text-zinc-300">
                {specialtyName} consultation line: {phone}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.04em] text-zinc-400">
                JCI Gold · 300+ Consultants · 24/7 Emergency
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <Link
                href="https://wa.me/92518464646"
                className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-[var(--transition)] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#25D366]"
              >
                WhatsApp +92-51-8464646
              </Link>
              <Link
                href="tel:+92518464646"
                className="rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-white transition-[var(--transition)] hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Call 051-8464646
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
