import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  CirclePlay,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const patientPortalLinks = ["Find a Doctor", "Patient Reports", "Get a Second Opinion"];
const healthLibraryLinks = ["A-Z Patient Guide", "Shifa News", "Health Calculators"];
const aboutLinks = ["Company Overview", "Investor Relations", "Awards & Accolades", "Policies"];
const subsidiaryLinks = [
  "Shifa National Hospital Faisalabad (Pvt.) Limited",
  "Shifa Medical Center Islamabad (Pvt.) Limited",
  "Shifa Development Services (Pvt.) Limited",
];
const associatedLinks = ["Shifa CARE (Pvt.) Limited", "SIHT (Pvt.) Limited"];

function toHref(value: string) {
  return `/${value.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-")}`;
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#062744] text-slate-100">
      <div className="mx-auto max-w-[1240px] px-4 py-12 lg:px-6">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <h2 className="text-lg font-semibold">Subscribe to Latest Hospital News</h2>
            <form action="#" className="mt-4 flex gap-3">
              <input
                type="email"
                aria-label="Email"
                placeholder="Your email address"
                className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-[var(--brand-accent)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#cf2d2a]"
              >
                Send
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Get in Touch</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <Link href="tel:+92518464646" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                051-8464646
              </Link>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Pitras Bukhari Road, H-8/4, Islamabad Capital Territory.
              </p>
              <p>Healthcare with Compassion for all</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="relative flex h-16 w-56 items-center justify-center overflow-hidden rounded-xl bg-white px-2 sm:h-20 sm:w-64 lg:w-72">
              <Image
                src="/Shifa-logo.png"
                alt="Shifa International Hospitals"
                width={701}
                height={466}
                className="h-auto w-[120%] max-w-none object-center"
              />
            </div>
            <p className="mt-4 text-sm text-slate-200">Powered by Corporate Communications, Shifa International Hospitals Limited</p>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-2 xl:grid-cols-5">
          <FooterColumn title="Patient Portal" links={patientPortalLinks} />
          <FooterColumn title="Health Library" links={healthLibraryLinks} />
          <FooterColumn title="About Us" links={aboutLinks} />
          <FooterColumn title="Subsidiary Companies" links={subsidiaryLinks} />
          <FooterColumn title="Associated Companies" links={associatedLinks} />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-slate-200 md:flex-row md:items-center md:justify-between">
          <p>© Shifa International Hospitals Ltd., Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Globe, MessageCircle, CirclePlay, Briefcase].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/35 transition-colors hover:bg-white hover:text-[#062744]"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {links.map((item) => (
          <li key={item}>
            <Link href={toHref(item)} className="hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}