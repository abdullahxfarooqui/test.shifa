"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

const keyActions = [
  { label: "Find a Doctor", href: "/doctors/dr-ayesha-khan", icon: "🩺" },
  { label: "Patient Reports", href: "/patient-portal", icon: "📋" },
  { label: "Executive Health", href: "/corporate", icon: "🏥" },
  { label: "Health Calculators", href: "/health-library/calculators", icon: "🔢" },
];

const islamabadPrograms = [
  {
    id: "discounts",
    eyebrow: "Special Discounts",
    title: "Shifa Medical Center",
    subtitle: "Quality Care at Reduced Prices",
    summary: "20% off on Lab, X-Ray & Ultrasound. For more information call 051-8469000, G-10 Islamabad.",
    cta: { label: "Call 051-8469000", href: "tel:0518469000" },
    tone: "bg-[#f6fbff]",
  },
  {
    id: "cancer",
    eyebrow: "Shifa Cancer Center",
    title: "Hope, Healing, Wholeness",
    subtitle: "Your fight is our mission",
    summary:
      "Complete care and unwavering support under one roof with expert oncologists, advanced technology, and personalized plans.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#fff7f4]",
  },
  {
    id: "transplant",
    eyebrow: "Organ Transplant",
    title: "Where Second Chances Begin",
    subtitle: "A promise of tomorrow",
    summary:
      "World-class transplant facilities, personalized care, and expert surgeons helping patients reclaim life with confidence.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#f3fcf7]",
  },
  {
    id: "lab",
    eyebrow: "Total Lab Automation",
    title: "Precision You Can Trust",
    subtitle: "Fast and accurate diagnostics",
    summary:
      "Cutting-edge automation delivers rapid reporting and dependable results to support timely treatment decisions.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#f7f6ff]",
  },
  {
    id: "heart",
    eyebrow: "Shifa Heart Center",
    title: "Your Heart, Our Mission",
    subtitle: "From prevention to recovery",
    summary:
      "Personal, precise cardiac care built around prevention, intervention, and long-term recovery pathways.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#fff7f7]",
  },
  {
    id: "executive",
    eyebrow: "Executive Clinics",
    title: "Where Comfort Meets Care",
    subtitle: "Seamless wellness journey",
    summary:
      "Personalized diagnostics and specialist consultations designed for convenience, efficiency, and peace of mind.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#f5faff]",
  },
  {
    id: "lithotripsy",
    eyebrow: "Lithotripsy",
    title: "Relief Without Surgery",
    subtitle: "Non-invasive stone management",
    summary:
      "Advanced lithotripsy breaks kidney stones safely with faster recovery and less treatment disruption.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#f5fdfb]",
  },
  {
    id: "sunday",
    eyebrow: "Sunday OPD Clinics",
    title: "Your Health, Your Schedule",
    subtitle: "Up to 30% discount",
    summary:
      "Consult top specialists on Sundays and avail MRI, CT, X-Ray, Dexa Scan, Lab Tests, ECG, Echo and ETT at special rates.",
    cta: { label: "Book Appointment", href: "/book-appointment" },
    tone: "bg-[#fffdf5]",
  },
  {
    id: "ambulance",
    eyebrow: "Shifa Ambulance Services",
    title: "Technology Driven | Patient Centric | Future Ready",
    subtitle: "Complete pre-hospital care",
    summary:
      "Operates with trained emergency teams and fully equipped ambulances for advanced life support and transport.",
    cta: { label: "Medical Emergency: 051-846-4646", href: "tel:0518464646" },
    tone: "bg-[#fff7f7]",
  },
];

