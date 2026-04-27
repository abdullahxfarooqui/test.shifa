"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ChartPoint = {
  year: string;
  value: number;
};

type DataVizBlockProps = {
  title: string;
  description: string;
  data: ChartPoint[];
  legendLabel?: string;
};

export function DataVizBlock({ title, description, data, legendLabel = "Clinical trend" }: DataVizBlockProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="data" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-accent)_4%,white)] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.04em] text-[var(--color-text-3)]">By the Numbers</p>
          <h2 className="mt-2 text-[28px] font-semibold text-[var(--color-text-1)]">{title}</h2>
          <p className="mt-3 text-[17px] leading-[1.7] text-[var(--color-text-2)]">{description}</p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] sm:p-6"
          aria-label={`${title} chart`}
        >
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>
                <CartesianGrid stroke="var(--color-border)" strokeWidth={0.5} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "var(--color-text-3)" }} />
                <YAxis tick={{ fontSize: 11, fill: "var(--color-text-3)" }} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 6,
                    boxShadow: "var(--shadow-card)",
                    fontSize: 13,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-accent)"
                  strokeWidth={3}
                  dot={{ r: 3, fill: "var(--color-primary)" }}
                  isAnimationActive={!reducedMotion}
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex items-center gap-5 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-text-3)]">
            <p className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" /> {legendLabel}
            </p>
            <p className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" /> Data points 2000-2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
