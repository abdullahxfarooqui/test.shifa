export type SpecialtyCategory = "Surgical" | "Medical" | "Diagnostic" | "Critical Care";

export type Specialty = {
  slug: string;
  title: string;
  description: string;
  category: SpecialtyCategory;
  image: string;
  alt: string;
};

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  departmentSlug: string;
  experience: string;
  qualifications: string[];
  procedures: string[];
  availability: string;
  summary: string;
  bio: string;
  languages: string[];
  lastReviewed: string;
  image: string;
};

export type ConditionSection = {
  title: string;
  paragraphs: string[];
};

export type Condition = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  relatedSpecialtySlug: string;
  relatedDoctorSlugs: string[];
  sections: ConditionSection[];
  faqs: Array<{ question: string; answer: string }>;
};

export const specialties: Specialty[] = [
  {
    slug: "cardiology",
    title: "Cardiology",
    description: "Advanced heart care including angioplasty, cardiac surgery, and preventive cardiology.",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    alt: "South Asian cardiology specialist consultation at Shifa International Hospital Islamabad",
  },
  {
    slug: "oncology",
    title: "Oncology",
    description: "Comprehensive cancer care with chemotherapy, radiotherapy, and surgical oncology.",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    alt: "South Asian oncology care team at Shifa International Hospital Islamabad",
  },
  {
    slug: "neurology",
    title: "Neurology",
    description: "Expert care for brain, spine, and nervous system disorders with modern neuro diagnostics.",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
    alt: "South Asian neurology specialist services at Shifa International Hospital Islamabad",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    description: "Joint replacement, sports injury recovery, and trauma care with rehabilitation pathways.",
    category: "Surgical",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    alt: "Orthopedic and surgical care planning at Shifa International Hospital Islamabad",
  },
  {
    slug: "transplants",
    title: "Transplants",
    description: "Multidisciplinary transplant programs with coordinated pre and post transplant care.",
    category: "Critical Care",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    alt: "South Asian transplant consultation services at Shifa International Hospital Islamabad",
  },
  {
    slug: "radiology",
    title: "Radiology & Imaging",
    description: "High-precision imaging including MRI, CT, PET-CT, and interventional radiology services.",
    category: "Diagnostic",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "Advanced diagnostic imaging equipment at Shifa International Hospital Islamabad",
  },
  {
    slug: "endocrinology",
    title: "Endocrinology",
    description: "Specialist care for diabetes, thyroid disease, and metabolic disorders with long-term monitoring.",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=1200&q=80",
    alt: "South Asian endocrinology and diabetes consultation at Shifa International Hospital Islamabad",
  },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-ayesha-khan",
    name: "Dr. Ayesha Khan",
    specialty: "Consultant Medical Oncologist",
    departmentSlug: "oncology",
    experience: "15+ years",
    qualifications: ["MBBS", "FCPS (Oncology)", "Fellowship in Medical Oncology"],
    procedures: [
      "Systemic chemotherapy protocols",
      "Targeted therapy planning",
      "Immunotherapy assessment",
      "Second opinion oncology consultations",
    ],
    availability: "Mon to Fri, 10:00 AM to 3:00 PM",
    summary:
      "Dr. Ayesha Khan leads systemic cancer treatment planning with a focus on evidence-based outcomes, safety monitoring, and compassionate patient counseling.",
    bio: "Dr. Ayesha Khan is a Consultant Medical Oncologist at Shifa International Hospitals with over 15 years of clinical experience in systemic cancer therapy. She completed her FCPS in Oncology and pursued a Fellowship in Medical Oncology with subspecialty training in breast and gastrointestinal malignancies. Dr. Khan has been a core member of Shifa's multidisciplinary Tumor Board since 2012 and has supervised more than 3,000 chemotherapy and targeted therapy protocols. Her clinical interests include personalised treatment planning, immunotherapy assessment, and survivorship care. She is committed to informed patient decision-making and integrates psycho-oncology support throughout treatment.",
    languages: ["English", "Urdu"],
    lastReviewed: "2025-10-01",
    image:
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dr-umer-farooq",
    name: "Dr. Umer Farooq",
    specialty: "Consultant Interventional Cardiologist",
    departmentSlug: "cardiology",
    experience: "18+ years",
    qualifications: ["MBBS", "FCPS (Cardiology)", "FACC"],
    procedures: [
      "Coronary angiography",
      "Primary PCI",
      "Heart failure optimization",
      "Cardiovascular risk prevention clinics",
    ],
    availability: "Mon, Wed, Fri, 9:00 AM to 2:00 PM",
    summary:
      "Dr. Umer Farooq provides advanced heart care through minimally invasive interventions and long-term prevention pathways.",
    bio: "Dr. Umer Farooq is a Consultant Interventional Cardiologist with 18 years of specialist experience at Shifa International Hospitals. He is a Fellow of the American College of Cardiology (FACC) and holds FCPS in Cardiology from CPSP Pakistan. Dr. Farooq has performed over 5,000 coronary angiography and primary PCI procedures and leads the hospital's Heart Failure Clinic. He provides structured cardiovascular risk prevention services and has trained numerous cardiology residents and fellows. His practice focuses on minimally invasive interventions, outcomes monitoring, and patient-centred long-term prevention strategies.",
    languages: ["English", "Urdu", "Punjabi"],
    lastReviewed: "2025-10-01",
    image:
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dr-sara-naveed",
    name: "Dr. Sara Naveed",
    specialty: "Consultant Neurologist",
    departmentSlug: "neurology",
    experience: "12+ years",
    qualifications: ["MBBS", "FCPS (Neurology)", "Stroke Fellowship"],
    procedures: [
      "Acute stroke pathways",
      "Epilepsy management",
      "Neurodegenerative disorder clinics",
      "Electrodiagnostic evaluation",
    ],
    availability: "Tue to Sat, 11:00 AM to 4:00 PM",
    summary:
      "Dr. Sara Naveed focuses on timely neurological diagnosis and long-term management of complex brain and nerve disorders.",
    bio: "Dr. Sara Naveed is a Consultant Neurologist at Shifa International Hospitals with 12 years of clinical experience in neurology and stroke medicine. She completed her FCPS in Neurology and a dedicated Stroke Fellowship, gaining subspecialty expertise in acute stroke pathways, epilepsy, and neurodegenerative disorders. Dr. Naveed co-leads the Shifa Stroke Unit and has contributed to multidisciplinary protocols that reduced average thrombolysis door-to-needle times at the hospital. She provides electrodiagnostic assessments and runs specialist clinics for Parkinson's disease and multiple sclerosis. She is recognised for her patient communication approach and systematic diagnostic frameworks.",
    languages: ["English", "Urdu"],
    lastReviewed: "2025-10-01",
    image:
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dr-hina-ashraf",
    name: "Dr. Hina Ashraf",
    specialty: "Consultant Endocrinologist",
    departmentSlug: "endocrinology",
    experience: "14+ years",
    qualifications: ["MBBS", "FCPS (Medicine)", "Fellowship in Endocrinology"],
    procedures: [
      "Diabetes risk stratification",
      "Insulin protocol optimization",
      "Thyroid disorder management",
      "Long-term metabolic monitoring",
    ],
    availability: "Mon to Thu, 12:00 PM to 5:00 PM",
    summary:
      "Dr. Hina Ashraf provides specialist endocrine care focused on diabetes control, complication prevention, and sustainable long-term outcomes.",
    bio: "Dr. Hina Ashraf is a Consultant Endocrinologist with 14 years of specialist experience managing diabetes, thyroid disease, and complex metabolic disorders. She holds FCPS in Medicine and completed a Fellowship in Endocrinology with subspecialty focus on insulin therapy optimisation and diabetic complications. Dr. Ashraf leads Shifa's Diabetes Education Programme and supervises the hospital's complication screening clinics covering nephropathy, neuropathy, and diabetic eye disease. She has contributed to clinical guidelines on insulin protocol standardisation and is actively involved in postgraduate teaching. Her practice integrates medical management with structured patient education and long-term monitoring.",
    languages: ["English", "Urdu"],
    lastReviewed: "2025-10-01",
    image:
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=900&q=80",
  },
];

