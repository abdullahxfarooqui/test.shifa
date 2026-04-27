"use client";

import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type OutcomeDataset = {
  recoveryTrend: Array<{ period: string; value: number }>;
  successRates: Array<{ name: string; value: number }>;
  caseDistribution: Array<{ name: string; value: number; color: string }>;
};

export default function ClinicalOutcomesCharts({
  selectedOutcome,
}: {
  selectedOutcome: OutcomeDataset;
}) {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="rounded-2xl border border-blue-100/80 bg-white/85 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
      >
        <h3 className="text-lg font-semibold text-[#0B5FA5]">Recovery Trends</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedOutcome.recoveryTrend}>
              <XAxis dataKey="period" stroke="#8AA2BC" tickLine={false} axisLine={false} />
              <YAxis domain={[65, 95]} stroke="#8AA2BC" tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ stroke: "#1E88E5", strokeWidth: 1, strokeDasharray: "4 4" }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 12px 24px rgba(2, 6, 23, 0.08)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1E88E5"
                strokeWidth={3}
                dot={{ r: 4, fill: "#0B5FA5" }}
                activeDot={{ r: 6, fill: "#E53935" }}
                isAnimationActive
                animationDuration={650}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut", delay: 0.05 }}
        className="rounded-2xl border border-blue-100/80 bg-white/85 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
      >
        <h3 className="text-lg font-semibold text-[#0B5FA5]">Success Rates</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={selectedOutcome.successRates}>
              <XAxis dataKey="name" stroke="#8AA2BC" tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} stroke="#8AA2BC" tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(30,136,229,0.08)" }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 12px 24px rgba(2, 6, 23, 0.08)",
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#0B5FA5" isAnimationActive animationDuration={650} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut", delay: 0.1 }}
        className="rounded-2xl border border-blue-100/80 bg-white/85 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
      >
        <h3 className="text-lg font-semibold text-[#0B5FA5]">Case Distribution</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 12px 24px rgba(2, 6, 23, 0.08)",
                }}
              />
              <Pie
                data={selectedOutcome.caseDistribution}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={2}
                isAnimationActive
                animationDuration={650}
              >
                {selectedOutcome.caseDistribution.map((slice) => (
                  <Cell key={slice.name} fill={slice.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.article>
    </div>
  );
}
