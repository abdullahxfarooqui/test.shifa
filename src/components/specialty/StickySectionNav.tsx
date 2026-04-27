"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

type StickySectionNavProps = {
  items: NavItem[];
};

export function StickySectionNav({ items }: StickySectionNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.15 },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[68px] z-40 h-11 border-b border-[var(--color-border)] bg-[rgba(250,250,248,0.88)] backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center overflow-x-auto px-4 sm:px-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "mr-5 shrink-0 border-b-2 py-2 text-sm font-medium transition-[var(--transition)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary)]",
              active === item.id
                ? "border-[var(--color-primary)] font-semibold text-[var(--color-primary)]"
                : "border-transparent text-[var(--color-text-2)] hover:text-[var(--color-text-1)]",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
