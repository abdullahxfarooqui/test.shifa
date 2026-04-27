"use client";

import { useMemo, useState } from "react";

type TabId = "bmi" | "bp-risk" | "diabetes-risk" | "heart-age" | "calorie";

type Tab = {
  id: TabId;
  label: string;
  description: string;
};

const tabs: Tab[] = [
  { id: "bmi", label: "BMI Calculator", description: "Calculate your body mass index." },
  { id: "bp-risk", label: "Blood Pressure Risk", description: "Assess your hypertension risk." },
  { id: "diabetes-risk", label: "Diabetes Risk Score", description: "Screen for type 2 diabetes risk." },
  { id: "heart-age", label: "Heart Age Calculator", description: "Estimate your cardiovascular age." },
  { id: "calorie", label: "Calorie Calculator", description: "Estimate your daily calorie needs." },
];

const bmiRanges = [
  {
    label: "Underweight",
    min: Number.NEGATIVE_INFINITY,
    max: 18.5,
    display: "Below 18.5",
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    ring: "ring-cyan-200",
  },
  {
    label: "Healthy range",
    min: 18.5,
    max: 25,
    display: "18.5 - 24.9",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
  },
  {
    label: "Overweight",
    min: 25,
    max: 30,
    display: "25.0 - 29.9",
    color: "text-amber-700",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
  },
  {
    label: "Obesity",
    min: 30,
    max: Number.POSITIVE_INFINITY,
    display: "30.0 and above",
    color: "text-rose-700",
    bg: "bg-rose-50",
    ring: "ring-rose-200",
  },
];

const tabColors: Record<TabId, string> = {
  bmi: "from-emerald-500 to-emerald-600",
  "bp-risk": "from-red-500 to-red-600",
  "diabetes-risk": "from-amber-500 to-amber-600",
  "heart-age": "from-fuchsia-500 to-fuchsia-600",
  calorie: "from-sky-500 to-sky-600",
};

function bmiCategory(value: number) {
  if (value < 18.5) return "Underweight";
  if (value < 25) return "Healthy range";
  if (value < 30) return "Overweight";
  return "Obesity";
}

function isInBmiRange(value: number, min: number, max: number) {
  return value >= min && value < max;
}

