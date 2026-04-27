export type DataPoint = {
  name: string;
  value: number;
  value2?: number;
};

export type ArticleChart = {
  type: "line" | "bar" | "horizontal-bar" | "pie";
  title: string;
  description: string;
  data: DataPoint[];
  unit?: string;
  legendLabel: string;
  legendLabel2?: string;
};

export type KeyStat = {
  value: string;
  label: string;
  description: string;
};

export type ArticleEnhancement = {
  keyStats: KeyStat[];
  chart?: ArticleChart;
};

export const articleEnhancements: Record<string, ArticleEnhancement> = {
  "heart-attack-warning-signs-islamabad": {
    keyStats: [
      { value: "45%", label: "Silent Attacks", description: "Occur without chest pain" },
      { value: "10 min", label: "Critical Window", description: "Acting fast saves heart muscle" },
      { value: "80%", label: "Preventable", description: "Of all heart attacks" },
      { value: "#1", label: "Cause of Death", description: "In Pakistan annually" },
    ],
    chart: {
      type: "line",
      title: "Cardiovascular Disease Mortality in Pakistan (per 100,000 population)",
      description:
        "Cardiovascular disease has been the leading cause of death in Pakistan for over two decades, with mortality rates rising steadily as urbanisation, dietary changes, and sedentary lifestyles spread.",
      data: [
        { name: "2000", value: 180 },
        { name: "2005", value: 202 },
        { name: "2010", value: 224 },
        { name: "2015", value: 245 },
        { name: "2020", value: 260 },
        { name: "2025", value: 272 },
      ],
      unit: "deaths per 100k",
      legendLabel: "CVD Mortality Rate",
    },
  },

  "type-2-diabetes-prevention-management-pakistan": {
    keyStats: [
      { value: "33M+", label: "Pakistanis with Diabetes", description: "3rd highest globally" },
      { value: "58%", label: "Risk Reduction", description: "Via lifestyle changes alone" },
      { value: "50%", label: "Undiagnosed", description: "Estimated proportion unaware" },
      { value: "7.0%", label: "HbA1c Target", description: "General management goal" },
    ],
    chart: {
      type: "line",
      title: "Diabetes Prevalence in Pakistan — Adults 20–79 years (millions)",
      description:
        "Pakistan's diabetes burden has grown rapidly over 25 years, driven by urbanisation, physical inactivity, and high refined-carbohydrate diets. Prevalence is projected to continue rising without population-level intervention.",
      data: [
        { name: "2000", value: 7.5 },
        { name: "2005", value: 10.4 },
        { name: "2010", value: 14.9 },
        { name: "2015", value: 20.9 },
        { name: "2019", value: 26.7 },
        { name: "2021", value: 32.9 },
        { name: "2025", value: 37.1 },
      ],
      unit: "million adults",
      legendLabel: "Adults with Diabetes (millions)",
    },
  },

  "pcos-causes-symptoms-treatment-islamabad": {
    keyStats: [
      { value: "1 in 5", label: "Women Affected", description: "Of reproductive age in Pakistan" },
      { value: "70%", label: "Insulin Resistance", description: "Among women with PCOS" },
      { value: "75%", label: "Fertility Success", description: "With letrozole treatment" },
      { value: "10×", label: "Diabetes Risk", description: "Compared to women without PCOS" },
    ],
    chart: {
      type: "bar",
      title: "PCOS Prevalence by Age Group — Pakistani Women (%)",
      description:
        "PCOS prevalence peaks in the reproductive years between 20–34, when hormonal activity is highest. Many cases remain undiagnosed until women seek fertility evaluation.",
      data: [
        { name: "15–19", value: 8 },
        { name: "20–24", value: 18 },
        { name: "25–29", value: 22 },
        { name: "30–34", value: 20 },
        { name: "35–39", value: 14 },
        { name: "40–44", value: 9 },
        { name: "45–49", value: 5 },
      ],
      unit: "% prevalence",
      legendLabel: "Prevalence (%)",
    },
  },

  "stroke-warning-signs-act-fast-pakistan": {
    keyStats: [
      { value: "80%", label: "Preventable", description: "Of all strokes are preventable" },
      { value: "4.5 hrs", label: "tPA Window", description: "For clot-busting treatment" },
      { value: "50%", label: "Caused by HTN", description: "Hypertension drives half of strokes" },
      { value: "1 in 10", label: "TIA → Stroke", description: "Within 48 hours of a mini-stroke" },
    ],
    chart: {
      type: "horizontal-bar",
      title: "Stroke Risk Factor Prevalence in Pakistani Stroke Patients (%)",
      description:
        "Hypertension is by far the most prevalent modifiable risk factor among stroke patients in Pakistan, followed by diabetes and dyslipidaemia. Controlling these three conditions would prevent the majority of strokes.",
      data: [
        { name: "Hypertension", value: 72 },
        { name: "Diabetes", value: 38 },
        { name: "Dyslipidaemia", value: 34 },
        { name: "Smoking", value: 28 },
        { name: "Atrial Fibrillation", value: 14 },
        { name: "Obesity", value: 22 },
      ],
      unit: "% of stroke patients",
      legendLabel: "Prevalence in Stroke Patients (%)",
    },
  },

  "knee-pain-when-to-see-a-doctor-islamabad": {
    keyStats: [
      { value: "40%", label: "Over-60s Affected", description: "Have knee osteoarthritis" },
      { value: "4 kg", label: "Load Reduction", description: "Per 1 kg of weight lost" },
      { value: "95%", label: "Satisfaction Rate", description: "After total knee replacement" },
      { value: "9–12 mo", label: "ACL Recovery", description: "Return to sport timeline" },
    ],
    chart: {
      type: "bar",
      title: "Knee Osteoarthritis Prevalence by Age Group (%)",
      description:
        "Knee osteoarthritis prevalence rises steeply with age. In Pakistan, earlier onset is partly driven by high rates of squatting posture in daily activities, high BMI, and limited access to physiotherapy.",
      data: [
        { name: "30–39", value: 4 },
        { name: "40–49", value: 12 },
        { name: "50–59", value: 24 },
        { name: "60–69", value: 40 },
        { name: "70–79", value: 52 },
        { name: "80+", value: 65 },
      ],
      unit: "% prevalence",
      legendLabel: "OA Prevalence (%)",
    },
  },

  "vaccination-schedule-children-pakistan": {
    keyStats: [
      { value: "58%", label: "Fully Immunised", description: "Children under 2 in Pakistan (2023)" },
      { value: "1 in 1M", label: "Anaphylaxis Risk", description: "From any vaccine dose" },
      { value: "3M+", label: "Deaths Prevented", description: "Annually by vaccination globally" },
      { value: "100%", label: "Polio-Free", description: "Target for Pakistan EPI programme" },
    ],
    chart: {
      type: "bar",
      title: "EPI Vaccine Coverage in Pakistan by Vaccine (%) — 2023 PDHS Estimates",
      description:
        "Coverage varies significantly by vaccine type in Pakistan. BCG achieves the highest coverage as a birth-dose vaccine. Later-schedule vaccines see drop-off due to access barriers and missed follow-up appointments.",
      data: [
        { name: "BCG", value: 89 },
        { name: "Penta-3", value: 73 },
        { name: "OPV-3", value: 78 },
        { name: "PCV-3", value: 65 },
        { name: "Measles-1", value: 72 },
        { name: "Measles-2", value: 54 },
        { name: "Typhoid (TCV)", value: 48 },
      ],
      unit: "% coverage",
      legendLabel: "Vaccine Coverage (%)",
    },
  },

  "depression-understanding-seeking-help-pakistan": {
    keyStats: [
      { value: "34%", label: "Women Affected", description: "Lifetime depression prevalence" },
      { value: "21%", label: "Men Affected", description: "Lifetime depression prevalence" },
      { value: "<10%", label: "Receive Treatment", description: "Of those who need it" },
      { value: "70–90%", label: "Treatment Response", description: "Of people respond to treatment" },
    ],
    chart: {
      type: "bar",
      title: "Depression & Anxiety Prevalence in Pakistan by Population Group (%)",
      description:
        "Depression prevalence varies significantly by population group in Pakistan. Women, those in poverty, and people with chronic illness carry disproportionate burden. Urban prevalence has risen with increased economic stress and social fragmentation.",
      data: [
        { name: "General Population", value: 26 },
        { name: "Women", value: 34 },
        { name: "Men", value: 21 },
        { name: "Chronic Illness", value: 45 },
        { name: "Urban Poor", value: 38 },
        { name: "Elderly (65+)", value: 30 },
      ],
      unit: "% with depression/anxiety",
      legendLabel: "Prevalence (%)",
    },
  },

  "foods-that-lower-blood-pressure-naturally": {
    keyStats: [
      { value: "1 in 3", label: "Pakistani Adults", description: "Have high blood pressure" },
      { value: "14 mmHg", label: "DASH Diet Effect", description: "Systolic BP reduction possible" },
      { value: "5g", label: "Daily Sodium Target", description: "Average Pakistani eats 9–12g" },
      { value: "5%", label: "Weight Loss Target", description: "To meaningfully reduce BP" },
    ],
    chart: {
      type: "horizontal-bar",
      title: "Estimated Systolic Blood Pressure Reduction by Food / Dietary Strategy (mmHg)",
      description:
        "Evidence-based estimates of systolic blood pressure reduction achievable through consistent dietary changes. The DASH diet pattern — combining multiple interventions — produces the largest effect, comparable to a single antihypertensive medication.",
      data: [
        { name: "DASH Diet (full)", value: 11 },
        { name: "Sodium Reduction", value: 8 },
        { name: "Beetroot Juice", value: 6 },
        { name: "Weight Loss (5%)", value: 5 },
        { name: "Potassium (Banana/Spinach)", value: 4 },
        { name: "Omega-3 (Fish)", value: 4 },
        { name: "Garlic", value: 5 },
        { name: "Oats (Beta-glucan)", value: 3 },
        { name: "Dark Chocolate", value: 2 },
      ],
      unit: "mmHg reduction",
      legendLabel: "Systolic BP Reduction (mmHg)",
    },
  },

  "understanding-lab-test-results-pakistan": {
    keyStats: [
      { value: "5%", label: "False Positives", description: "In any healthy reference range" },
      { value: "90+", label: "Normal eGFR", description: "mL/min/1.73m² for healthy kidneys" },
      { value: "7.0%", label: "Diabetes HbA1c", description: "Diagnostic threshold" },
      { value: "6.5%", label: "Normal TSH Max", description: "Upper limit thyroid function" },
    ],
    chart: {
      type: "bar",
      title: "Common Causes of Abnormal CBC Results in Pakistan (% of cases referred to Shifa Pathology)",
      description:
        "Iron deficiency anaemia and thalassaemia trait are the most common causes of abnormal CBC in Pakistan. Dengue-related thrombocytopaenia becomes the dominant abnormal finding during seasonal dengue outbreaks.",
      data: [
        { name: "Iron Deficiency Anaemia", value: 38 },
        { name: "Thalassaemia Trait", value: 18 },
        { name: "Viral-related Leucopaenia", value: 14 },
        { name: "Dengue Thrombocytopaenia", value: 12 },
        { name: "B12 / Folate Deficiency", value: 9 },
        { name: "Other", value: 9 },
      ],
      unit: "% of abnormal CBC referrals",
      legendLabel: "% of Cases",
    },
  },

  "common-health-problems-older-adults-pakistan": {
    keyStats: [
      { value: "12%", label: "By 2050", description: "Pakistani population will be 60+" },
      { value: "1 in 3", label: "Women Over 50", description: "Have osteoporosis" },
      { value: "50%+", label: "Over-60s with HTN", description: "Hypertension in older adults" },
      { value: "30%", label: "Post-Stroke", description: "Develop depression within a year" },
    ],
    chart: {
      type: "line",
      title: "Pakistan Population Aged 60+ Years (millions) — Actual & Projected",
      description:
        "Pakistan's older adult population is growing rapidly and will triple by 2050. This demographic shift will significantly increase demand for geriatric, cardiovascular, orthopaedic, and mental health services.",
      data: [
        { name: "2000", value: 6.2 },
        { name: "2005", value: 7.4 },
        { name: "2010", value: 8.9 },
        { name: "2015", value: 10.8 },
        { name: "2020", value: 13.1 },
        { name: "2025", value: 15.9 },
        { name: "2030", value: 19.4 },
        { name: "2040", value: 28.1 },
        { name: "2050", value: 40.2 },
      ],
      unit: "million people",
      legendLabel: "Population Aged 60+ (millions)",
    },
  },

  "heart-attack-first-aid-what-to-do-pakistan": {
    keyStats: [
      { value: "3×", label: "Survival Boost", description: "When CPR starts within 3 minutes" },
      { value: "300mg", label: "Aspirin Dose", description: "Chewed, not swallowed whole" },
      { value: "100–120", label: "CPR Rate", description: "Compressions per minute" },
      { value: "5–6 cm", label: "Compression Depth", description: "For effective CPR" },
    ],
    chart: {
      type: "bar",
      title: "Out-of-Hospital Cardiac Arrest: Survival Rate by Time to CPR (minutes)",
      description:
        "Every minute without CPR reduces the chance of survival by approximately 10%. Bystander CPR — even by untrained individuals — dramatically improves outcomes until professional help arrives.",
      data: [
        { name: "< 1 min", value: 74 },
        { name: "1–2 min", value: 60 },
        { name: "2–3 min", value: 48 },
        { name: "3–4 min", value: 38 },
        { name: "4–5 min", value: 28 },
        { name: "5–6 min", value: 18 },
        { name: "> 6 min", value: 9 },
      ],
      unit: "% survival",
      legendLabel: "Survival Rate (%)",
    },
  },

  "headache-when-is-it-serious-islamabad": {
    keyStats: [
      { value: "15%", label: "Have Migraine", description: "Of the global population" },
      { value: "60 sec", label: "Thunderclap Onset", description: "Maximum severity time — emergency" },
      { value: "45%", label: "Tension Headache", description: "Most common type globally" },
      { value: "10–15 days", label: "MOH Threshold", description: "Days/month triggering rebound" },
    ],
    chart: {
      type: "pie",
      title: "Headache Type Distribution in Neurology Outpatient Clinics Pakistan (%)",
      description:
        "Tension-type headache is the most common headache disorder seen in outpatient clinics, followed by migraine. Dangerous secondary headaches (from structural causes) account for fewer than 5% of headaches but require thorough evaluation.",
      data: [
        { name: "Tension-Type", value: 45 },
        { name: "Migraine", value: 30 },
        { name: "Medication Overuse", value: 12 },
        { name: "Cluster", value: 3 },
        { name: "Secondary (Serious)", value: 5 },
        { name: "Other Primary", value: 5 },
      ],
      unit: "%",
      legendLabel: "Type Distribution",
    },
  },
};