export const conditions: Condition[] = [
  {
    slug: "breast-cancer-treatment",
    name: "Breast Cancer Treatment in Pakistan",
    seoTitle: "Breast Cancer Treatment in Pakistan | Shifa International Hospitals",
    description:
      "Learn about breast cancer symptoms, diagnosis, and treatment options at Shifa International Hospitals in Islamabad, including surgery, chemotherapy, and radiotherapy.",
    relatedSpecialtySlug: "oncology",
    relatedDoctorSlugs: ["dr-ayesha-khan"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Breast cancer is one of the most common cancers among women in Pakistan, and timely treatment can significantly improve outcomes. At Shifa International Hospitals, breast cancer care is organized around multidisciplinary planning so that each patient receives a coordinated pathway from diagnosis to recovery.",
          "Our oncology team includes medical oncologists, breast surgeons, radiation oncologists, radiologists, pathologists, and psycho-oncology specialists. This integrated approach reduces delays between investigations and treatment. It also ensures that treatment recommendations are tailored according to tumor biology, disease stage, age, overall health, and patient priorities.",
          "For many families, the diagnosis can feel overwhelming. We address this through structured counseling, clear communication, and practical decision support. We explain every stage of care in plain language and maintain close follow-up to support symptom management, treatment adherence, and emotional wellbeing.",
        ],
      },
      {
        title: "Symptoms",
        paragraphs: [
          "Early breast cancer may not cause obvious symptoms, which is why regular screening is important. Common warning signs include a new breast lump, a persistent thickening in the breast, nipple inversion, nipple discharge, skin dimpling, redness, and changes in breast shape or size.",
          "Some patients may notice discomfort in the underarm due to enlarged lymph nodes. Others may only be diagnosed through mammography before any symptoms develop. If a patient experiences persistent changes, evaluation should not be delayed.",
          "At Shifa, patients with concerning symptoms are fast-tracked for imaging and clinical review. Early consultation helps reduce diagnostic delay and improves the chance of curative treatment.",
        ],
      },
      {
        title: "Causes",
        paragraphs: [
          "Breast cancer risk is influenced by multiple factors, including age, family history, inherited gene mutations, hormonal exposure, obesity, and lifestyle factors. Most patients do not have a single identifiable cause, which is why risk assessment should be individualized.",
          "We provide structured risk profiling for patients with strong family history or early-onset disease in close relatives. Genetic counseling is available for selected cases to guide surveillance and preventive decisions.",
          "Understanding risk does not replace screening; instead, it helps prioritize timely imaging, preventive strategies, and specialist consultation when needed.",
        ],
      },
      {
        title: "Diagnosis",
        paragraphs: [
          "Accurate diagnosis begins with clinical examination, followed by imaging such as mammography, ultrasound, and MRI when clinically indicated. Tissue confirmation through biopsy is essential before treatment planning.",
          "Pathology and immunohistochemistry define tumor subtype and receptor status, including ER, PR, and HER2. These markers determine whether hormone therapy, targeted therapy, chemotherapy, or combined strategies are most appropriate.",
          "Shifa uses Tumor Board review to align diagnostics and treatment sequencing. This multidisciplinary review improves decision quality and ensures that treatment plans account for both disease control and long-term quality of life.",
        ],
      },
      {
        title: "Treatment Options at Shifa",
        paragraphs: [
          "Treatment plans may include surgery, chemotherapy, hormone therapy, targeted therapy, radiotherapy, and supportive care. Surgery can involve breast-conserving procedures or mastectomy depending on tumor size, location, and patient preference.",
          "Systemic therapy is selected according to tumor subtype and stage. Patients are closely monitored for side effects, and dose adjustments are made safely when required. Radiation therapy is planned with precision protocols to maximize tumor control while minimizing exposure to healthy tissue.",
          "Supportive care is integrated throughout treatment, including nutrition, pain management, psychosocial support, and survivorship counseling. This whole-patient model improves tolerance, continuity, and long-term outcomes.",
        ],
      },
      {
        title: "When to See a Doctor",
        paragraphs: [
          "Consult an oncology specialist if you notice any persistent breast change, if you have a high-risk family history, or if prior imaging has shown suspicious findings. Patients who have completed treatment should continue scheduled follow-up to detect recurrence early and manage long-term health.",
          "Shifa encourages second-opinion consultations for patients diagnosed elsewhere who need clarity on treatment options. Early specialist input can prevent avoidable delays and support more confident decisions.",
          "If you are searching for breast cancer treatment in Pakistan with multidisciplinary expertise, timely diagnostics, and structured support, Shifa International Hospitals provides an end-to-end care pathway designed around outcomes and compassion.",
        ],
      },
    ],
    faqs: [
      {
        question: "What treatment options are available for breast cancer at Shifa?",
        answer:
          "Shifa offers surgery, chemotherapy, hormone therapy, targeted therapy, radiotherapy, and supportive care through multidisciplinary planning.",
      },
      {
        question: "Can I get a second opinion for breast cancer treatment?",
        answer:
          "Yes. Our oncology consultants provide second-opinion consultations with review of pathology, imaging, and treatment strategy.",
      },
      {
        question: "Do you offer genetic counseling for hereditary risk?",
        answer:
          "Yes, selected patients with family history or early-onset patterns can receive genetic counseling and risk assessment.",
      },
    ],
  },
  {
    slug: "heart-attack-symptoms",
    name: "Heart Attack Symptoms and Urgent Cardiac Care",
    seoTitle: "Heart Attack Symptoms | Emergency Cardiac Care in Islamabad | Shifa",
    description:
      "Recognize heart attack symptoms early and learn about urgent diagnosis and treatment at Shifa International Hospitals in Islamabad.",
    relatedSpecialtySlug: "cardiology",
    relatedDoctorSlugs: ["dr-umer-farooq"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A heart attack is a medical emergency caused by a sudden reduction or blockage of blood flow to heart muscle. Rapid diagnosis and treatment are essential to preserve heart function and reduce complications.",
          "At Shifa International Hospitals, emergency cardiac response pathways are designed to shorten door-to-treatment times. Cardiology, emergency medicine, critical care, and imaging teams work in parallel so that patients receive immediate stabilization and definitive treatment.",
          "Many patients survive and recover well when symptoms are recognized early. Public awareness, timely transport, and immediate specialist care play a major role in outcomes.",
        ],
      },
      {
        title: "Symptoms",
        paragraphs: [
          "Typical symptoms include central chest pressure, heaviness, burning pain, pain radiating to the jaw or left arm, shortness of breath, cold sweating, nausea, and sudden weakness. Symptoms can vary, especially in women, older adults, and people with diabetes.",
          "Some patients experience atypical signs such as indigestion-like discomfort, unusual fatigue, or breathlessness without severe chest pain. Because delayed recognition is common, any persistent or concerning symptom should be treated urgently.",
          "If symptoms suggest a heart attack, call emergency services immediately rather than waiting for improvement. Early medical contact can be life-saving.",
        ],
      },
      {
        title: "Causes",
        paragraphs: [
          "Most heart attacks are caused by coronary artery disease, where atherosclerotic plaque ruptures and forms a clot that blocks blood flow. Risk factors include hypertension, diabetes, smoking, high cholesterol, obesity, sedentary lifestyle, and family history.",
          "Stress, poor sleep, and uncontrolled metabolic disease also increase risk over time. Risk is cumulative, which means prevention should begin before symptoms develop.",
          "Shifa offers preventive cardiology clinics that focus on risk stratification, medication optimization, and practical lifestyle plans.",
        ],
      },
      {
        title: "Diagnosis",
        paragraphs: [
          "Emergency diagnosis includes clinical examination, ECG, serial cardiac biomarkers, and bedside monitoring. Additional imaging may be required to assess heart function and guide intervention.",
          "When acute coronary syndrome is confirmed, patients are triaged quickly for angiography and revascularization where indicated. The aim is to restore blood flow as early as possible.",
          "Our teams use protocol-based pathways to reduce avoidable delays and maintain consistency in care quality.",
        ],
      },
      {
        title: "Treatment Options at Shifa",
        paragraphs: [
          "Treatment may include antiplatelet and anticoagulant medication, emergency angioplasty, stent placement, intensive monitoring, and rehabilitation planning. For selected patients, additional interventions are considered based on anatomy and clinical status.",
          "After stabilization, long-term management includes blood pressure and cholesterol control, diabetes optimization, smoking cessation support, and supervised cardiac rehabilitation.",
          "Our cardiology team emphasizes continuity of care so patients can safely return to routine life while lowering future risk.",
        ],
      },
      {
        title: "When to See a Doctor",
        paragraphs: [
          "Seek immediate care for chest pressure, breathlessness, unexplained sweating, or pain radiating to the jaw or arm. Patients with multiple risk factors should not ignore mild or atypical symptoms.",
          "After a cardiac event, structured follow-up is essential. We schedule serial reviews for medication titration, symptom monitoring, and long-term prevention.",
          "If you are searching for advanced medical treatment in Pakistan for heart attack symptoms and recovery planning, Shifa provides emergency and preventive cardiology services under one integrated system.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do if I suspect a heart attack?",
        answer:
          "Call emergency services immediately and seek urgent hospital care. Do not delay treatment while waiting for symptoms to settle.",
      },
      {
        question: "Can heart attack symptoms occur without severe chest pain?",
        answer:
          "Yes. Some patients, especially women and people with diabetes, may have atypical symptoms such as fatigue, nausea, or breathlessness.",
      },
      {
        question: "Do you provide rehabilitation after emergency treatment?",
        answer:
          "Yes, Shifa offers post-event follow-up and cardiac rehabilitation planning to support safe long-term recovery.",
      },
    ],
  },
  {
    slug: "diabetes-treatment-pakistan",
    name: "Diabetes Treatment in Pakistan",
    seoTitle: "Diabetes Treatment in Pakistan | Endocrine and Medical Care at Shifa",
    description:
      "Understand diabetes symptoms, causes, diagnosis, and treatment options with comprehensive specialist care at Shifa International Hospitals.",
    relatedSpecialtySlug: "endocrinology",
    relatedDoctorSlugs: ["dr-hina-ashraf"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Diabetes is a long-term metabolic condition that affects blood glucose regulation and can impact the heart, kidneys, nerves, eyes, and blood vessels when not controlled effectively. In Pakistan, rising rates of obesity, sedentary lifestyle, and delayed screening contribute to increasing diabetes burden.",
          "Shifa International Hospitals delivers coordinated diabetes care through specialist consultation, laboratory monitoring, nutrition counseling, and complication screening. Our approach combines medication strategy with practical behavior support so patients can maintain control over time.",
          "Because diabetes management is continuous, patients benefit most from a clear treatment plan, regular follow-up, and education tailored to daily life.",
        ],
      },
      {
        title: "Symptoms",
        paragraphs: [
          "Common symptoms include frequent urination, excessive thirst, unexplained weight changes, persistent fatigue, blurred vision, slow wound healing, and recurrent infections. Some people have no obvious symptoms and are diagnosed through routine testing.",
          "Prediabetes and early type 2 diabetes may remain silent for years. Timely screening is therefore essential, especially in adults with family history, obesity, hypertension, or gestational diabetes history.",
          "At Shifa, we encourage preventive checkups for high-risk groups to detect disease before complications develop.",
        ],
      },
      {
        title: "Causes",
        paragraphs: [
          "Type 1 diabetes is caused by autoimmune destruction of insulin-producing cells, while type 2 diabetes is linked to insulin resistance and progressive beta-cell dysfunction. Genetic predisposition, lifestyle factors, and metabolic syndrome contribute strongly to type 2 disease.",
          "Poor dietary quality, low physical activity, and central obesity raise risk significantly. Sleep disturbance and chronic stress can further worsen insulin resistance.",
          "Understanding the underlying pattern helps clinicians choose the right medication intensity and lifestyle strategy.",
        ],
      },
      {
        title: "Diagnosis",
        paragraphs: [
          "Diagnosis is based on fasting glucose, HbA1c, and oral glucose testing when needed. Ongoing monitoring includes HbA1c trends, kidney profile, lipid profile, blood pressure, and complication screening.",
          "Shifa uses risk-based evaluation to identify early kidney, nerve, and cardiovascular involvement. Timely intervention helps prevent progression and reduces hospitalization risk.",
          "Patients receive practical education on glucose tracking, medication adherence, nutrition planning, and warning signs of hypoglycemia or hyperglycemia.",
        ],
      },
      {
        title: "Treatment Options at Shifa",
        paragraphs: [
          "Treatment includes individualized nutrition plans, physical activity targets, oral antidiabetic medication, and insulin therapy when required. Clinical decisions are adjusted according to age, comorbidities, occupation, and patient preferences.",
          "Patients with complex disease may need multidisciplinary support from cardiology, nephrology, neurology, ophthalmology, and wound care teams. This integrated model supports safer long-term control.",
          "We also focus on prevention of complications by improving blood pressure, cholesterol, and weight management alongside glucose control.",
        ],
      },
      {
        title: "When to See a Doctor",
        paragraphs: [
          "See a specialist if you have persistent symptoms, repeated high sugar readings, unexplained fatigue, or signs of complications such as foot numbness or visual changes. Early intervention improves long-term outcomes and lowers treatment complexity.",
          "Patients already diagnosed with diabetes should attend regular follow-up, especially when medication needs change or new symptoms appear.",
          "If you are looking for diabetes treatment in Pakistan with structured monitoring and multidisciplinary support, Shifa International Hospitals offers patient-centered pathways built for long-term health.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can diabetes be managed without insulin?",
        answer:
          "Many type 2 patients can begin with lifestyle changes and oral medicines, but treatment should be individualized and reviewed regularly.",
      },
      {
        question: "How often should HbA1c be checked?",
        answer:
          "Most patients benefit from testing every three months until targets stabilize, then at intervals advised by the treating specialist.",
      },
      {
        question: "Do you screen for diabetes complications?",
        answer:
          "Yes, Shifa provides kidney, eye, nerve, and cardiovascular risk screening as part of integrated diabetes follow-up.",
      },
    ],
  },
];

export function getSpecialtyBySlug(slug: string) {
  return specialties.find((item) => item.slug === slug);
}

export function getDoctorBySlug(slug: string) {
  return doctors.find((item) => item.slug === slug);
}

export function getConditionBySlug(slug: string) {
  return conditions.find((item) => item.slug === slug);
}