function bmiResultStyle(value: number) {
  if (value < 18.5) return { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" };
  if (value < 25) return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" };
  if (value < 30) return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" };
  return { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" };
}

function bpRiskLabel(systolic: number, diastolic: number) {
  if (systolic >= 180 || diastolic >= 120) return "Emergency range: seek urgent medical care.";
  if (systolic >= 140 || diastolic >= 90) return "Very high risk (stage 2 hypertension).";
  if (systolic >= 130 || diastolic >= 80) return "High risk (stage 1 hypertension).";
  if (systolic >= 120 && diastolic < 80) return "Moderate risk (elevated blood pressure).";
  return "Low risk (normal range).";
}

function diabetesRiskScore(params: {
  age: number;
  bmi: number;
  familyHistory: boolean;
  inactive: boolean;
  highBpHistory: boolean;
}) {
  let score = 0;

  if (params.age >= 65) score += 4;
  else if (params.age >= 55) score += 3;
  else if (params.age >= 45) score += 2;

  if (params.bmi >= 30) score += 2;
  else if (params.bmi >= 25) score += 1;

  if (params.familyHistory) score += 2;
  if (params.inactive) score += 1;
  if (params.highBpHistory) score += 1;

  if (score >= 7) return { score, label: "High risk" };
  if (score >= 4) return { score, label: "Moderate risk" };
  return { score, label: "Low risk" };
}

function calculateHeartAgeData(params: {
  age: number;
  systolic: number;
  smoker: boolean;
  diabetes: boolean;
  sex: "male" | "female";
}) {
  // Screening-only approximation tuned to produce stable, monotonic risk output.
  const systolicOffset = (params.systolic - 110) / 4;
  const smokingOffset = params.smoker ? 6 : 0;
  const diabetesOffset = params.diabetes ? 7 : 0;
  const sexOffset = params.sex === "male" ? 1 : 0;

  const delta = systolicOffset + smokingOffset + diabetesOffset + sexOffset;
  const estimated = params.age + delta;

  return {
    estimated: Math.min(90, Math.max(18, Math.round(estimated))),
    offsets: {
      bloodPressure: Math.round(systolicOffset * 10) / 10,
      smoking: smokingOffset,
      diabetes: diabetesOffset,
      sex: sexOffset,
    },
  };
}

function heartAgeLabel(delta: number) {
  if (delta <= -3) return { label: "Lower than your actual age", style: "text-emerald-700 bg-emerald-50 border-emerald-200" };
  if (delta <= 2) return { label: "Close to your actual age", style: "text-sky-700 bg-sky-50 border-sky-200" };
  if (delta <= 7) return { label: "Higher than your actual age", style: "text-amber-700 bg-amber-50 border-amber-200" };
  return { label: "Significantly higher than your actual age", style: "text-rose-700 bg-rose-50 border-rose-200" };
}

function signedYears(value: number) {
  if (value > 0) return `+${value} years`;
  if (value < 0) return `${value} years`;
  return "0 years";
}

function calorieNeeds(params: {
  sex: "male" | "female";
  weightKg: number;
  heightCm: number;
  age: number;
  activity: "sedentary" | "light" | "moderate" | "active" | "very-active";
}) {
  const bmr =
    params.sex === "male"
      ? 10 * params.weightKg + 6.25 * params.heightCm - 5 * params.age + 5
      : 10 * params.weightKg + 6.25 * params.heightCm - 5 * params.age - 161;

  const activityMap: Record<typeof params.activity, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    "very-active": 1.9,
  };

  return Math.round(bmr * activityMap[params.activity]);
}

export function HealthCalculators() {
  const [active, setActive] = useState<TabId>("bmi");

  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);

  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  const [age, setAge] = useState(35);
  const [familyHistory, setFamilyHistory] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [highBpHistory, setHighBpHistory] = useState(false);

  const [heartSex, setHeartSex] = useState<"male" | "female">("male");
  const [smoker, setSmoker] = useState(false);
  const [diabetes, setDiabetes] = useState(false);

  const [calSex, setCalSex] = useState<"male" | "female">("male");
  const [calWeight, setCalWeight] = useState(70);
  const [calHeight, setCalHeight] = useState(170);
  const [calAge, setCalAge] = useState(35);
  const [activity, setActivity] = useState<"sedentary" | "light" | "moderate" | "active" | "very-active">("moderate");

  const bmi = useMemo(() => {
    const m = heightCm / 100;
    if (!m || m <= 0) return 0;
    return weightKg / (m * m);
  }, [weightKg, heightCm]);

  const diabetesRisk = useMemo(() => {
    return diabetesRiskScore({ age, bmi, familyHistory, inactive, highBpHistory });
  }, [age, bmi, familyHistory, inactive, highBpHistory]);

  const heartAgeData = useMemo(() => {
    return calculateHeartAgeData({ age, systolic, smoker, diabetes, sex: heartSex });
  }, [age, systolic, smoker, diabetes, heartSex]);

  const heartAge = heartAgeData.estimated;

  const heartAgeDelta = heartAge - age;
  const heartAgeStatus = heartAgeLabel(heartAgeDelta);

  const calories = useMemo(() => {
    return calorieNeeds({ sex: calSex, weightKg: calWeight, heightCm: calHeight, age: calAge, activity });
  }, [calSex, calWeight, calHeight, calAge, activity]);

  const bmiStyle = bmiResultStyle(bmi);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === tab.id
                ? `bg-gradient-to-r ${tabColors[tab.id]} text-white shadow-sm`
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="mb-5 text-sm text-slate-600">{tabs.find((tab) => tab.id === active)?.description}</p>

      {active === "bmi" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Weight (kg)
            <input type="number" min={1} value={weightKg} onChange={(event) => setWeightKg(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Height (cm)
            <input type="number" min={1} value={heightCm} onChange={(event) => setHeightCm(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <div className={`md:col-span-2 rounded-xl border p-4 transition-colors ${bmiStyle.bg} ${bmiStyle.border}`}>
            <p className="text-sm text-slate-600">BMI</p>
            <p className={`text-3xl font-bold ${bmiStyle.text}`}>{bmi.toFixed(1)}</p>
            <p className={`mt-1 text-sm font-medium ${bmiStyle.text}`}>{bmiCategory(bmi)}</p>
          </div>

          <div className="md:col-span-2 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">BMI health ranges</p>
            <div className="mt-3 space-y-2 text-sm">
              {bmiRanges.map((range) => {
                const activeRange = isInBmiRange(bmi, range.min, range.max);
                return (
                  <div
                    key={range.label}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                      activeRange
                        ? `${range.bg} ${range.color} ring-1 ${range.ring} scale-[1.01]`
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="font-medium">{range.label}</span>
                    <span>{range.display}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {active === "bp-risk" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Systolic (mmHg)
            <input type="number" min={70} value={systolic} onChange={(event) => setSystolic(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Diastolic (mmHg)
            <input type="number" min={40} value={diastolic} onChange={(event) => setDiastolic(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <div className="md:col-span-2 rounded-xl bg-[#f7fbff] p-4">
            <p className="text-sm text-slate-600">Result</p>
            <p className="text-lg font-semibold text-slate-900">{bpRiskLabel(systolic, diastolic)}</p>
          </div>
        </div>
      ) : null}

      {active === "diabetes-risk" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Age
            <input type="number" min={1} value={age} onChange={(event) => setAge(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={familyHistory} onChange={(event) => setFamilyHistory(event.target.checked)} />
              Family history
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={inactive} onChange={(event) => setInactive(event.target.checked)} />
              Physically inactive
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={highBpHistory} onChange={(event) => setHighBpHistory(event.target.checked)} />
              High BP history
            </label>
          </div>
          <div className="md:col-span-2 rounded-xl bg-[#f7fbff] p-4">
            <p className="text-sm text-slate-600">Risk score</p>
            <p className="text-3xl font-bold text-slate-900">{diabetesRisk.score}</p>
            <p className="mt-1 text-sm font-medium text-[#0b5fa5]">{diabetesRisk.label}</p>
          </div>
        </div>
      ) : null}

      {active === "heart-age" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Age
            <input type="number" min={18} value={age} onChange={(event) => setAge(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Systolic (mmHg)
            <input type="number" min={70} value={systolic} onChange={(event) => setSystolic(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Sex
            <select value={heartSex} onChange={(event) => setHeartSex(event.target.value as "male" | "female")} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={smoker} onChange={(event) => setSmoker(event.target.checked)} />
              Smoker
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={diabetes} onChange={(event) => setDiabetes(event.target.checked)} />
              Diabetes
            </label>
          </div>
          <div className="md:col-span-2 rounded-xl bg-[#f7fbff] p-4">
            <p className="text-sm text-slate-600">Estimated heart age (screening)</p>
            <p className="text-3xl font-bold text-slate-900">{heartAge} years</p>
            <p className="mt-1 text-sm text-slate-600">
              Actual age: {age} years {heartAgeDelta === 0 ? "(same)" : heartAgeDelta > 0 ? `( +${heartAgeDelta} )` : `( ${heartAgeDelta} )`}
            </p>
            <div className={`mt-3 inline-flex rounded-lg border px-3 py-1 text-xs font-semibold ${heartAgeStatus.style}`}>
              {heartAgeStatus.label}
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Why this changed</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Blood pressure effect: {signedYears(heartAgeData.offsets.bloodPressure)}</li>
                <li>Smoking effect: {signedYears(heartAgeData.offsets.smoking)}</li>
                <li>Diabetes effect: {signedYears(heartAgeData.offsets.diabetes)}</li>
                <li>Sex effect: {signedYears(heartAgeData.offsets.sex)}</li>
              </ul>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Based on age, systolic blood pressure, sex, smoking, and diabetes inputs.
            </p>
          </div>
        </div>
      ) : null}

      {active === "calorie" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Sex
            <select value={calSex} onChange={(event) => setCalSex(event.target.value as "male" | "female")} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="text-sm font-medium text-slate-700">
            Age
            <input type="number" min={1} value={calAge} onChange={(event) => setCalAge(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Weight (kg)
            <input type="number" min={1} value={calWeight} onChange={(event) => setCalWeight(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Height (cm)
            <input type="number" min={1} value={calHeight} onChange={(event) => setCalHeight(Number(event.target.value))} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            Activity level
            <select value={activity} onChange={(event) => setActivity(event.target.value as typeof activity)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3">
              <option value="sedentary">Sedentary</option>
              <option value="light">Light activity</option>
              <option value="moderate">Moderate activity</option>
              <option value="active">Active</option>
              <option value="very-active">Very active</option>
            </select>
          </label>
          <div className="md:col-span-2 rounded-xl bg-[#f7fbff] p-4">
            <p className="text-sm text-slate-600">Estimated maintenance calories</p>
            <p className="text-3xl font-bold text-slate-900">{calories} kcal/day</p>
          </div>
        </div>
      ) : null}

      <p className="mt-6 text-xs text-slate-500">
        These calculators are for awareness and educational screening only. They do not replace medical diagnosis.
      </p>
    </div>
  );
}
