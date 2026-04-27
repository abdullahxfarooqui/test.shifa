"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BedDouble,
  CalendarCheck2,
  ChevronRight,
  Dna,
  FlaskConical,
  Microscope,
  Phone,
  Radio,
  ScanSearch,
  Scissors,
  Syringe,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Facility, DiagnosticCategory } from "@/types/shifa";

const ClinicalOutcomesCharts = dynamic(
  () => import("@/components/oncology/clinical-outcomes-charts"),
  {
    ssr: false,
    loading: () => (
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-[320px] rounded-2xl bg-white/70 shadow-sm" />
        ))}
      </div>
    ),
  },
);

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Facilities", href: "#facilities" },
  { label: "Diagnostics", href: "#diagnostics" },
  { label: "Treatments", href: "#treatments" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Clinical Team", href: "#clinical-team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta" },
];

const introParagraphs = [
  "Shifa Oncology is engineered around precision and compassion. Every case is discussed through multidisciplinary pathways so patients receive faster, clearer decisions.",
  "Our teams combine medical, radiation, and surgical oncology with diagnostics and supportive care in one coordinated environment.",
  "From first screening to survivorship, treatment plans remain individualized, evidence-led, and communicated with complete transparency.",
];

const facilities = [
  {
    icon: Syringe,
    title: "Smart Infusion Suites",
    text: "Private chemotherapy bays with real-time safety monitoring and calm patient-first design.",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&fm=webp&w=1300&q=80",
    alt: "South Asian oncology care team in a monitored chemotherapy setting",
    bento: "md:col-span-3 md:row-span-2",
  },
  {
    icon: Radio,
    title: "Radiation Oncology",
    text: "Precision planning and quality-controlled radiotherapy workflows.",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&fm=webp&w=1300&q=80",
    alt: "Radiation oncology treatment room in Pakistan with modern linear accelerator",
    bento: "md:col-span-3",
  },
  {
    icon: BedDouble,
    title: "Inpatient Oncology",
    text: "Infection-aware inpatient rooms with integrated symptom support.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&fm=webp&w=1300&q=80",
    alt: "Premium oncology inpatient room in a Pakistan tertiary care hospital",
    bento: "md:col-span-2",
  },
  {
    icon: Scissors,
    title: "Surgical Complex",
    text: "Dedicated oncology operating and perioperative pathways.",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&fm=webp&w=1300&q=80",
    alt: "South Asian surgical oncology team preparing coordinated treatment",
    bento: "md:col-span-2",
  },
  {
    icon: ScanSearch,
    title: "Imaging & Staging",
    text: "Integrated PET-CT and MRI for treatment planning and follow-up.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&fm=webp&w=1300&q=80",
    alt: "Hospital diagnostic imaging room in Pakistan with PET-CT scanner",
    bento: "md:col-span-2",
  },
];

const diagnosticFilters: DiagnosticCategory[] = ["All", "Screening", "Imaging", "Lab", "Genetic"];

const diagnostics = [
  {
    icon: ScanSearch,
    title: "PET-CT and MRI Staging",
    text: "High-resolution staging for accurate baseline and response monitoring.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "PET-CT scanner used for oncology staging and monitoring",
    category: "Imaging" satisfies DiagnosticCategory,
  },
  {
    icon: Microscope,
    title: "Histopathology and IHC",
    text: "Subtype-level tissue diagnostics supporting evidence-based selection.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Pathology microscope and slides for tumor tissue analysis",
    category: "Lab" satisfies DiagnosticCategory,
  },
  {
    icon: FlaskConical,
    title: "Molecular Biomarker Testing",
    text: "Biomarker profiling to personalize targeted and systemic treatment pathways.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Molecular diagnostics lab for oncology biomarker testing",
    category: "Lab" satisfies DiagnosticCategory,
  },
  {
    icon: Dna,
    title: "Genetic Risk Counseling",
    text: "Family-level hereditary risk evaluation with prevention guidance.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Genetic counseling consultation for hereditary cancer risk",
    category: "Genetic" satisfies DiagnosticCategory,
  },
  {
    icon: UserRound,
    title: "Preventive Screening Clinics",
    text: "Structured early detection clinics with streamlined referral pathways.",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "South Asian preventive cancer screening consultation in outpatient clinic",
    category: "Screening" as DiagnosticCategory,
  },
];

