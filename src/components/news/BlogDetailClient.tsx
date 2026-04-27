"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ArticleChart } from "@/components/news/ArticleChart";
import type { ArticleEnhancement } from "@/data/article-enhancements";
import type { Article } from "@/types/shifa";

type BlogDetailClientProps = {
  article: Article;
  enhancement?: ArticleEnhancement;
};

type ContentSection = {
  id: string;
  title: string;
  lines: string[];
};

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function toSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function parseSections(content: string): ContentSection[] {
  const lines = content.split("\n");
  const sections: ContentSection[] = [];

  let currentTitle = "Overview";
  let currentLines: string[] = [];

  const flush = () => {
    if (currentLines.length > 0) {
      sections.push({ id: toSectionId(currentTitle), title: currentTitle, lines: currentLines });
      currentLines = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      currentTitle = line.slice(3).trim();
      continue;
    }

    currentLines.push(line);
  }

  flush();
  return sections;
}

function renderTable(block: string, key: string) {
  const rows = block.split("\n").filter((row) => row.trim() && !/^\|[-| ]+\|$/.test(row.trim()));

  return (
    <div key={key} className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, index) => {
            const cells = row
              .split("|")
              .map((cell) => cell.trim())
              .filter(Boolean);

            return (
              <tr key={`${key}-${index}`} className={index === 0 ? "bg-slate-50 font-semibold" : "border-t border-slate-200"}>
                {cells.map((cell, cellIndex) => (
                  <td key={`${key}-${index}-${cellIndex}`} className="px-4 py-2 text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function renderSectionLines(lines: string[], sectionId: string) {
  const blocks = lines.join("\n").split("\n\n").map((block) => block.trim()).filter(Boolean);

  const elements: React.ReactNode[] = [];

  blocks.forEach((block, index) => {
    const key = `${sectionId}-${index}`;

    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={key} className="text-xl font-semibold text-slate-900">
          {block.replace(/^###\s+/, "")}
        </h3>,
      );
      return;
    }

    if (block.startsWith("|")) {
      elements.push(renderTable(block, key));
      return;
    }

    if (block.split("\n").every((line) => line.startsWith("- "))) {
      elements.push(
        <ul key={key} className="list-disc space-y-2 pl-5 text-slate-700">
          {block.split("\n").map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{item.replace(/^-\s+/, "")}</li>
          ))}
        </ul>,
      );
      return;
    }

    elements.push(
      <p key={key} className="leading-relaxed text-slate-700">
        {renderInlineMarkdown(block)}
      </p>,
    );
  });

  return elements;
}

export function BlogDetailClient({ article, enhancement }: BlogDetailClientProps) {
  const sections = useMemo(() => parseSections(article.content), [article.content]);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-8">
          <header className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0B5FA5]">{article.category.replace(/-/g, " ")}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{article.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
              <span>{article.author}</span>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>•</span>
              <span>{article.readingTimeMinutes} min read</span>
            </div>
            <p className="mt-4 text-lg text-slate-700">{article.excerpt}</p>
          </header>

          {enhancement?.keyStats?.length ? (
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {enhancement.keyStats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-2xl font-bold text-[#0B5FA5]">{stat.value}</p>
                  <p className="mt-1 font-semibold text-slate-900">{stat.label}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.description}</p>
                </motion.article>
              ))}
            </section>
          ) : null}

          {enhancement?.chart ? <ArticleChart chart={enhancement.chart} /> : null}

          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                {renderSectionLines(section.lines, section.id)}
              </section>
            ))}
          </div>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">Shifa International Hospitals</p>
            <p className="mt-1 text-sm text-slate-600">Pitras Bukhari Road, H-8/4, Islamabad · 051-846-4646</p>
            <p className="mt-3 text-xs text-slate-500">
              Medical content reviewed April 2026. Educational use only; not a substitute for professional diagnosis or treatment.
            </p>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Quick Navigation</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(section.id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeSection === section.id
                      ? "bg-[#EAF4FF] font-semibold text-[#0B5FA5]"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {enhancement?.keyStats?.length ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Key Stats</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {enhancement.keyStats.map((stat) => (
                  <li key={stat.label}>
                    <span className="font-semibold text-slate-900">{stat.value}</span> {stat.label}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
