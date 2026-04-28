"use client";

import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP } from "web-vitals";

type VitalEntry = { name: string; value: number; rating: string };

export function VitalsDebugOverlay() {
  const [vitals, setVitals] = useState<VitalEntry[]>([]);

  useEffect(() => {
    const update = (metric: { name: string; value: number; rating: string }) => {
      setVitals((prev) => {
        const filtered = prev.filter((v) => v.name !== metric.name);
        return [...filtered, { name: metric.name, value: metric.value, rating: metric.rating }];
      });
    };

    onCLS(update);
    onINP(update);
    onLCP(update);
  }, []);

  if (vitals.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: 12,
        fontFamily: "monospace",
        minWidth: 160,
        pointerEvents: "none",
      }}
    >
      <div style={{ marginBottom: 6, fontWeight: 700, letterSpacing: 1, fontSize: 10, opacity: 0.6 }}>
        WEB VITALS
      </div>
      {vitals.map((v) => (
        <div key={v.name} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <span>{v.name}</span>
          <span
            style={{
              color: v.rating === "good" ? "#4ade80" : v.rating === "needs-improvement" ? "#facc15" : "#f87171",
            }}
          >
            {v.name === "CLS" ? v.value.toFixed(4) : Math.round(v.value) + "ms"}
          </span>
        </div>
      ))}
    </div>
  );
}
