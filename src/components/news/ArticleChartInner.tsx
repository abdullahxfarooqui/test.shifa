"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ReactNode } from "react";

import type { ArticleChart as ArticleChartType } from "@/data/article-enhancements";

type ArticleChartInnerProps = {
  chart: ArticleChartType;
};

const PIE_COLORS = ["#0B5FA5", "#E53935", "#22C55E", "#F59E0B", "#8B5CF6", "#06B6D4", "#64748B"];

export default function ArticleChartInner({ chart }: ArticleChartInnerProps) {
  const formatValue = (value: any): ReactNode => {
    if (value === null || value === undefined) return "";
    return `${value}${chart.unit ? ` ${chart.unit}` : ""}`;
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-bold text-slate-900">{chart.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{chart.description}</p>

      <div className="mt-4 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === "line" ? (
            <LineChart data={chart.data} margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={formatValue} />
              <Legend />
              <Line type="monotone" dataKey="value" name={chart.legendLabel} stroke="#0B5FA5" strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
          ) : null}

          {chart.type === "bar" ? (
            <BarChart data={chart.data} margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={formatValue} />
              <Legend />
              <Bar dataKey="value" name={chart.legendLabel} fill="#0B5FA5" radius={[6, 6, 0, 0]} />
            </BarChart>
          ) : null}

          {chart.type === "horizontal-bar" ? (
            <BarChart data={chart.data} layout="vertical" margin={{ left: 24, right: 20, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={130} />
              <Tooltip formatter={formatValue} />
              <Legend />
              <Bar dataKey="value" name={chart.legendLabel} fill="#0B5FA5" radius={[0, 6, 6, 0]} />
            </BarChart>
          ) : null}

          {chart.type === "pie" ? (
            <PieChart margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
              <Tooltip formatter={formatValue} />
              <Legend />
              <Pie
                data={chart.data}
                nameKey="name"
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={108}
                label
              >
                {chart.data.map((entry, index) => (
                  <Cell key={`${entry.name}-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          ) : null}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
