import Link from "next/link";

import type { HeroData } from "@/types/shifa";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {data.badge ? (
          <span className="inline-flex rounded-full bg-[#e6f0fb] px-3 py-1 text-xs font-semibold tracking-wide text-[#0b5fa5]">
            {data.badge}
          </span>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-slate-900 sm:text-5xl">{data.headline}</h1>
        {data.subheadline ? <p className="mt-4 max-w-3xl text-lg text-slate-600">{data.subheadline}</p> : null}
        <div className="mt-8 flex flex-wrap gap-3">
          {data.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant === "primary" ? "default" : "secondary"} asChild>
              <Link href={cta.href} target={cta.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {cta.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
