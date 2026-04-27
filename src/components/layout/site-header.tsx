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
} from "lucide-react";

import { Button } from "@/components/ui/button";

const topLinks = [
  "International Patients",
  "Home Health",
  "Academics & Research",
  "Corporate",
  "News & Events",
  "Careers",
  "Virtual Tour",
];

const menuLinks = [
  "Home",
  "Patient Portal",
  "Specialities",
  "Health Library",
  "International Patients",
  "Home Health",
  "Academics & Research",
  "Corporate",
  "News & Events",
  "Careers",
  "Virtual Tour",
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Globe },
  { label: "Instagram", href: "#", icon: MessageCircle },
  { label: "YouTube", href: "#", icon: CirclePlay },
  { label: "LinkedIn", href: "#", icon: Briefcase },
];

function menuHref(label: string) {
  const slug = label.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-");
  if (label === "Specialities") {
    return "/specialities";
  }

  if (label === "Home") {
    return "/";
  }

  return `/${slug}`;
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/96 backdrop-blur-sm">
      <div className="hidden border-b border-slate-200 lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <span className="ml-2 h-4 w-px bg-slate-300" />
            <button className="inline-flex items-center gap-1 font-medium hover:text-[var(--brand-primary)]">
              <Languages className="h-4 w-4" />
              English
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-1 font-medium hover:text-[var(--brand-primary)]">
              Islamabad
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-5">
            {topLinks.map((label) => (
              <Link key={label} href={menuHref(label)} className="hover:text-[var(--brand-primary)]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] items-center gap-6 px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative flex h-12 w-48 shrink-0 items-center justify-center overflow-hidden md:w-56 lg:w-58"
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

        <nav className="hidden flex-1 items-center gap-5 xl:flex">
          {menuLinks.slice(0, 4).map((label) => (
            <Link
              key={label}
              href={menuHref(label)}
              className={
                label === "Specialities"
                  ? "font-semibold text-[var(--brand-primary)]"
                  : "text-slate-700 transition-colors hover:text-[var(--brand-primary)]"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link href="tel:+92518464646" className="inline-flex items-center gap-2 text-[15px] text-slate-700">
            <Phone className="h-4 w-4 text-red-600" />
            051-8464646
          </Link>
          <Link href="/contact-us" className="text-slate-800 hover:text-[var(--brand-primary)]">
            Contact Us
          </Link>
          <Button className="bg-[#E53935] text-white hover:bg-[#cf2d2a] focus-visible:ring-[#E53935]" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        </div>
      </div>
    </header>
  );
}