const specialityLinks = [
  { title: "Anesthesiology", href: "/specialities/anesthesiology/islamabad", icon: "💉" },
  { title: "Audiology", href: "/specialities/audiology/islamabad", icon: "👂" },
  { title: "Cardiology", href: "/specialities/cardiology/islamabad", icon: "❤️" },
  { title: "Cardiac Surgery", href: "/specialities/cardiac-surgery/islamabad", icon: "🫀" },
  { title: "Dentistry & Orthodontics", href: "/specialities/dentistry-and-orthodontics/islamabad", icon: "🦷" },
  { title: "Dermatology", href: "/specialities/dermatology/islamabad", icon: "🧴" },
  { title: "Emergency Medicine", href: "/specialities/emergency-medicine/islamabad", icon: "🚨" },
  { title: "Endocrinology & Diabetes", href: "/specialities/endocrinology-and-diabetes/islamabad", icon: "🩸" },
  { title: "ENT", href: "/specialities/ent/islamabad", icon: "👃" },
  { title: "Gastroenterology", href: "/specialities/gastroenterology-and-hepatology/islamabad", icon: "🫁" },
  { title: "General Surgery", href: "/specialities/general-surgery/islamabad", icon: "🔬" },
  { title: "Infectious Diseases", href: "/specialities/infectious-diseases/islamabad", icon: "🦠" },
  { title: "Internal Medicine", href: "/specialities/internal-medicine/islamabad", icon: "🩺" },
  { title: "Nephrology", href: "/specialities/nephrology/islamabad", icon: "🫘" },
  { title: "Neurology", href: "/specialities/neurology/islamabad", icon: "🧠" },
];

const stats = [
  { label: "Beds", value: "550+" },
  { label: "Clinical Consultants", value: "300+" },
  { label: "Clinical Specialties", value: "45+" },
  { label: "Transplants", value: "3,000+" },
  { label: "Employees", value: "5,000+" },
  { label: "LPPs", value: "70+" },
  { label: "Critical Care Beds", value: "130+" },
  { label: "Emergency Beds", value: "55+" },
];

const transplantServices = [
  {
    title: "Liver Transplant",
    detail:
      "Pakistan's premier liver transplant program with milestone outcomes and continuously advancing transplant pathways.",
    href: "/specialities/liver-transplant/islamabad",
  },
  {
    title: "Bone Marrow Transplant",
    detail: "Second-largest BMT program in Pakistan with advanced, affordable, and personalized transplant care.",
    href: "/specialities/bone-marrow-transplant/islamabad",
  },
  {
    title: "Kidney Transplant",
    detail: "One of Pakistan's leading KT programs with advanced adult and pediatric surgical support.",
    href: "/specialities/kidney-transplant/islamabad",
  },
  {
    title: "Corneal Transplant",
    detail: "Leading regional corneal transplant pathway with 350+ successful transplant procedures.",
    href: "/specialities/corneal-transplant/islamabad",
  },
];

const patientGuideTabs = [
  "Diseases & Conditions",
  "Symptoms",
  "Tests & Procedures",
  "Glossary",
];

const letterHighlights: Record<string, string> = {
  A: "Asthma",
  B: "Blood Pressure",
  C: "Cardiac Arrest",
  D: "Diabetes",
  E: "ECG",
  F: "Flu",
  G: "Gastritis",
  H: "Hypertension",
  I: "Insulin",
  J: "Jaundice",
  K: "Kidney Stones",
  L: "Liver Function Test",
  M: "Migraine",
  N: "Neuropathy",
  O: "Osteoporosis",
  P: "Pneumonia",
  Q: "Quality of Life",
  R: "Radiology",
  S: "Stroke",
  T: "Thyroid",
  U: "Ultrasound",
  V: "Vaccination",
  W: "Wound Care",
  X: "X-Ray",
  Y: "Yeast Infection",
  Z: "Zinc Deficiency",
};

const islamabadHeroImage =
  "https://s3storage.nayatel.com/customer-shifa/uploads/Beacon_of_Healing_and_Hope_60dc0919d6.webp";