const treatments = [
  {
    id: "medical",
    title: "Medical Oncology",
    subtitle: "Systemic and precision-led therapies",
    text: "Chemotherapy, immunotherapy, and targeted regimens are selected based on tumor biology, staging, and patient context.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&fm=webp&w=1400&q=80",
    alt: "South Asian oncology doctor discussing personalized systemic therapy",
  },
  {
    id: "radiation",
    title: "Radiation Oncology",
    subtitle: "Controlled precision and tissue protection",
    text: "Image-guided radiotherapy protocols prioritize control, safety, and quality-of-life preservation.",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&fm=webp&w=1400&q=80",
    alt: "Radiation oncology specialist planning precise radiotherapy delivery",
  },
  {
    id: "surgical",
    title: "Surgical and Recovery Care",
    subtitle: "Coordinated perioperative pathways",
    text: "Surgical planning, ICU readiness, pain management, and rehabilitation are integrated for seamless recovery.",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&fm=webp&w=1400&q=80",
    alt: "Surgical oncology team coordinating treatment and recovery planning",
  },
] as const;

const outcomeDatasets = {
  annual: {
    label: "Annual",
    recoveryTrend: [
      { period: "2021", value: 74 },
      { period: "2022", value: 78 },
      { period: "2023", value: 82 },
      { period: "2024", value: 86 },
      { period: "2025", value: 89 },
    ],
    successRates: [
      { name: "Medical", value: 88 },
      { name: "Radiation", value: 84 },
      { name: "Surgical", value: 90 },
      { name: "Targeted", value: 86 },
    ],
    caseDistribution: [
      { name: "Medical", value: 36, color: "#1E88E5" },
      { name: "Radiation", value: 24, color: "#0B5FA5" },
      { name: "Surgical", value: 28, color: "#63B3F6" },
      { name: "Targeted", value: 12, color: "#E53935" },
    ],
  },
  quarterly: {
    label: "Quarterly",
    recoveryTrend: [
      { period: "Q1", value: 82 },
      { period: "Q2", value: 84 },
      { period: "Q3", value: 87 },
      { period: "Q4", value: 90 },
    ],
    successRates: [
      { name: "Medical", value: 89 },
      { name: "Radiation", value: 85 },
      { name: "Surgical", value: 91 },
      { name: "Targeted", value: 87 },
    ],
    caseDistribution: [
      { name: "Medical", value: 34, color: "#1E88E5" },
      { name: "Radiation", value: 26, color: "#0B5FA5" },
      { name: "Surgical", value: 27, color: "#63B3F6" },
      { name: "Targeted", value: 13, color: "#E53935" },
    ],
  },
} as const;

const timeline = [
  { year: "1993", title: "Oncology Service Launch", text: "Foundational oncology service established at Shifa." },
  { year: "2006", title: "Program Expansion", text: "Dedicated medical and surgical oncology pathways scaled." },
  { year: "2015", title: "Diagnostics Depth", text: "Advanced staging and pathology precision integrated." },
  { year: "2026", title: "Continuity Model", text: "End-to-end diagnosis, treatment, and survivorship under one system." },
];

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    specialty: "Consultant Medical Oncologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&fm=webp&w=900&q=80",
    alt: "Portrait of consultant medical oncologist in Shifa Oncology team",
  },
  {
    name: "Dr. Umar Siddiqui",
    specialty: "Consultant Radiation Oncologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&fm=webp&w=900&q=80",
    alt: "Portrait of consultant radiation oncologist in hospital setting",
  },
  {
    name: "Dr. Maryam Ali",
    specialty: "Consultant Surgical Oncologist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&fm=webp&w=900&q=80",
    alt: "Portrait of consultant surgical oncologist from multidisciplinary team",
  },
];

