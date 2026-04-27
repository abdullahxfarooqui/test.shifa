"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
};

export function AnimatedCounter({ value, durationMs = 800, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [durationMs, value]);

  return (
    <span aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