export function HomePage() {
  const [activeProgram, setActiveProgram] = useState(islamabadPrograms[0].id);
  const [activeGuideTab, setActiveGuideTab] = useState(patientGuideTabs[0]);
  const [activeLetter, setActiveLetter] = useState("A");
  const program = useMemo(
    () => islamabadPrograms.find((item) => item.id === activeProgram) ?? islamabadPrograms[0],
    [activeProgram],
  );

  return (
    <main className="bg-[#f8fbff] text-slate-900">
      <section className="relative overflow-hidden bg-[#0a2443]">
        <div className="absolute inset-0">
          <Image src={islamabadHeroImage} alt="Shifa International Hospital Islamabad campus" fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07203b]/95 via-[#0b2f57]/85 to-[#0b5fa5]/70" />
        </div>
        <div className="relative mx-auto grid min-h-[66vh] max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
              Islamabad flagship campus
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Expert Specialists. Compassionate Care.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
              JCI Gold-accredited quaternary care with advanced centers in oncology, transplant, cardiac sciences, diagnostics, and emergency services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#e53935] hover:bg-[#cc2d2a]">
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-[#0b5fa5] hover:bg-slate-100">
                <Link href="tel:0518464646">Call 051-8464646</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/25 bg-white/10 p-5 backdrop-blur-md sm:p-6">
            <h3 className="text-lg font-bold text-white">Quick Access</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {keyActions.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#e53935]/20 p-4 text-sm text-blue-100">
              <span className="text-xl">🚑</span>
              <div>
                <p className="font-semibold text-white">Medical Emergency?</p>
                <p className="mt-0.5">Call 051-846-4646 for ambulance and emergency support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-7 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] md:grid-cols-4">
          {[
            { title: "Shifa Medical Center", desc: "20% off Lab, X-Ray & Ultrasound", href: "tel:0518469000" },
            { title: "Sunday OPD", desc: "Up to 30% discount", href: "/book-appointment" },
            { title: "Ambulance", desc: "Technology driven, patient centric", href: "tel:0518464646" },
            { title: "International Patients", desc: "Dedicated global care support", href: "/international-patients" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 hover:border-[#0b5fa5] hover:bg-[#eff7ff]">
              <p className="text-sm font-bold text-slate-900">{item.title}</p>
              <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust / accreditation bar */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Accreditations & Recognition</p>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { label: "JCI Gold Seal", sub: "Joint Commission International" },
                { label: "CPSP Recognised", sub: "Postgraduate Training" },
                { label: "ISO 15189", sub: "Laboratory Accreditation" },
                { label: "600+ Beds", sub: "Quaternary Care Capacity" },
                { label: "Est. 1987", sub: "37+ Years of Service" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-[#0b5fa5]">{badge.label}</span>
                  <span className="text-[11px] text-slate-500">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0b5fa5]">Islamabad section</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Interactive Care Programs</h2>
            <p className="mt-3 text-slate-600">
              Select a program to explore major services, offers, and care pathways available at Shifa Islamabad.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-3">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {islamabadPrograms.map((item) => {
                const active = item.id === activeProgram;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveProgram(item.id)}
                    className={[
                      "flex items-start gap-3 rounded-2xl border px-3 py-3 text-left transition",
                      active
                        ? "border-[#0b5fa5] bg-[#eaf4ff] shadow-[0_10px_25px_-18px_rgba(11,95,165,0.85)]"
                        : "border-slate-200 bg-white hover:border-[#9ec8f2]",
                    ].join(" ")}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.eyebrow}</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">{item.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.6)]">
            <div className={"rounded-2xl p-5 " + program.tone}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0b5fa5]">{program.eyebrow}</p>
              <h3 className="mt-1 text-3xl font-black text-slate-900">{program.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-700">{program.subtitle}</p>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{program.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="bg-[#0b5fa5] hover:bg-[#0a4f8b]">
                <Link href={program.cta.href}>{program.cta.label}</Link>
              </Button>
              <Button asChild variant="secondary" className="border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
                <Link href="/contact-us">Talk to Care Team</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Medical & Surgical Specialities</h2>
              <p className="mt-3 text-slate-600">Explore key departments in Islamabad and continue to the full specialties directory.</p>
            </div>
            <Button asChild variant="secondary" className="border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
              <Link href="/specialities" className="inline-flex items-center gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {specialityLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fcfdff] p-4 transition hover:-translate-y-1 hover:border-[#0b5fa5] hover:bg-[#eaf4ff] hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf4ff] text-xl group-hover:bg-white">{item.icon}</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#0b5fa5]">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Why Choose Shifa?</h2>
          <p className="mt-3 max-w-4xl text-slate-600">
            Shifa International Hospitals Ltd. is a premier healthcare facility known for world-class infrastructure, advanced diagnostics, and patient-centered care.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#eaf4ff] to-white p-5">
                <div className="absolute right-3 top-3 h-12 w-12 rounded-full bg-[#0b5fa5]/5" />
                <p className="text-4xl font-black text-[#0b5fa5]">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Shifa Organ Transplant Services</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {transplantServices.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-5">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5fa5]">
                  Explore service <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">A-Z Patient Guide</h2>
          <p className="mt-3 max-w-4xl text-slate-600">
            Explore diseases, symptoms, tests, and procedures in English and Urdu to make informed healthcare decisions.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {patientGuideTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveGuideTab(tab)}
                className={[
                  "rounded-full border px-3 py-1.5 text-sm font-semibold transition",
                  activeGuideTab === tab
                    ? "border-[#0b5fa5] bg-[#eaf4ff] text-[#0b5fa5]"
                    : "border-slate-200 text-slate-600 hover:border-slate-300",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#f7fbff] p-4">
            <p className="text-sm font-semibold text-slate-700">Find by first letter</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {Object.keys(letterHighlights).map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setActiveLetter(letter)}
                  className={[
                    "h-8 w-8 rounded-md border text-xs font-bold transition",
                    activeLetter === letter
                      ? "border-[#0b5fa5] bg-[#0b5fa5] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#9ec8f2]",
                  ].join(" ")}
                >
                  {letter}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">{activeLetter}</span> - {letterHighlights[activeLetter]}
            </p>
            <Link href="/health-library/patient-guide" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5fa5]">
              Open A-Z Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Stories of Hope and Healing</h2>
            <Button asChild variant="secondary" className="border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
              <Link href="/health-library/blogs">See more stories</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0b5fa5]">Oncology · Breast Cancer</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">"The tumor board gave me clarity when I needed it most"</p>
              <p className="mt-2 text-sm text-slate-600">
                Nadia R., 44, was diagnosed with stage II breast cancer in 2024. After a multidisciplinary tumor board review at Shifa, she received a coordinated treatment plan covering surgery, chemotherapy, and targeted therapy. She completed treatment in eight months and returned to work full-time.
              </p>
              <p className="mt-3 text-xs text-slate-400">Islamabad · March 2025</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0b5fa5]">Cardiology · Heart Attack</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">"The cardiac team had the stent in within 40 minutes"</p>
              <p className="mt-2 text-sm text-slate-600">
                Khalid M., 58, arrived at Shifa Emergency with severe chest pain at 2 AM. The interventional cardiology team performed a primary PCI within the door-to-balloon time target. He was discharged in four days and completed cardiac rehabilitation over six weeks.
              </p>
              <p className="mt-3 text-xs text-slate-400">Rawalpindi · November 2024</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0b5fa5]">Orthopedics · Knee Replacement</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">"I walked unaided after just three weeks"</p>
              <p className="mt-2 text-sm text-slate-600">
                Sajida B., 67, had severe knee osteoarthritis for six years before her total knee replacement at Shifa. The surgical and rehabilitation team had her walking without assistance within three weeks. She now gardens and manages her daily routine without pain.
              </p>
              <p className="mt-3 text-xs text-slate-400">Islamabad · January 2025</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#0b2b45]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">Subscribe to Latest Hospital News</h2>
              <p className="mt-2 text-blue-100">Get stories of hope, health updates, and awareness articles from Shifa.</p>
              <div className="mt-5 flex max-w-xl gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-xl border border-white/30 bg-white/10 px-3 text-sm text-white placeholder:text-blue-200 focus:border-white/60 focus:outline-none"
                />
                <button className="rounded-xl bg-white px-4 text-sm font-bold text-[#0b5fa5]">Send</button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-blue-100">
              <p className="text-sm">051-8464646</p>
              <p className="mt-2 text-sm">Pitras Bukhari Road, H-8/4, Islamabad Capital Territory.</p>
              <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Get in touch <PhoneCall className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
