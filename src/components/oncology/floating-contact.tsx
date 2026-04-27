"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function FloatingContactActions() {
  return (
    <>
      <motion.div
        className="fixed bottom-5 right-4 z-40 hidden flex-col gap-3 md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <FloatingChip
          href="tel:+92518464646"
          icon={<Phone className="h-5 w-5" aria-hidden />}
          label="Call"
          accent="bg-red-600"
        />
        <FloatingChip
          href="https://wa.me/92518464646"
          icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          label="WhatsApp"
          accent="bg-emerald-600"
        />
        <FloatingChip
          href="/contact-us"
          icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          label="Chat"
          accent="bg-[var(--brand-primary)]"
        />
      </motion.div>

      <motion.div
        className="fixed inset-x-4 bottom-4 z-40 md:hidden"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
      >
        <Link
          href="/patient-portal/book-appointment"
          className="flex h-12 items-center justify-center rounded-xl bg-[var(--brand-accent)] text-sm font-semibold text-white shadow-lg shadow-[var(--brand-accent)]/35"
        >
          Book Appointment
        </Link>
      </motion.div>

      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <Link
          href="/patient-portal/book-appointment"
          className={cn(
            "rounded-2xl bg-[var(--brand-accent)] px-4 py-4 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-[1.02]",
            "[writing-mode:vertical-rl] [text-orientation:mixed]",
          )}
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
}

type FloatingChipProps = {
  href: string;
  label: string;
  accent: string;
  icon: ReactNode;
};

function FloatingChip({ href, label, icon, accent }: FloatingChipProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-xl ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5",
      )}
    >
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full text-white transition-transform group-hover:scale-105",
          accent,
        )}
      >
        {icon}
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-24">
        {label}
      </span>
    </Link>
  );
}