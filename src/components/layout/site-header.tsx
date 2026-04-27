import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  ChevronDown,
  CirclePlay,
  Globe,
  Languages,
  MessageCircle,
  Phone,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const secondaryLinks = [
  { label: "International Patients", href: "/international-patients" },
  { label: "Home Health", href: "/home-health" },
  { label: "Academics & Research", href: "/academics-research" },
  { label: "Corporate", href: "/corporate" },
  { label: "News & Events", href: "/health-library" },
  { label: "Careers", href: "/careers" },
  { label: "Virtual Tour", href: "#virtual-tour" },
];

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "Specialities", href: "/specialities" },
  { label: "Health Library", href: "/health-library" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Globe },
  { label: "Instagram", href: "#", icon: MessageCircle },
  { label: "YouTube", href: "#", icon: CirclePlay },
  { label: "LinkedIn", href: "#", icon: Briefcase },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ── Row 1: Utility bar ── visible on lg+ ─────────────────────── */}
      <div className="hidden border-b border-slate-200 bg-slate-50 lg:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-1.5 text-[13px] text-slate-600">

          {/* Left: social icons + language + location */}
          <div className="flex items-center gap-1.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-[26px] w-[26px] place-items-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}

            <span className="mx-2 h-3.5 w-px bg-slate-300" />

            <button
              type="button"
              className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[#0B5FA5]"
            >
              <Languages className="h-3.5 w-3.5" />
              English
              <ChevronDown className="h-3 w-3" />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[#0B5FA5]"
            >
              Islamabad
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          {/* Right: secondary navigation links */}
          <nav className="flex items-center gap-5">
            {secondaryLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-[#0B5FA5]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Row 2: Main header ────────────────────────────────────────── */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-4 py-3 lg:px-6">

          {/* Logo */}
          <Link
            href="/"
            className="relative flex h-12 w-44 shrink-0 items-center overflow-hidden md:w-52"
            aria-label="Shifa International Hospitals"
          >
            <Image
              src="/Shifa-logo.png"
              alt="Shifa International Hospitals"
              width={701}
              height={456}
              className="h-auto w-[115%] max-w-none object-center"
              priority
            />
          </Link>

          {/* Primary nav — visible on lg+ */}
          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            {primaryLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={
                  label === "Specialities"
                    ? "font-semibold text-[#0B5FA5]"
                    : "text-slate-700 transition-colors hover:text-[#0B5FA5]"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search — visible on lg+ */}
          <Link
            href="/search"
            className="hidden items-center gap-2 rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-400 transition-colors hover:border-[#0B5FA5] hover:text-[#0B5FA5] lg:flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
            <span className="w-28 xl:w-40">Search</span>
          </Link>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-4 lg:ml-0">
            <Link
              href="tel:+92518464646"
              className="hidden items-center gap-1.5 text-[15px] text-slate-700 lg:flex"
            >
              <Phone className="h-4 w-4 text-[#E53935]" />
              051-8464646
            </Link>

            <Link
              href="/contact-us"
              className="hidden text-sm text-slate-700 transition-colors hover:text-[#0B5FA5] lg:block"
            >
              Contact Us
            </Link>

            <Button
              className="bg-[#E53935] text-white hover:bg-[#cf2d2a] focus-visible:ring-[#E53935]"
              asChild
            >
              <Link href="/login">Log in</Link>
            </Button>
          </div>
        </div>
      </div>

    </header>
  );
}