const testimonials = [
  {
    quote: "Diagnostics and treatment were coordinated with remarkable clarity. Every step felt confident and precise.",
    author: "Patient Family, Islamabad",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Oncology doctor consulting patient family in private room",
  },
  {
    quote: "The nursing care was deeply compassionate and consistently structured throughout our treatment cycle.",
    author: "Caregiver, Faisalabad",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Nurse supporting oncology patient during treatment session",
  },
  {
    quote: "Our second opinion consultation gave us a clear roadmap and restored confidence immediately.",
    author: "International Patient",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&fm=webp&w=1200&q=80",
    alt: "Multidisciplinary oncology team reviewing records during case conference",
  },
];

const faqItems = [
  {
    q: "What oncology treatments are available at Shifa?",
    a: "Shifa provides medical, radiation, and surgical oncology, including targeted therapies, immunotherapy, and supportive palliative pathways.",
  },
  {
    q: "Can I request a second opinion consultation?",
    a: "Yes. Our specialists review pathology, scans, and treatment history to provide an independent, structured opinion.",
  },
  {
    q: "Do you provide oncology diagnostics in-house?",
    a: "Yes. PET-CT, MRI, pathology, molecular profiling, and genetic counseling are integrated into our workflow.",
  },
  {
    q: "How can I book an oncology appointment?",
    a: "You can call +92 51 8464646 or use the online appointment option on this page.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type OutcomeDataset = {
  recoveryTrend: readonly { period: string; value: number }[];
  successRates: readonly { name: string; value: number }[];
  caseDistribution: readonly { name: string; value: number; color: string }[];
};

export function OncologyPage() {
  const [activeSection, setActiveSection] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [diagnosticFilter, setDiagnosticFilter] = useState<DiagnosticCategory>("All");
  const [activeTreatmentId, setActiveTreatmentId] = useState<(typeof treatments)[number]["id"]>("medical");
  const [activeOutcomeDataset, setActiveOutcomeDataset] = useState<keyof typeof outcomeDatasets>("annual");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const visibleDiagnostics = useMemo(() => {
    if (diagnosticFilter === "All") return diagnostics;
    return diagnostics.filter((item) => item.category === diagnosticFilter);
  }, [diagnosticFilter]);

  const activeTreatment = treatments.find((item) => item.id === activeTreatmentId) ?? treatments[0];
  const selectedOutcome = outcomeDatasets[activeOutcomeDataset];

  return (
    <>
      <OncologyStructuredData />
      <main className="bg-white text-[#0F172A]">
        <section className="relative isolate overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&fm=webp&w=2200&q=80"
            alt="Pakistani oncology team walking through a premium hospital oncology wing"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B5FA5]/92 via-[#0B5FA5]/72 to-[#1E88E5]/44" />
          <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-24">
            <nav aria-label="Breadcrumb" className="sr-only">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/specialities">Specialities</Link>
                </li>
                <li>
                  <span>Oncology</span>
                </li>
              </ol>
            </nav>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Oncology Department</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Precision Cancer Care with Human-Centered Compassion
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-blue-50">
                Advanced diagnostics, multidisciplinary planning, and treatment pathways designed for confidence,
                comfort, and continuity.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#E53935] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#cb2f2b] hover:shadow-xl"
                  asChild
                >
                  <Link href="tel:+92518464646" className="inline-flex items-center gap-2">
                    <CalendarCheck2 className="h-4 w-4" /> Book Appointment
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border border-white/60 bg-white text-[#1E88E5] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                  asChild
                >
                  <Link href="/doctors/dr-ayesha-khan" className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4" /> Find Doctor
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="intro" className="scroll-mt-36 bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Oncology at Shifa</h2>
              <div className="mt-6 space-y-6">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Explore related services in our <Link href="/specialities" className="font-semibold text-[#1E88E5] hover:text-[#0B5FA5]">specialties directory</Link> and learn more in our <Link href="/conditions/breast-cancer-treatment" className="font-semibold text-[#1E88E5] hover:text-[#0B5FA5]">oncology condition guide</Link>.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="relative h-[420px] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&fm=webp&w=1400&q=80"
                alt="Pakistani oncology consultant and patient discussing treatment in private clinical room"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="sticky top-[70px] z-40 border-y border-blue-100 bg-white/95 backdrop-blur lg:top-[104px]">
          <div className="mx-auto max-w-7xl px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={cn(
                    "mr-2 inline-flex shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
                    activeSection === item.href
                      ? "border-[#1E88E5] bg-[#1E88E5] text-white"
                      : "border-blue-100 bg-white text-[#0B5FA5] hover:scale-[1.02] hover:shadow-sm",
                  )}
                >
                  {item.label}
                </a>
              ))}
              </div>
              <Button
                size="sm"
                className="shrink-0 bg-[#E53935] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#cb2f2b] hover:shadow-xl"
                asChild
              >
                <Link href="tel:+92518464646">Call Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="facilities" className="scroll-mt-40 bg-[#F5F9FF] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Facilities</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Premium oncology environments designed for safety, precision, and patient calm.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid auto-rows-[200px] gap-5 md:grid-cols-6"
            >
              {facilities.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02, rotateX: 1.2, rotateY: -1.2 }}
                  transition={{ duration: 0.28 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-[#f8fbff] to-[#eaf3ff] shadow-sm hover:shadow-xl",
                    item.bento,
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B5FA5]/78 via-[#0B5FA5]/34 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100">{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="diagnostics" className="scroll-mt-40 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Diagnostic Services</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Filter services by category for faster discovery and clearer pathway planning.
              </p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2">
              {diagnosticFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setDiagnosticFilter(filter)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
                    diagnosticFilter === filter
                      ? "border-[#1E88E5] bg-[#1E88E5] text-white"
                      : "border-blue-100 bg-white text-[#0B5FA5] hover:scale-[1.02] hover:shadow-sm",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visibleDiagnostics.map((item) => (
                  <motion.article
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="grid overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl sm:grid-cols-[220px_1fr]"
                  >
                    <div className="relative min-h-[170px]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E88E5]">{item.category}</p>
                      <h3 className="mt-2 text-xl font-semibold text-[#0B5FA5]">{item.title}</h3>
                      <p className="mt-2 text-lg leading-relaxed text-gray-600">{item.text}</p>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section id="treatments" className="scroll-mt-40 bg-[#F5F9FF] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Treatment Sections</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Tab through specialized treatment tracks with smooth transitions and clear content focus.
              </p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2">
              {treatments.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTreatmentId(item.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
                    activeTreatmentId === item.id
                      ? "border-[#1E88E5] bg-[#1E88E5] text-white"
                      : "border-blue-100 bg-white text-[#0B5FA5] hover:scale-[1.02] hover:shadow-sm",
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeTreatment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="mt-8 grid overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl lg:grid-cols-[1.1fr_1fr]"
              >
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E88E5]">{activeTreatment.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#0B5FA5]">{activeTreatment.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">{activeTreatment.text}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        className="bg-[#E53935] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#cb2f2b] hover:shadow-xl"
                        asChild
                      >
                        <Link href="tel:+92518464646" className="inline-flex items-center gap-2">
                          Book Treatment Consultation <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    <Button variant="secondary" className="transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm" asChild>
                      <Link href="/doctors/dr-ayesha-khan">Talk to Specialist</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[260px]">
                  <Image
                    src={activeTreatment.image}
                    alt={activeTreatment.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section id="outcomes" className="scroll-mt-40 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Clinical Outcomes</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Performance views across recovery trends, success rates, and case distribution to support transparent,
                evidence-led oncology decisions.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="mt-10 rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white/80 via-[#f5f9ff]/85 to-[#e9f2ff]/90 p-6 shadow-sm backdrop-blur-xl md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B5FA5]">Dataset View</p>
                <div className="inline-flex rounded-full border border-blue-100 bg-white/90 p-1 shadow-sm">
                  {Object.keys(outcomeDatasets).map((key) => {
                    const typedKey = key as keyof typeof outcomeDatasets;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveOutcomeDataset(typedKey)}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
                          activeOutcomeDataset === typedKey
                            ? "bg-[#1E88E5] text-white"
                            : "text-[#0B5FA5] hover:scale-[1.02] hover:shadow-sm",
                        )}
                      >
                        {outcomeDatasets[typedKey].label}
                      </button>
                    );
                  })}
                </div>
              </div>

                <ClinicalOutcomesCharts selectedOutcome={selectedOutcome} />
            </motion.div>
          </div>
        </section>

        <section id="timeline" className="scroll-mt-40 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Oncology Timeline</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Key milestones in building a comprehensive, high-performance oncology ecosystem.
              </p>
            </motion.div>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-2"
            >
              {timeline.map((item) => (
                <motion.li
                  key={item.year}
                  variants={fadeUp}
                  className="rounded-2xl bg-[#F8FBFF] p-6 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E88E5]">{item.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#0B5FA5]">{item.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-gray-600">{item.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section id="clinical-team" className="scroll-mt-40 bg-[#F5F9FF] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Clinical Team</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Dedicated specialists across medical, radiation, and surgical oncology working as one coordinated team.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {doctors.map((doctor) => (
                <motion.article
                  key={doctor.name}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B5FA5]/75 via-[#0B5FA5]/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-4 bottom-4 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button size="sm" className="bg-[#E53935] hover:bg-[#cb2f2b]" asChild>
                        <Link href="tel:+92518464646">Book</Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href="/doctors/dr-ayesha-khan">View Profile</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#0B5FA5]">{doctor.name}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-gray-600">{doctor.specialty}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-40 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Patient Testimonials</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Voices that reflect trust, safety, and confidence in our oncology journey.
              </p>
            </motion.div>

            <motion.article
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="mt-10 grid overflow-hidden rounded-2xl bg-[#F8FBFF] shadow-sm md:grid-cols-[1fr_1.1fr]"
            >
              <div className="relative min-h-[320px]">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B5FA5]/45 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-2xl font-semibold leading-relaxed text-[#0B5FA5]">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">{testimonials[activeTestimonial].author}</p>
                <div className="mt-7 flex gap-2">
                  {testimonials.map((item, idx) => (
                    <button
                      key={item.author}
                      type="button"
                      onClick={() => setActiveTestimonial(idx)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        idx === activeTestimonial ? "w-8 bg-[#1E88E5]" : "w-2.5 bg-blue-200 hover:bg-blue-300",
                      )}
                      aria-label={`Show testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="faq" className="scroll-mt-40 bg-[#F5F9FF] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-semibold text-[#1E88E5] md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Clear answers to common oncology concerns before your first consultation.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 space-y-4"
            >
              {faqItems.map((item) => (
                <motion.details
                  key={item.q}
                  variants={fadeUp}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-[#0B5FA5]">
                    {item.q}
                    <ChevronRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">{item.a}</p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="cta" className="scroll-mt-40 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&fm=webp&w=2200&q=80"
                alt="South Asian hospital care team guiding oncology patients in reception area"
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B5FA5]/92 via-[#0B5FA5]/74 to-[#1E88E5]/52" />
              <div className="relative px-8 py-16 text-white md:px-12 md:py-20">
                <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">Talk to Our Oncology Team Today</h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
                  Book a consultation for diagnosis review, second opinion, or treatment planning with our specialists.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#E53935] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#cb2f2b] hover:shadow-xl"
                    asChild
                  >
                    <Link href="tel:+92518464646" className="inline-flex items-center gap-2">
                      <CalendarCheck2 className="h-4 w-4" /> Schedule Consultation
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-[#1E88E5] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                    asChild
                  >
                    <Link href="tel:+92518464646" className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" /> +92 51 8464646
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OncologyStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://www.shifa.com.pk/#organization",
        name: "Shifa International Hospitals",
        url: "https://www.shifa.com.pk",
        telephone: "+92-51-8464646",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pitras Bukhari Road, H-8/4",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          addressCountry: "PK",
        },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": "https://www.shifa.com.pk/specialities/oncology#specialty",
        name: "Oncology",
      },
      {
        "@type": "MedicalClinic",
        name: "Shifa Oncology Department",
        url: "https://www.shifa.com.pk/specialities/oncology",
        medicalSpecialty: {
          "@id": "https://www.shifa.com.pk/specialities/oncology#specialty",
        },
        parentOrganization: {
          "@id": "https://www.shifa.com.pk/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.shifa.com.pk/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialities",
            item: "https://www.shifa.com.pk/specialities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Oncology",
            item: "https://www.shifa.com.pk/specialities/oncology",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
