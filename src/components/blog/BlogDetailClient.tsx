"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

import type { Article } from "@/types/shifa";
import type { ArticleEnhancement } from "@/data/article-enhancements";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderInline(text: string) {
  if (!text.includes("**")) {
    return text;
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

type ContentBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; body?: string }
  | { type: "paragraph"; text: string }
  | { type: "highlight"; label: string; body: string; number?: string }
  | { type: "numbered-item"; num: string; label: string; body: string }
  | { type: "table"; rows: string[][] }
  | { type: "numbered-list"; items: string[] }
  | { type: "bullet-list"; items: string[] }
  | { type: "faq"; question: string; answer: string };

function parseContent(content: string): { blocks: ContentBlock[]; faqs: ContentBlock[] } {
  const allBlocks: ContentBlock[] = [];
  const faqs: ContentBlock[] = [];

  const rawBlocks = content.split(/\n\n+/);

  for (const raw of rawBlocks) {
    const trimmed = raw.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## Frequently Asked Questions")) {
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3).trim();
      allBlocks.push({ type: "h2", text, id: slugify(text) });
      continue;
    }

    if (trimmed.startsWith("### ")) {
      const lines = trimmed.split("\n");
      const text = lines[0].slice(4).trim();
      const body = lines.slice(1).join("\n").trim();
      allBlocks.push({ type: "h3", text, body: body || undefined });
      continue;
    }

    if (trimmed.startsWith("|")) {
      const rows = trimmed
        .split("\n")
        .filter((r) => r.trim() && !r.match(/^\|[-| ]+\|$/))
        .map((r) =>
          r
            .split("|")
            .filter((_, i, a) => i > 0 && i < a.length - 1)
            .map((c) => c.trim()),
        );
      allBlocks.push({ type: "table", rows });
      continue;
    }

    if (trimmed.match(/^\*\*Q:/)) {
      const lines = trimmed.split("\n");
      const question = lines[0].replace(/^\*\*Q:\s*/, "").replace(/\*\*$/, "").trim();
      const answer = lines.slice(1).join(" ").trim();
      faqs.push({ type: "faq", question, answer });
      continue;
    }

    const numberedItemMatch = trimmed.match(/^\*\*(\d+)\.\s+(.+?)\*\*:\s*([\s\S]*)/);
    if (numberedItemMatch) {
      allBlocks.push({
        type: "numbered-item",
        num: numberedItemMatch[1],
        label: numberedItemMatch[2],
        body: numberedItemMatch[3].trim(),
      });
      continue;
    }

    const highlightMatch = trimmed.match(/^\*\*([^*]+)\*\*[:\s—]*([\s\S]*)/);
    if (highlightMatch && !trimmed.includes("?**")) {
      allBlocks.push({
        type: "highlight",
        label: highlightMatch[1],
        body: highlightMatch[2].trim(),
      });
      continue;
    }

    if (trimmed.match(/^\d+\.\s/)) {
      const items = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s+/, "").trim());
      allBlocks.push({ type: "numbered-list", items });
      continue;
    }

    if (trimmed.match(/^[-•]\s/)) {
      const items = trimmed.split("\n").map((l) => l.replace(/^[•-]\s+/, "").trim());
      allBlocks.push({ type: "bullet-list", items });
      continue;
    }

    allBlocks.push({ type: "paragraph", text: trimmed });
  }

  const mainBlocks = allBlocks.filter((b) => b.type !== "faq");
  return { blocks: mainBlocks, faqs };
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  if (block.type === "h2") {
    return (
      <h2 id={block.id} className="scroll-mt-20 text-2xl font-bold text-slate-900 mt-8 first:mt-0">
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-slate-900">{block.text}</h3>
        {block.body && <p className="mt-2 text-slate-700 leading-relaxed">{renderInline(block.body)}</p>}
      </div>
    );
  }

  if (block.type === "paragraph") {
    return <p className="mt-4 text-slate-700 leading-relaxed">{renderInline(block.text)}</p>;
  }

  if (block.type === "highlight") {
    return (
      <div className="mt-4 rounded-lg border-l-4 border-[#C8102E] bg-red-50/50 p-4">
        <p className="font-semibold text-slate-900">{renderInline(block.label)}</p>
        {block.body && <p className="mt-2 text-sm text-slate-700 leading-relaxed">{renderInline(block.body)}</p>}
      </div>
    );
  }

  if (block.type === "numbered-item") {
    return (
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 flex gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
          {block.num}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">{block.label}</p>
          {block.body && <p className="mt-1 text-sm text-slate-700 leading-relaxed">{renderInline(block.body)}</p>}
        </div>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className={ri === 0 ? "bg-slate-100 font-semibold" : "border-t border-slate-200"}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "numbered-list") {
    return (
      <ol className="mt-4 space-y-2 pl-6 text-slate-700">
        {block.items.map((item, i) => (
          <li key={i} className="list-decimal leading-relaxed">
            {renderInline(item)}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "bullet-list") {
    return (
      <ul className="mt-4 space-y-2 pl-6 text-slate-700">
        {block.items.map((item, i) => (
          <li key={i} className="list-disc leading-relaxed">
            {renderInline(item)}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8102E] to-[#1B4F72] origin-left z-50"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}

function KeyStatsCard({ stat, index }: { stat: { value: string; label: string; description: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="rounded-lg border border-slate-200 bg-white p-6 text-center"
    >
      <motion.p
        className="text-3xl font-bold text-[#C8102E]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
      >
        {stat.value}
      </motion.p>
      <p className="mt-2 font-semibold text-slate-900">{stat.label}</p>
      <p className="mt-1 text-xs text-slate-600">{stat.description}</p>
    </motion.div>
  );
}

function FAQAccordion({ faqs }: { faqs: ContentBlock[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 space-y-3">
      <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          if (faq.type !== "faq") return null;
          return (
            <motion.div
              key={i}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={20} className="text-slate-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-slate-200 px-6 py-4 text-slate-700 bg-slate-50/50"
                  >
                    {renderInline(faq.answer)}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ArticleChart({ enhancement }: { enhancement: ArticleEnhancement }) {
  if (!enhancement.chart) return null;

  const { chart } = enhancement;
  const colors = chart.type === "pie" ? ["#C8102E", "#1B4F72", "#2E86C1", "#6C757D", "#FFC107", "#28A745"] : ["#C8102E"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900">{chart.title}</h2>
      <p className="mt-2 text-slate-600">{chart.description}</p>

      <div className="mt-8 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === "line" && (
            <LineChart data={chart.data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E4E2DC" />
              <XAxis dataKey="name" stroke="#787878" style={{ fontSize: 12 }} />
              <YAxis stroke="#787878" style={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAFAF8",
                  border: "1px solid #E4E2DC",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`${value}${chart.unit ? " " + chart.unit : ""}`, chart.legendLabel]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#C8102E"
                strokeWidth={3}
                dot={{ fill: "#C8102E", r: 5 }}
                name={chart.legendLabel}
              />
            </LineChart>
          )}

          {chart.type === "bar" && (
            <BarChart data={chart.data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E4E2DC" />
              <XAxis dataKey="name" stroke="#787878" style={{ fontSize: 12 }} />
              <YAxis stroke="#787878" style={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAFAF8",
                  border: "1px solid #E4E2DC",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`${value}${chart.unit ? " " + chart.unit : ""}`, chart.legendLabel]}
              />
              <Legend />
              <Bar dataKey="value" fill="#C8102E" name={chart.legendLabel} radius={[8, 8, 0, 0]} />
            </BarChart>
          )}

          {chart.type === "horizontal-bar" && (
            <BarChart
              data={chart.data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 200, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E4E2DC" />
              <XAxis type="number" stroke="#787878" style={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" stroke="#787878" style={{ fontSize: 11 }} width={190} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAFAF8",
                  border: "1px solid #E4E2DC",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`${value}${chart.unit ? " " + chart.unit : ""}`, chart.legendLabel]}
              />
              <Bar dataKey="value" fill="#C8102E" name={chart.legendLabel} radius={[0, 8, 8, 0]} />
            </BarChart>
          )}

          {chart.type === "pie" && (
            <PieChart margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
              <Pie
                data={chart.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={120}
                fill="#C8102E"
                dataKey="value"
              >
                {chart.data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}${chart.unit || "%"}`, chart.legendLabel]}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function TableOfContents({ headings }: { headings: Array<{ id: string; text: string }> }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20px 0px -80% 0px" },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="hidden lg:block sticky top-28 rounded-lg border border-slate-200 bg-white p-6"
    >
      <p className="font-semibold text-slate-900 mb-4">On this page</p>
      <nav className="space-y-2 text-sm">
        {headings.map(({ id, text }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block px-3 py-2 rounded-md transition-colors ${
              activeId === id
                ? "bg-red-100 text-[#C8102E] font-medium"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {text}
          </a>
        ))}
      </nav>
    </motion.div>
  );
}

export function BlogDetailClient({
  article,
  enhancement,
}: {
  article: Article;
  enhancement: ArticleEnhancement;
}) {
  const { blocks, faqs } = useMemo(() => parseContent(article.content), [article.content]);
  const headings = blocks.filter((b) => b.type === "h2") as Array<{ type: "h2"; text: string; id: string }>;

  return (
    <>
      <ReadingProgress />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#C8102E]">
            {article.category.replace(/-/g, " ")}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>{article.author}</span>
            <span>·</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-PK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">{article.excerpt}</p>
        </motion.div>

        {/* Key stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enhancement.keyStats.map((stat, i) => (
            <KeyStatsCard key={i} stat={stat} index={i} />
          ))}
        </div>

        <hr className="my-12 border-slate-200" />

        {/* Main content + TOC */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {blocks.map((block, i) => (
                <ContentRenderer key={i} block={block} />
              ))}
            </div>

            {/* Chart */}
            <ArticleChart enhancement={enhancement} />

            {/* FAQ */}
            {faqs.length > 0 && <FAQAccordion faqs={faqs} />}
          </div>

          {/* Sticky TOC */}
          <div>
            <TableOfContents headings={headings} />
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
        >
          <p className="text-sm font-semibold text-slate-900">Shifa International Hospitals</p>
          <p className="mt-2 text-slate-600">
            Pitras Bukhari Road, H-8/4, Islamabad
            <br />
            <span className="font-semibold">Call:</span> 051-846-4646 | <span className="font-semibold">Emergency:</span> 24/7
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Medical content reviewed April 2026. This article is for educational purposes only and does not replace
            professional medical advice, diagnosis, or treatment. For health concerns, consult a qualified healthcare
            professional.
          </p>
        </motion.div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}
