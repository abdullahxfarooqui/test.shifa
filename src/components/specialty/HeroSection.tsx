"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  name: string;
  tagline: string;
  stats: HeroStat[];
};

export function HeroSection({ name, tagline, stats }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid min-h-[420px] max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:min-h-[520px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.04em] text-[var(--color-text-3)]">
            Home / Specialities / {name}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
            className="text-4xl font-bold uppercase tracking-[0.04em] text-[var(--color-text-1)] sm:text-5xl lg:text-[56px]"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            className="text-lg italic leading-relaxed text-[var(--color-text-2)] sm:text-[22px]"
          >
            {tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="tel:+92518464646"
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-[var(--transition)] hover:bg-[var(--color-primary-dim)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
            >
              Book Appointment
            </Link>
            <Link
              href="/doctors"
              className="rounded-full border border-[var(--color-border)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-text-1)] transition-[var(--transition)] hover:bg-[var(--color-surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]"
            >
              Find a Doctor
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative min-h-[320px] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 shadow-[var(--shadow-card)]">
          <svg
            viewBox="0 0 600 420"
            className="h-full w-full rounded-[var(--radius-lg)]"
            aria-label="Abstract cardiology mesh illustration"
            role="img"
          >
            <defs>
              <linearGradient id="cardioMeshA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C8102E" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1B4F72" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient id="cardioMeshB" cx="50%" cy="50%" r="52%">
                <stop offset="0%" stopColor="#2E86C1" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="420" fill="#F2F1EE" />
            <circle cx="200" cy="140" r="170" fill="url(#cardioMeshA)" />
            <circle cx="420" cy="250" r="180" fill="url(#cardioMeshB)" />
            <path
              d="M40 240 C130 240, 160 120, 240 120 C300 120, 335 290, 395 290 C470 290, 470 190, 560 190"
              stroke="#C8102E"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 grid content-start gap-3 p-5 sm:p-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: reducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06, type: "spring", stiffness: 140 }}
                className="ml-auto w-[78%] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 shadow-[var(--shadow-card)]"
                style={{ transform: `rotate(${index === 0 ? "-2deg" : index === 1 ? "0deg" : "+1.5deg"})` }}
              >
                <p className="text-xl font-semibold text-[var(--color-text-1)]">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.04em] text-[var(--color-text-3)]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
