"use client";

import Link from "next/link";
import { useState } from "react";
import { healthArticles } from "@/data/health-articles";
import type { ArticleCategory } from "@/types/shifa";

const CATEGORIES: { slug: ArticleCategory | "all"; label: string; icon: string }[] = [
  { slug: "all", label: "All Topics", icon: "🏥" },
  { slug: "cardiology", label: "Heart", icon: "❤️" },
  { slug: "neurology", label: "Brain & Nerves", icon: "🧠" },
  { slug: "diabetes", label: "Diabetes", icon: "🩸" },
  { slug: "womens-health", label: "Women's Health", icon: "🌸" },
  { slug: "orthopaedics", label: "Bones & Joints", icon: "🦴" },
  { slug: "paediatrics", label: "Children", icon: "👶" },
  { slug: "mental-health", label: "Mental Health", icon: "🧘" },
  { slug: "nutrition", label: "Nutrition", icon: "🥗" },
  { slug: "first-aid", label: "First Aid", icon: "🚑" },
  { slug: "symptoms", label: "Symptoms", icon: "🔍" },
];

const QUICK_TOOLS = [
  { label: "BMI Calculator", href: "/health-library/calculators#bmi", icon: "⚖️" },
  { label: "Blood Pressure Risk", href: "/health-library/calculators#bp", icon: "💓" },
  { label: "Diabetes Risk Score", href: "/health-library/calculators#diabetes", icon: "🩺" },
  { label: "Calorie Needs", href: "/health-library/calculators#calories", icon: "🔥" },
];

const CATEGORY_IMAGES: Record<string, string> = {
  cardiology: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=70",
  neurology: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=70",
  diabetes: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=70",
  "womens-health": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=70",
  orthopaedics: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=70",
  paediatrics: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=70",
  "mental-health": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=70",
  nutrition: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=70",
  "first-aid": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=70",
  symptoms: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=70",
  default: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=70",
};

function getArticleImage(category: string): string {
  return CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES.default;
}

export function HealthLibraryHub() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "all">("all");
  const [search, setSearch] = useState("");

  const featured = healthArticles[0];

  const filtered = healthArticles.slice(1).filter((a) => {
    const matchCat = activeCategory === "all" || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      q === "" ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#07203b] to-[#0b5fa5] px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
          Shifa Health Library
        </p>
        <h1 className="text-4xl font-black text-white sm:text-5xl">Your Guide to Better Health</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-blue-100">
          Evidence-based health information from Shifa's clinical specialists — in plain language.
        </p>
        {/* Search */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search articles — diabetes, heart attack, PCOS…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border-0 py-3 pl-12 pr-5 text-sm shadow-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Quick tools */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick tools:</span>
          {QUICK_TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#0b5fa5] shadow-sm ring-1 ring-slate-200 transition hover:bg-[#0b5fa5] hover:text-white"
            >
              <span>{t.icon}</span> {t.label}
            </Link>
          ))}
          <Link
            href="/health-library/interviews"
            className="ml-auto text-sm font-semibold text-[#0b5fa5] hover:underline"
          >
            Doctor Interviews →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Featured article */}
        {search === "" && activeCategory === "all" && (
          <div className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#e53935]">Featured Article</p>
            <Link href={`/health-library/blogs/${featured.slug}`} className="group">
              <div className="grid overflow-hidden rounded-2xl shadow-lg lg:grid-cols-[1.2fr_1fr]">
                <div className="relative min-h-[220px]">
                  <img
                    src={getArticleImage(featured.category)}
                    alt={featured.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#e53935] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center bg-[#07203b] p-8">
                  <p className="text-xs text-blue-300">{featured.readingTimeMinutes} min read · {featured.author}</p>
                  <h2 className="mt-3 text-2xl font-bold leading-snug text-white group-hover:text-blue-200 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm text-blue-100">{featured.excerpt}</p>
                  <span className="mt-5 self-start rounded-full bg-[#e53935] px-5 py-2 text-sm font-semibold text-white">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => { setActiveCategory(c.slug); setSearch(""); }}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === c.slug
                  ? "bg-[#0b5fa5] text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Article grid */}
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-slate-500">No articles found. Try a different search or category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <Link
                key={article.id}
                href={`/health-library/blogs/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl shadow-md ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getArticleImage(article.category)}
                    alt={article.title}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold capitalize text-[#0b5fa5]">
                    {article.category.replace(/-/g, " ")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs text-slate-400">{article.readingTimeMinutes} min read</p>
                  <h3 className="text-base font-bold leading-snug text-slate-800 group-hover:text-[#0b5fa5]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-500">{article.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA bar */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#07203b] to-[#0b5fa5] px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white">Browse More Health Resources</h2>
          <p className="mt-2 text-blue-100">In-depth patient guides, doctor interviews, and health calculators</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/health-library/patient-guide" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0b5fa5] hover:bg-blue-50">
              Patient Guide A–Z
            </Link>
            <Link href="/health-library/interviews" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0b5fa5] hover:bg-blue-50">
              Doctor Interviews
            </Link>
            <Link href="/health-library/calculators" className="rounded-full border border-white px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Health Calculators
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
