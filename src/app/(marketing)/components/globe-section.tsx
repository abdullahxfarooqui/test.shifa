"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/3d/Globe").then((mod) => mod.Globe), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-3xl border border-[#1A2D4D] bg-[#050A14] sm:h-[520px] lg:h-[640px]" />
  ),
});

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,159,227,0.12),transparent_46%),radial-gradient(circle_at_75%_80%,rgba(227,6,19,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <Globe className="h-[460px] rounded-[28px] border-white/15 sm:h-[560px] lg:h-[680px]" />
      </div>
    </section>
  );
}
