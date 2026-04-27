import { doctors } from "@/lib/medical-data";

export type SpecialtyTemplateData = {
  name: string;
  slug: string;
  url: string;
  tagline: string;
  whenToConsult: string;
  heroStats: Array<{ label: string; value: string }>;
  overviewParagraphs: string[];
  overviewStats: Array<{ icon: "heart" | "shield" | "stethoscope" | "activity"; value: number; suffix?: string; label: string }>;
  facilities: Array<{ title: string; description: string }>;
  diagnostics: Array<{ title: string; detail: string }>;
  treatments: Array<{ title: string; description: string }>;
  milestones: Array<{ period: string; achievement: string }>;
  chart: {
    title: string;
    description: string;
    data: Array<{ year: string; value: number }>;
  };
  consultSymptoms: string[];
  team: Array<{ name: string; designation: string; profile: string; experience: string; hospitalAffiliation: string }>;
};

type SpecialtyConfigWithoutTeam = Omit<SpecialtyTemplateData, "team">;

function buildChartData(base: number) {
  return [
    { year: "2000", value: base },
    { year: "2005", value: base + 120 },
    { year: "2010", value: base + 280 },
    { year: "2015", value: base + 460 },
    { year: "2020", value: base + 740 },
    { year: "2025", value: base + 1020 },
  ];
}

export const specialtyPageConfig: Record<string, SpecialtyConfigWithoutTeam> = {
    anesthesiology: {
      name: "Anesthesiology",
      slug: "anesthesiology",
      url: "https://www.shifa.com.pk/specialities/anesthesiology/islamabad",
      tagline:
        "Perioperative care, pain management, and critical care sedation. Pre-anesthesia evaluation clinics. Intraoperative monitoring with advanced patient safety protocols for all surgical departments.",
      whenToConsult:
        "Perioperative care, pain management, and critical care sedation. Pre-anesthesia evaluation clinics. Intraoperative monitoring with advanced patient safety protocols for all surgical departments.",
      heroStats: [
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
        { label: "Clinical Specialities", value: "45+" },
      ],
      overviewParagraphs: [
        "Shifa International Hospitals is Pakistan's leading JCI Gold-accredited quaternary care hospital in Islamabad, offering 45+ medical and surgical specialities, 550+ beds, and 300+ clinical consultants trained in the USA and Europe.",
        "Perioperative care, pain management, and critical care sedation. Pre-anesthesia evaluation clinics. Intraoperative monitoring with advanced patient safety protocols for all surgical departments.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Perioperative care", description: "Perioperative care" },
        { title: "Pain management", description: "pain management" },
        { title: "Critical care sedation", description: "critical care sedation" },
        { title: "Pre-anesthesia evaluation clinics", description: "Pre-anesthesia evaluation clinics" },
        {
          title: "Intraoperative monitoring",
          description: "Intraoperative monitoring with advanced patient safety protocols for all surgical departments",
        },
      ],
      diagnostics: [
        { title: "Pre-anesthesia evaluation clinics", detail: "Pre-anesthesia evaluation clinics" },
        {
          title: "Intraoperative monitoring",
          detail: "Intraoperative monitoring with advanced patient safety protocols for all surgical departments",
        },
        { title: "Perioperative care", detail: "Perioperative care" },
      ],
      treatments: [
        { title: "Perioperative care", description: "Perioperative care" },
        { title: "Pain management", description: "pain management" },
        { title: "Critical care sedation", description: "critical care sedation" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Anesthesiology Service Volume 2000-2025",
        description: "Anesthesiology service trend over time.",
        data: buildChartData(90),
      },
      consultSymptoms: ["Perioperative care", "pain management", "critical care sedation"],
    },
    audiology: {
      name: "Audiology",
      slug: "audiology",
      url: "https://www.shifa.com.pk/specialities/audiology/islamabad",
      tagline: "Hearing assessment, audiological rehabilitation, balance disorder management. Integrated with ENT and Pediatrics.",
      whenToConsult: "Hearing assessment, audiological rehabilitation, balance disorder management. Integrated with ENT and Pediatrics.",
      heroStats: [
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
        { label: "Clinical Specialities", value: "45+" },
      ],
      overviewParagraphs: [
        "Shifa International Hospitals is Pakistan's leading JCI Gold-accredited quaternary care hospital in Islamabad, offering 45+ medical and surgical specialities, 550+ beds, and 300+ clinical consultants trained in the USA and Europe.",
        "Hearing assessment, audiological rehabilitation, balance disorder management. Integrated with ENT and Pediatrics.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Hearing assessment", description: "Hearing assessment" },
        { title: "Audiological rehabilitation", description: "audiological rehabilitation" },
        { title: "Balance disorder management", description: "balance disorder management" },
        { title: "Integrated with ENT and Pediatrics", description: "Integrated with ENT and Pediatrics" },
      ],
      diagnostics: [
        { title: "Hearing assessment", detail: "Hearing assessment" },
        { title: "Balance disorder management", detail: "balance disorder management" },
        { title: "Integrated with ENT and Pediatrics", detail: "Integrated with ENT and Pediatrics" },
      ],
      treatments: [
        { title: "Audiological rehabilitation", description: "audiological rehabilitation" },
        { title: "Balance disorder management", description: "balance disorder management" },
        { title: "Integrated care", description: "Integrated with ENT and Pediatrics" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Audiology Service Volume 2000-2025",
        description: "Audiology service trend over time.",
        data: buildChartData(80),
      },
      consultSymptoms: ["Hearing assessment", "balance disorder management", "audiological rehabilitation"],
    },
    cardiology: {
      name: "Cardiology",
      slug: "cardiology",
      url: "https://www.shifa.com.pk/specialities/cardiology/islamabad",
      tagline:
        "Coronary artery disease, arrhythmias, heart failure, hypertension, valvular heart disease, cardiac emergencies.",
      whenToConsult:
        "Chest pain, shortness of breath, irregular heartbeat, fatigue on exertion, or risk factors like diabetes, hypertension, family history of heart disease.",
      heroStats: [
        { label: "Emergency Cardiac Services", value: "24/7" },
        { label: "Cardiac Care Unit", value: "CCU" },
        { label: "Cath Labs", value: "Integrated" },
      ],
      overviewParagraphs: [
        "Coronary artery disease, arrhythmias, heart failure, hypertension, valvular heart disease, cardiac emergencies.",
        "Shifa Heart Center - fully integrated with 24/7 emergency and cardiac rehab.",
      ],
      overviewStats: [
        { icon: "heart", value: 24, suffix: "/7", label: "Emergency Cardiac Services" },
        { icon: "shield", value: 6, label: "Facilities" },
        { icon: "stethoscope", value: 6, label: "Diagnostics" },
        { icon: "activity", value: 6, label: "Treatments" },
      ],
      facilities: [
        { title: "Cath Labs", description: "Cath Labs for coronary angiography and angioplasty" },
        { title: "Cardiac Care Unit (CCU)", description: "Cardiac Care Unit (CCU) with continuous monitoring" },
        { title: "Non-invasive cardiology suite", description: "Non-invasive cardiology suite - ECHO, ECG, stress testing" },
        { title: "24/7 emergency cardiac services", description: "24/7 emergency cardiac services" },
        { title: "Cardiac rehabilitation", description: "Cardiac rehabilitation and lifestyle counseling" },
        { title: "Coordination", description: "Coordination with cardiac surgery and ICU" },
      ],
      diagnostics: [
        { title: "ECG and Holter monitoring", detail: "ECG and Holter monitoring" },
        { title: "Echocardiography", detail: "Echocardiography - 2D, 3D, Doppler" },
        { title: "Exercise stress testing", detail: "Exercise stress testing and nuclear cardiac scans" },
        { title: "Coronary and CT angiography", detail: "Coronary angiography and CT angiography" },
        { title: "Cardiac MRI", detail: "Cardiac MRI" },
        { title: "Cardiac biomarker panels", detail: "Cardiac biomarker panels" },
      ],
      treatments: [
        { title: "Emergency Cardiac Care", description: "heart attack, arrhythmia, cardiac arrest" },
        { title: "Interventional Cardiology", description: "angioplasty, stent placement" },
        { title: "Heart Failure & Hypertension", description: "medical therapy and lifestyle support" },
        { title: "Arrhythmia Management", description: "pacemakers, defibrillators, ablation" },
        { title: "Valvular Disease", description: "TAVI, PTMC, surgical coordination" },
        { title: "Preventive Cardiology", description: "screening, risk modification" },
      ],
      milestones: [
        { period: "1990s", achievement: "Launch of cardiac services" },
        { period: "2000s", achievement: "Cath Labs and CCU established" },
        { period: "2010s", achievement: "Advanced interventional and non-invasive cardiology" },
        { period: "2020s", achievement: "Shifa Heart Center - fully integrated with 24/7 emergency and cardiac rehab" },
      ],
      chart: {
        title: "Cardiac Procedures Performed 2000-2025",
        description: "Cardiology service trend over time.",
        data: buildChartData(180),
      },
      consultSymptoms: [
        "Chest pain",
        "shortness of breath",
        "irregular heartbeat",
        "fatigue on exertion",
        "risk factors like diabetes",
        "hypertension",
        "family history of heart disease",
      ],
    },
    "cardiac-surgery": {
      name: "Cardiac Surgery",
      slug: "cardiac-surgery",
      url: "https://www.shifa.com.pk/specialities/cardiac-surgery/islamabad",
      tagline:
        "Open-heart procedures, coronary artery bypass grafting (CABG), valve repair and replacement, congenital heart surgery. Operates within Shifa Heart Center.",
      whenToConsult:
        "Open-heart procedures, coronary artery bypass grafting (CABG), valve repair and replacement, congenital heart surgery. Operates within Shifa Heart Center.",
      heroStats: [
        { label: "Shifa Heart Center", value: "Integrated" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Open-heart procedures, coronary artery bypass grafting (CABG), valve repair and replacement, congenital heart surgery.",
        "Operates within Shifa Heart Center.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 24, suffix: "/7", label: "Emergency" },
      ],
      facilities: [
        { title: "Open-heart procedures", description: "Open-heart procedures" },
        { title: "CABG", description: "coronary artery bypass grafting (CABG)" },
        { title: "Valve repair and replacement", description: "valve repair and replacement" },
        { title: "Congenital heart surgery", description: "congenital heart surgery" },
        { title: "Shifa Heart Center", description: "Operates within Shifa Heart Center" },
      ],
      diagnostics: [
        { title: "Cardiac pathway integration", detail: "Operates within Shifa Heart Center" },
        { title: "CABG evaluation", detail: "coronary artery bypass grafting (CABG)" },
        { title: "Valve pathway evaluation", detail: "valve repair and replacement" },
      ],
      treatments: [
        { title: "Open-heart procedures", description: "Open-heart procedures" },
        { title: "CABG", description: "coronary artery bypass grafting (CABG)" },
        { title: "Valve procedures", description: "valve repair and replacement" },
        { title: "Congenital heart surgery", description: "congenital heart surgery" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Shifa Heart Center" },
        { period: "Present", achievement: "24/7 emergency" },
      ],
      chart: {
        title: "Cardiac Surgery Service Volume 2000-2025",
        description: "Cardiac surgery service trend over time.",
        data: buildChartData(150),
      },
      consultSymptoms: ["open-heart procedures", "CABG", "valve repair and replacement", "congenital heart surgery"],
    },
    "dentistry-and-orthodontics": {
      name: "Dentistry and Orthodontics",
      slug: "dentistry-and-orthodontics",
      url: "https://www.shifa.com.pk/specialities/dentistry-and-orthodontics/islamabad",
      tagline:
        "General dentistry, restorative dentistry (endodontics, periodontics, prosthodontics), dental implants, orthodontics (braces and clear aligners), pediatric dentistry, implant surgery, oral & maxillofacial surgery.",
      whenToConsult:
        "General dentistry, restorative dentistry (endodontics, periodontics, prosthodontics), dental implants, orthodontics (braces and clear aligners), pediatric dentistry, implant surgery, oral & maxillofacial surgery.",
      heroStats: [
        { label: "Shifa Dental Clinic", value: "Integrated" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "General dentistry, restorative dentistry (endodontics, periodontics, prosthodontics), dental implants, orthodontics (braces and clear aligners), pediatric dentistry, implant surgery, oral & maxillofacial surgery.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "General dentistry", description: "General dentistry" },
        { title: "Restorative dentistry", description: "restorative dentistry (endodontics, periodontics, prosthodontics)" },
        { title: "Dental implants", description: "dental implants" },
        { title: "Orthodontics", description: "orthodontics (braces and clear aligners)" },
        { title: "Pediatric dentistry", description: "pediatric dentistry" },
        { title: "Oral and maxillofacial surgery", description: "oral & maxillofacial surgery" },
      ],
      diagnostics: [
        { title: "General dentistry", detail: "General dentistry" },
        { title: "Restorative dentistry", detail: "restorative dentistry (endodontics, periodontics, prosthodontics)" },
        { title: "Orthodontics", detail: "orthodontics (braces and clear aligners)" },
      ],
      treatments: [
        { title: "Dental implants", description: "dental implants" },
        { title: "Orthodontics", description: "orthodontics (braces and clear aligners)" },
        { title: "Implant surgery", description: "implant surgery" },
        { title: "Oral and maxillofacial surgery", description: "oral & maxillofacial surgery" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Shifa Dental Clinic" },
        { period: "Present", achievement: "Full oral care, implants, orthodontics, maxillofacial surgery" },
      ],
      chart: {
        title: "Dentistry and Orthodontics Service Volume 2000-2025",
        description: "Dentistry and orthodontics service trend over time.",
        data: buildChartData(120),
      },
      consultSymptoms: ["general dentistry", "dental implants", "orthodontics", "oral & maxillofacial surgery"],
    },
    dermatology: {
      name: "Dermatology",
      slug: "dermatology",
      url: "https://www.shifa.com.pk/specialities/dermatology/islamabad",
      tagline:
        "Medical and procedural dermatology for skin, hair, and nail disorders. Acne, eczema, psoriasis, skin cancer screening, cosmetic dermatology, and dermatopathology.",
      whenToConsult:
        "Medical and procedural dermatology for skin, hair, and nail disorders. Acne, eczema, psoriasis, skin cancer screening, cosmetic dermatology, and dermatopathology.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Medical and procedural dermatology for skin, hair, and nail disorders.",
        "Acne, eczema, psoriasis, skin cancer screening, cosmetic dermatology, and dermatopathology.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Medical dermatology", description: "Medical and procedural dermatology for skin, hair, and nail disorders" },
        { title: "Acne and eczema", description: "Acne, eczema, psoriasis" },
        { title: "Skin cancer screening", description: "skin cancer screening" },
        { title: "Cosmetic dermatology", description: "cosmetic dermatology" },
        { title: "Dermatopathology", description: "dermatopathology" },
      ],
      diagnostics: [
        { title: "Skin cancer screening", detail: "skin cancer screening" },
        { title: "Dermatopathology", detail: "dermatopathology" },
        { title: "Clinical dermatology assessment", detail: "Medical and procedural dermatology for skin, hair, and nail disorders" },
      ],
      treatments: [
        { title: "Acne care", description: "Acne" },
        { title: "Eczema care", description: "eczema" },
        { title: "Psoriasis care", description: "psoriasis" },
        { title: "Cosmetic dermatology", description: "cosmetic dermatology" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Dermatology Service Volume 2000-2025",
        description: "Dermatology service trend over time.",
        data: buildChartData(95),
      },
      consultSymptoms: ["skin disorders", "hair disorders", "nail disorders", "skin cancer screening"],
    },
    "emergency-medicine": {
      name: "Emergency Medicine",
      slug: "emergency-medicine",
      url: "https://www.shifa.com.pk/specialities/emergency-medicine/islamabad",
      tagline: "Yes. 55+ emergency beds, trauma resuscitation, rapid diagnostics, immediate surgical backup - operational 24/7.",
      whenToConsult: "Yes. 55+ emergency beds, trauma resuscitation, rapid diagnostics, immediate surgical backup - operational 24/7.",
      heroStats: [
        { label: "Emergency Beds", value: "55+" },
        { label: "Emergency Services", value: "24/7" },
        { label: "Rapid Diagnostics", value: "Integrated" },
      ],
      overviewParagraphs: [
        "Yes. 55+ emergency beds, trauma resuscitation, rapid diagnostics, immediate surgical backup - operational 24/7.",
      ],
      overviewStats: [
        { icon: "heart", value: 55, suffix: "+", label: "Emergency Beds" },
        { icon: "shield", value: 24, suffix: "/7", label: "Emergency" },
        { icon: "stethoscope", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "activity", value: 550, suffix: "+", label: "Hospital Beds" },
      ],
      facilities: [
        { title: "55+ emergency beds", description: "55+ emergency beds" },
        { title: "Trauma resuscitation", description: "trauma resuscitation" },
        { title: "Rapid diagnostics", description: "rapid diagnostics" },
        { title: "Immediate surgical backup", description: "immediate surgical backup" },
        { title: "Operational 24/7", description: "operational 24/7" },
      ],
      diagnostics: [
        { title: "Rapid diagnostics", detail: "rapid diagnostics" },
        { title: "Trauma resuscitation", detail: "trauma resuscitation" },
        { title: "Immediate surgical backup", detail: "immediate surgical backup" },
      ],
      treatments: [
        { title: "Emergency care", description: "operational 24/7" },
        { title: "Trauma pathway", description: "trauma resuscitation" },
        { title: "Surgical backup pathway", description: "immediate surgical backup" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "55+ emergency beds" },
        { period: "Present", achievement: "24/7 emergency" },
      ],
      chart: {
        title: "Emergency Medicine Service Volume 2000-2025",
        description: "Emergency medicine service trend over time.",
        data: buildChartData(210),
      },
      consultSymptoms: ["trauma", "urgent symptoms", "rapid diagnostics", "immediate surgical backup"],
    },
    "endocrinology-and-diabetes": {
      name: "Endocrinology and Diabetes",
      slug: "endocrinology-and-diabetes",
      url: "https://www.shifa.com.pk/specialities/endocrinology-and-diabetes/islamabad",
      tagline:
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances. Dedicated diabetes education clinics.",
      whenToConsult:
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances. Dedicated diabetes education clinics.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances.",
        "Dedicated diabetes education clinics.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Type 1 and Type 2 diabetes", description: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid disorders", description: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Adrenal and pituitary", description: "adrenal diseases, pituitary conditions" },
        { title: "Metabolic and hormonal", description: "metabolic bone disease, PCOS, hormonal imbalances" },
        { title: "Dedicated diabetes education clinics", description: "Dedicated diabetes education clinics" },
      ],
      diagnostics: [
        { title: "Diabetes evaluation", detail: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid evaluation", detail: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Hormonal evaluation", detail: "PCOS, hormonal imbalances" },
      ],
      treatments: [
        { title: "Diabetes management", description: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid management", description: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Hormonal management", description: "PCOS, hormonal imbalances" },
        { title: "Education pathway", description: "Dedicated diabetes education clinics" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Endocrinology and Diabetes Service Volume 2000-2025",
        description: "Endocrinology and diabetes service trend over time.",
        data: buildChartData(100),
      },
      consultSymptoms: [
        "Type 1 and Type 2 diabetes",
        "thyroid disorders",
        "adrenal diseases",
        "pituitary conditions",
        "PCOS",
        "hormonal imbalances",
      ],
    },
    endocrinology: {
      name: "Endocrinology",
      slug: "endocrinology",
      url: "https://www.shifa.com.pk/specialities/endocrinology/islamabad",
      tagline:
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances. Dedicated diabetes education clinics.",
      whenToConsult:
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances. Dedicated diabetes education clinics.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Type 1 and Type 2 diabetes, thyroid disorders (hypo/hyperthyroidism, goiter), adrenal diseases, pituitary conditions, metabolic bone disease, PCOS, hormonal imbalances.",
        "Dedicated diabetes education clinics.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Type 1 and Type 2 diabetes", description: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid disorders", description: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Adrenal and pituitary", description: "adrenal diseases, pituitary conditions" },
        { title: "Metabolic and hormonal", description: "metabolic bone disease, PCOS, hormonal imbalances" },
        { title: "Dedicated diabetes education clinics", description: "Dedicated diabetes education clinics" },
      ],
      diagnostics: [
        { title: "Diabetes evaluation", detail: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid evaluation", detail: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Hormonal evaluation", detail: "PCOS, hormonal imbalances" },
      ],
      treatments: [
        { title: "Diabetes management", description: "Type 1 and Type 2 diabetes" },
        { title: "Thyroid management", description: "thyroid disorders (hypo/hyperthyroidism, goiter)" },
        { title: "Hormonal management", description: "PCOS, hormonal imbalances" },
        { title: "Education pathway", description: "Dedicated diabetes education clinics" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Endocrinology Service Volume 2000-2025",
        description: "Endocrinology service trend over time.",
        data: buildChartData(100),
      },
      consultSymptoms: [
        "Type 1 and Type 2 diabetes",
        "thyroid disorders",
        "adrenal diseases",
        "pituitary conditions",
        "PCOS",
        "hormonal imbalances",
      ],
    },
    ent: {
      name: "ENT - Ear, Nose & Throat",
      slug: "ent",
      url: "https://www.shifa.com.pk/specialities/ent/islamabad",
      tagline:
        "Surgical and medical management of ear, nose, throat, head, and neck conditions. Hearing loss, sinusitis, tonsillitis, voice disorders, head/neck tumors, sleep-related breathing disorders. Coordinated with Audiology.",
      whenToConsult:
        "Surgical and medical management of ear, nose, throat, head, and neck conditions. Hearing loss, sinusitis, tonsillitis, voice disorders, head/neck tumors, sleep-related breathing disorders. Coordinated with Audiology.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Surgical and medical management of ear, nose, throat, head, and neck conditions.",
        "Hearing loss, sinusitis, tonsillitis, voice disorders, head/neck tumors, sleep-related breathing disorders.",
        "Coordinated with Audiology.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Surgical and medical management", description: "Surgical and medical management of ear, nose, throat, head, and neck conditions" },
        { title: "Hearing loss", description: "Hearing loss" },
        { title: "Sinusitis and tonsillitis", description: "sinusitis, tonsillitis" },
        { title: "Voice disorders", description: "voice disorders" },
        { title: "Head and neck tumors", description: "head/neck tumors" },
        { title: "Sleep-related breathing disorders", description: "sleep-related breathing disorders" },
      ],
      diagnostics: [
        { title: "ENT clinical assessment", detail: "Surgical and medical management of ear, nose, throat, head, and neck conditions" },
        { title: "Audiology coordination", detail: "Coordinated with Audiology" },
        { title: "Voice and airway assessment", detail: "voice disorders, sleep-related breathing disorders" },
      ],
      treatments: [
        { title: "Hearing loss care", description: "Hearing loss" },
        { title: "Sinus and tonsil care", description: "sinusitis, tonsillitis" },
        { title: "Voice disorder care", description: "voice disorders" },
        { title: "Head and neck tumor care", description: "head/neck tumors" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "ENT Service Volume 2000-2025",
        description: "ENT service trend over time.",
        data: buildChartData(92),
      },
      consultSymptoms: [
        "hearing loss",
        "sinusitis",
        "tonsillitis",
        "voice disorders",
        "head/neck tumors",
        "sleep-related breathing disorders",
      ],
    },
    "gastroenterology-and-hepatology": {
      name: "Gastroenterology and Hepatology",
      slug: "gastroenterology-and-hepatology",
      url: "https://www.shifa.com.pk/specialities/gastroenterology-and-hepatology/islamabad",
      tagline:
        "Gastric ulcers, GERD, inflammatory bowel disease (IBD), liver cirrhosis, hepatitis B and C, fatty liver disease, gallbladder disorders, pancreatic conditions. Advanced endoscopy: upper GI, colonoscopy, ERCP, therapeutic procedures.",
      whenToConsult:
        "Gastric ulcers, GERD, inflammatory bowel disease (IBD), liver cirrhosis, hepatitis B and C, fatty liver disease, gallbladder disorders, pancreatic conditions. Advanced endoscopy: upper GI, colonoscopy, ERCP, therapeutic procedures.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Gastric ulcers, GERD, inflammatory bowel disease (IBD), liver cirrhosis, hepatitis B and C, fatty liver disease, gallbladder disorders, pancreatic conditions.",
        "Advanced endoscopy: upper GI, colonoscopy, ERCP, therapeutic procedures.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Gastric ulcers and GERD", description: "Gastric ulcers, GERD" },
        { title: "IBD and liver care", description: "inflammatory bowel disease (IBD), liver cirrhosis" },
        { title: "Hepatitis and fatty liver", description: "hepatitis B and C, fatty liver disease" },
        { title: "Gallbladder and pancreas", description: "gallbladder disorders, pancreatic conditions" },
        { title: "Advanced endoscopy", description: "upper GI, colonoscopy, ERCP, therapeutic procedures" },
      ],
      diagnostics: [
        { title: "Upper GI endoscopy", detail: "upper GI" },
        { title: "Colonoscopy", detail: "colonoscopy" },
        { title: "ERCP", detail: "ERCP" },
      ],
      treatments: [
        { title: "Gastric and GERD care", description: "Gastric ulcers, GERD" },
        { title: "Liver pathway", description: "liver cirrhosis, hepatitis B and C, fatty liver disease" },
        { title: "Pancreatic and gallbladder care", description: "gallbladder disorders, pancreatic conditions" },
        { title: "Therapeutic endoscopy", description: "therapeutic procedures" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Gastroenterology and Hepatology Service Volume 2000-2025",
        description: "Gastroenterology and hepatology service trend over time.",
        data: buildChartData(120),
      },
      consultSymptoms: [
        "gastric ulcers",
        "GERD",
        "inflammatory bowel disease",
        "liver cirrhosis",
        "hepatitis B and C",
        "fatty liver disease",
      ],
    },
    "general-surgery": {
      name: "General Surgery",
      slug: "general-surgery",
      url: "https://www.shifa.com.pk/specialities/general-surgery/islamabad",
      tagline:
        "Laparoscopic and open surgery for gallbladder, appendix, hernia, colorectal cancer, thyroid, breast, liver, pancreas, and bile duct conditions. Emergency and trauma surgery.",
      whenToConsult:
        "Laparoscopic and open surgery for gallbladder, appendix, hernia, colorectal cancer, thyroid, breast, liver, pancreas, and bile duct conditions. Emergency and trauma surgery.",
      heroStats: [
        { label: "Emergency Surgical Support", value: "24/7" },
        { label: "Laparoscopic Suites", value: "Advanced" },
        { label: "ICU Backup", value: "Integrated" },
      ],
      overviewParagraphs: [
        "Laparoscopic and open surgery for gallbladder, appendix, hernia, colorectal cancer, thyroid, breast, liver, pancreas, and bile duct conditions.",
        "Emergency and trauma surgery.",
      ],
      overviewStats: [
        { icon: "heart", value: 7, label: "Treatment pathways" },
        { icon: "shield", value: 6, label: "Facilities" },
        { icon: "stethoscope", value: 5, label: "Diagnostics" },
        { icon: "activity", value: 4, label: "Milestones" },
      ],
      facilities: [
        { title: "Modular operation theaters", description: "Modular operation theaters with advanced monitoring" },
        { title: "Laparoscopic suites", description: "Laparoscopic and minimally invasive surgery suites" },
        { title: "Recovery units", description: "Dedicated pre- and post-operative recovery units" },
        { title: "24/7 emergency surgical support", description: "24/7 emergency surgical support" },
        { title: "ICU and critical care backup", description: "ICU and critical care backup" },
        { title: "Multidisciplinary management", description: "Multidisciplinary patient management" },
      ],
      diagnostics: [
        { title: "Preoperative imaging", detail: "Preoperative imaging - Ultrasound, CT, MRI" },
        { title: "Endoscopy", detail: "Upper GI endoscopy and colonoscopy" },
        { title: "Biopsies and histopathology", detail: "Biopsies and histopathology" },
        { title: "Surgical risk labs", detail: "Surgical risk assessment labs" },
        { title: "Pre-anesthesia evaluation", detail: "Pre-anesthesia evaluation clinics" },
      ],
      treatments: [
        { title: "General & Laparoscopic Surgery", description: "gallbladder, appendix, hernia, GI" },
        { title: "Colorectal Surgery", description: "cancers, fistulas, hemorrhoids" },
        { title: "Endocrine Surgery", description: "thyroid, parathyroid, adrenal" },
        { title: "Breast Surgery", description: "lump excision, mastectomy, oncoplastic" },
        { title: "Hepatobiliary & Pancreatic", description: "liver, pancreas, bile duct" },
        { title: "Emergency & Trauma", description: "bleeding, perforations, accidents" },
        { title: "Minimally Invasive Surgery", description: "smaller incisions, faster recovery" },
      ],
      milestones: [
        { period: "1990s", achievement: "General surgery established - basic and emergency procedures" },
        { period: "1998-2007", achievement: "Basic laparoscopy: cholecystectomy, appendectomy" },
        { period: "2000s", achievement: "Advanced laparoscopy for complex cases; inguinal hernia repair" },
        { period: "2009", achievement: "Sleeve gastrectomy and hydatid cystectomy introduced" },
      ],
      chart: {
        title: "General Surgery Service Volume 2000-2025",
        description: "General surgery service trend over time.",
        data: buildChartData(170),
      },
      consultSymptoms: [
        "gallbladder",
        "appendix",
        "hernia",
        "colorectal cancer",
        "emergency and trauma surgery",
        "bile duct conditions",
      ],
    },
    "infectious-diseases": {
      name: "Infectious Diseases",
      slug: "infectious-diseases",
      url: "https://www.shifa.com.pk/specialities/infectious-diseases/islamabad",
      tagline:
        "Bacterial, viral, fungal, and parasitic infections - TB, hepatitis B/C, dengue, HIV/AIDS, typhoid, MDR organisms. Leads hospital-wide infection prevention and control.",
      whenToConsult:
        "Bacterial, viral, fungal, and parasitic infections - TB, hepatitis B/C, dengue, HIV/AIDS, typhoid, MDR organisms. Leads hospital-wide infection prevention and control.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Bacterial, viral, fungal, and parasitic infections - TB, hepatitis B/C, dengue, HIV/AIDS, typhoid, MDR organisms.",
        "Leads hospital-wide infection prevention and control.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Infectious disease care", description: "Bacterial, viral, fungal, and parasitic infections" },
        { title: "TB and hepatitis", description: "TB, hepatitis B/C" },
        { title: "Dengue and HIV/AIDS", description: "dengue, HIV/AIDS" },
        { title: "Typhoid and MDR organisms", description: "typhoid, MDR organisms" },
        { title: "Infection prevention and control", description: "Leads hospital-wide infection prevention and control" },
      ],
      diagnostics: [
        { title: "Infectious disease workup", detail: "Infectious disease workup - fever, TB, hepatitis, dengue" },
        { title: "Microbiology", detail: "microbiology" },
        { title: "Molecular diagnostics", detail: "molecular diagnostics" },
      ],
      treatments: [
        { title: "TB pathway", description: "TB" },
        { title: "Hepatitis pathway", description: "hepatitis B/C" },
        { title: "Dengue pathway", description: "dengue" },
        { title: "HIV/AIDS pathway", description: "HIV/AIDS" },
        { title: "MDR infection pathway", description: "MDR organisms" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Infectious Diseases Service Volume 2000-2025",
        description: "Infectious diseases service trend over time.",
        data: buildChartData(115),
      },
      consultSymptoms: ["TB", "hepatitis B/C", "dengue", "HIV/AIDS", "typhoid", "MDR organisms"],
    },
    "internal-medicine": {
      name: "Internal Medicine",
      slug: "internal-medicine",
      url: "https://www.shifa.com.pk/specialities/internal-medicine/islamabad",
      tagline:
        "Adult primary care and complex chronic disease management - diabetes, hypertension, thyroid, respiratory, digestive, and infectious conditions. Geriatric and palliative pathways.",
      whenToConsult:
        "Adult primary care and complex chronic disease management - diabetes, hypertension, thyroid, respiratory, digestive, and infectious conditions. Geriatric and palliative pathways.",
      heroStats: [
        { label: "Clinical Divisions", value: "3" },
        { label: "Clinical Sections", value: "12" },
        { label: "Clinical Specialities", value: "45+" },
      ],
      overviewParagraphs: [
        "Adult primary care and complex chronic disease management - diabetes, hypertension, thyroid, respiratory, digestive, and infectious conditions.",
        "Geriatric and palliative pathways.",
        "Clinical Divisions: Internal Medicine · Cardiology · Gastroenterology.",
        "Clinical Sections: Dermatology · Endocrinology · Nephrology · Neurology · Radiation Oncology · Medical Oncology · Psychiatry · Pulmonology & Critical Care · Rheumatology · Neonatology · Infectious Diseases · Physical Medicine & Rehabilitation.",
      ],
      overviewStats: [
        { icon: "heart", value: 3, label: "Clinical Divisions" },
        { icon: "shield", value: 12, label: "Clinical Sections" },
        { icon: "stethoscope", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "activity", value: 300, suffix: "+", label: "Clinical Consultants" },
      ],
      facilities: [
        { title: "Clinical Divisions", description: "Internal Medicine · Cardiology · Gastroenterology" },
        { title: "Clinical Sections", description: "Dermatology · Endocrinology · Nephrology · Neurology · Radiation Oncology · Medical Oncology · Psychiatry · Pulmonology & Critical Care · Rheumatology · Neonatology · Infectious Diseases · Physical Medicine & Rehabilitation" },
        { title: "Preventive screenings", description: "Preventive screenings and full health checkups" },
        { title: "Cardiac risk evaluation", description: "Diabetes, hypertension, and cardiac risk evaluation" },
        { title: "Infectious disease workup", description: "Infectious disease workup - fever, TB, hepatitis, dengue" },
        { title: "Chronic follow-up", description: "Chronic disease long-term follow-up programs" },
      ],
      diagnostics: [
        { title: "Preventive screenings", detail: "Preventive screenings and full health checkups" },
        { title: "Cardiac risk evaluation", detail: "Diabetes, hypertension, and cardiac risk evaluation" },
        { title: "Infectious disease workup", detail: "Infectious disease workup - fever, TB, hepatitis, dengue" },
        { title: "Thyroid and metabolic workup", detail: "Thyroid, hormonal, and metabolic disorder management" },
        { title: "Respiratory workup", detail: "Respiratory workup - asthma, COPD, pneumonia" },
      ],
      treatments: [
        { title: "Adult primary care", description: "Adult primary care" },
        { title: "Chronic disease management", description: "complex chronic disease management" },
        { title: "Geriatric pathways", description: "Geriatric pathways" },
        { title: "Palliative pathways", description: "palliative pathways" },
        { title: "Gastroenterology coordination", description: "Gastroenterology coordination" },
        { title: "Long-term follow-up", description: "Chronic disease long-term follow-up programs" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Clinical Divisions and Clinical Sections integrated" },
        { period: "Present", achievement: "45+ clinical specialities" },
      ],
      chart: {
        title: "Internal Medicine Service Volume 2000-2025",
        description: "Internal medicine service trend over time.",
        data: buildChartData(190),
      },
      consultSymptoms: [
        "diabetes",
        "hypertension",
        "thyroid",
        "respiratory conditions",
        "digestive conditions",
        "infectious conditions",
      ],
    },
    nephrology: {
      name: "Nephrology",
      slug: "nephrology",
      url: "https://www.shifa.com.pk/specialities/nephrology/islamabad",
      tagline:
        "Acute kidney injury, chronic kidney disease (CKD), end-stage renal disease (ESRD), glomerulonephritis, electrolyte disorders, hypertension, hemodialysis, and peritoneal dialysis. Integrated with Kidney Transplant program.",
      whenToConsult:
        "Acute kidney injury, chronic kidney disease (CKD), end-stage renal disease (ESRD), glomerulonephritis, electrolyte disorders, hypertension, hemodialysis, and peritoneal dialysis. Integrated with Kidney Transplant program.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Acute kidney injury, chronic kidney disease (CKD), end-stage renal disease (ESRD), glomerulonephritis, electrolyte disorders, hypertension, hemodialysis, and peritoneal dialysis.",
        "Integrated with Kidney Transplant program.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Kidney injury care", description: "Acute kidney injury" },
        { title: "CKD and ESRD care", description: "chronic kidney disease (CKD), end-stage renal disease (ESRD)" },
        { title: "Glomerulonephritis and electrolyte disorders", description: "glomerulonephritis, electrolyte disorders" },
        { title: "Hypertension care", description: "hypertension" },
        { title: "Dialysis pathways", description: "hemodialysis, and peritoneal dialysis" },
        { title: "Kidney transplant integration", description: "Integrated with Kidney Transplant program" },
      ],
      diagnostics: [
        { title: "Kidney disease assessment", detail: "Acute kidney injury, chronic kidney disease (CKD), end-stage renal disease (ESRD)" },
        { title: "Electrolyte disorder assessment", detail: "electrolyte disorders" },
        { title: "Transplant integration", detail: "Integrated with Kidney Transplant program" },
      ],
      treatments: [
        { title: "CKD management", description: "chronic kidney disease (CKD)" },
        { title: "ESRD management", description: "end-stage renal disease (ESRD)" },
        { title: "Dialysis", description: "hemodialysis, and peritoneal dialysis" },
        { title: "Transplant pathway", description: "Integrated with Kidney Transplant program" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Nephrology Service Volume 2000-2025",
        description: "Nephrology service trend over time.",
        data: buildChartData(105),
      },
      consultSymptoms: [
        "acute kidney injury",
        "chronic kidney disease",
        "end-stage renal disease",
        "electrolyte disorders",
        "hemodialysis",
        "peritoneal dialysis",
      ],
    },
    neurology: {
      name: "Neurology",
      slug: "neurology",
      url: "https://www.shifa.com.pk/specialities/neurology/islamabad",
      tagline:
        "Stroke, epilepsy, Parkinson's disease, multiple sclerosis, migraine, dementia, peripheral neuropathy, and nerve disorders. Access to 3 Tesla MRI and advanced neuroimaging.",
      whenToConsult:
        "Stroke, epilepsy, Parkinson's disease, multiple sclerosis, migraine, dementia, peripheral neuropathy, and nerve disorders. Access to 3 Tesla MRI and advanced neuroimaging.",
      heroStats: [
        { label: "MRI Platform", value: "3 Tesla" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Stroke, epilepsy, Parkinson's disease, multiple sclerosis, migraine, dementia, peripheral neuropathy, and nerve disorders.",
        "Access to 3 Tesla MRI and advanced neuroimaging.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 3, label: "Tesla MRI" },
      ],
      facilities: [
        { title: "Stroke and epilepsy care", description: "Stroke, epilepsy" },
        { title: "Parkinson's and multiple sclerosis", description: "Parkinson's disease, multiple sclerosis" },
        { title: "Migraine and dementia", description: "migraine, dementia" },
        { title: "Peripheral neuropathy", description: "peripheral neuropathy, and nerve disorders" },
        { title: "Advanced neuroimaging", description: "Access to 3 Tesla MRI and advanced neuroimaging" },
      ],
      diagnostics: [
        { title: "3 Tesla MRI", detail: "Access to 3 Tesla MRI and advanced neuroimaging" },
        { title: "Neurological assessment", detail: "Stroke, epilepsy, Parkinson's disease, multiple sclerosis, migraine, dementia, peripheral neuropathy, and nerve disorders" },
        { title: "Advanced neuroimaging", detail: "advanced neuroimaging" },
      ],
      treatments: [
        { title: "Stroke pathway", description: "Stroke" },
        { title: "Epilepsy pathway", description: "epilepsy" },
        { title: "Parkinson's pathway", description: "Parkinson's disease" },
        { title: "Multiple sclerosis pathway", description: "multiple sclerosis" },
        { title: "Migraine and dementia pathway", description: "migraine, dementia" },
        { title: "Neuropathy pathway", description: "peripheral neuropathy, and nerve disorders" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Access to 3 Tesla MRI and advanced neuroimaging" },
        { period: "Present", achievement: "45+ clinical specialities" },
      ],
      chart: {
        title: "Neurology Service Volume 2000-2025",
        description: "Neurology service trend over time.",
        data: buildChartData(95),
      },
      consultSymptoms: [
        "stroke",
        "epilepsy",
        "Parkinson's disease",
        "multiple sclerosis",
        "migraine",
        "dementia",
      ],
    },
    neurosurgery: {
      name: "Neurosurgery",
      slug: "neurosurgery",
      url: "https://www.shifa.com.pk/specialities/neurosurgery/islamabad",
      tagline:
        "Brain tumors, cerebrovascular disease (aneurysms, AVMs), spinal disc disorders, spinal cord compression, hydrocephalus, head trauma. Coordinated with Neurology and Radiology.",
      whenToConsult:
        "Brain tumors, cerebrovascular disease (aneurysms, AVMs), spinal disc disorders, spinal cord compression, hydrocephalus, head trauma. Coordinated with Neurology and Radiology.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Brain tumors, cerebrovascular disease (aneurysms, AVMs), spinal disc disorders, spinal cord compression, hydrocephalus, head trauma.",
        "Coordinated with Neurology and Radiology.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Brain tumor pathway", description: "Brain tumors" },
        { title: "Cerebrovascular pathway", description: "cerebrovascular disease (aneurysms, AVMs)" },
        { title: "Spinal pathway", description: "spinal disc disorders, spinal cord compression" },
        { title: "Hydrocephalus and trauma", description: "hydrocephalus, head trauma" },
        { title: "Neurology and Radiology coordination", description: "Coordinated with Neurology and Radiology" },
      ],
      diagnostics: [
        { title: "Cerebrovascular evaluation", detail: "cerebrovascular disease (aneurysms, AVMs)" },
        { title: "Spinal evaluation", detail: "spinal disc disorders, spinal cord compression" },
        { title: "Neurology and Radiology coordination", detail: "Coordinated with Neurology and Radiology" },
      ],
      treatments: [
        { title: "Brain tumor care", description: "Brain tumors" },
        { title: "Cerebrovascular care", description: "cerebrovascular disease (aneurysms, AVMs)" },
        { title: "Spinal care", description: "spinal disc disorders, spinal cord compression" },
        { title: "Hydrocephalus care", description: "hydrocephalus" },
        { title: "Head trauma care", description: "head trauma" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Neurosurgery Service Volume 2000-2025",
        description: "Neurosurgery service trend over time.",
        data: buildChartData(108),
      },
      consultSymptoms: [
        "brain tumors",
        "cerebrovascular disease",
        "spinal disc disorders",
        "spinal cord compression",
        "hydrocephalus",
        "head trauma",
      ],
    },
    "obstetrics-and-gynaecology": {
      name: "Obstetrics & Gynaecology",
      slug: "obstetrics-and-gynaecology",
      url: "https://www.shifa.com.pk/specialities/obstetrics-and-gynaecology/islamabad",
      tagline:
        "Antenatal care, high-risk pregnancy, normal and operative delivery, gynaecological oncology, hysteroscopy, laparoscopic gynaecological surgery, and fertility evaluation.",
      whenToConsult:
        "Antenatal care, high-risk pregnancy, normal and operative delivery, gynaecological oncology, hysteroscopy, laparoscopic gynaecological surgery, and fertility evaluation.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Antenatal care, high-risk pregnancy, normal and operative delivery, gynaecological oncology, hysteroscopy, laparoscopic gynaecological surgery, and fertility evaluation.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Antenatal care", description: "Antenatal care" },
        { title: "High-risk pregnancy", description: "high-risk pregnancy" },
        { title: "Normal and operative delivery", description: "normal and operative delivery" },
        { title: "Gynaecological oncology", description: "gynaecological oncology" },
        { title: "Hysteroscopy", description: "hysteroscopy" },
        { title: "Laparoscopic gynaecological surgery", description: "laparoscopic gynaecological surgery" },
      ],
      diagnostics: [
        { title: "Pregnancy pathway evaluation", detail: "Antenatal care, high-risk pregnancy" },
        { title: "Gynaecological oncology evaluation", detail: "gynaecological oncology" },
        { title: "Fertility evaluation", detail: "fertility evaluation" },
      ],
      treatments: [
        { title: "Delivery pathways", description: "normal and operative delivery" },
        { title: "Gynaecological oncology pathway", description: "gynaecological oncology" },
        { title: "Hysteroscopy pathway", description: "hysteroscopy" },
        { title: "Laparoscopic surgery pathway", description: "laparoscopic gynaecological surgery" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Obstetrics & Gynaecology Service Volume 2000-2025",
        description: "Obstetrics and gynaecology service trend over time.",
        data: buildChartData(135),
      },
      consultSymptoms: [
        "high-risk pregnancy",
        "operative delivery",
        "gynaecological oncology",
        "hysteroscopy",
        "fertility evaluation",
      ],
    },
    "medical-oncology": {
      name: "Oncology - Medical",
      slug: "medical-oncology",
      url: "https://www.shifa.com.pk/specialities/medical-oncology/islamabad",
      tagline:
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers. Part of Shifa Cancer Center, coordinating multidisciplinary tumor boards with radiation and surgical oncology.",
      whenToConsult:
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers. Part of Shifa Cancer Center, coordinating multidisciplinary tumor boards with radiation and surgical oncology.",
      heroStats: [
        { label: "Shifa Cancer Center", value: "Integrated" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers.",
        "Part of Shifa Cancer Center, coordinating multidisciplinary tumor boards with radiation and surgical oncology.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Shifa Cancer Center", description: "Part of Shifa Cancer Center" },
        { title: "Multidisciplinary tumor boards", description: "coordinating multidisciplinary tumor boards with radiation and surgical oncology" },
        { title: "Chemotherapy", description: "Chemotherapy" },
        { title: "Targeted therapy", description: "targeted therapy" },
        { title: "Immunotherapy", description: "immunotherapy" },
        { title: "Hormonal therapy", description: "hormonal therapy" },
      ],
      diagnostics: [
        { title: "Tumor board review", detail: "coordinating multidisciplinary tumor boards with radiation and surgical oncology" },
        { title: "Medical oncology assessment", detail: "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers" },
        { title: "Cancer center integration", detail: "Part of Shifa Cancer Center" },
      ],
      treatments: [
        { title: "Chemotherapy", description: "Chemotherapy" },
        { title: "Targeted therapy", description: "targeted therapy" },
        { title: "Immunotherapy", description: "immunotherapy" },
        { title: "Hormonal therapy", description: "hormonal therapy" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Shifa Cancer Center" },
        { period: "Present", achievement: "Multidisciplinary tumor boards" },
      ],
      chart: {
        title: "Medical Oncology Service Volume 2000-2025",
        description: "Medical oncology service trend over time.",
        data: buildChartData(130),
      },
      consultSymptoms: ["chemotherapy", "targeted therapy", "immunotherapy", "hormonal therapy", "all cancers"],
    },
    "radiation-oncology": {
      name: "Oncology - Radiation",
      slug: "radiation-oncology",
      url: "https://www.shifa.com.pk/specialities/radiation-oncology/islamabad",
      tagline: "Advanced radiotherapy for solid tumors within Shifa Cancer Center.",
      whenToConsult: "Advanced radiotherapy for solid tumors within Shifa Cancer Center.",
      heroStats: [
        { label: "Shifa Cancer Center", value: "Integrated" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: ["Advanced radiotherapy for solid tumors within Shifa Cancer Center."],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Advanced radiotherapy", description: "Advanced radiotherapy for solid tumors" },
        { title: "Shifa Cancer Center", description: "within Shifa Cancer Center" },
      ],
      diagnostics: [
        { title: "Radiation oncology assessment", detail: "Advanced radiotherapy for solid tumors" },
        { title: "Cancer center integration", detail: "within Shifa Cancer Center" },
      ],
      treatments: [{ title: "Advanced radiotherapy", description: "Advanced radiotherapy for solid tumors" }],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Shifa Cancer Center" },
        { period: "Present", achievement: "Advanced radiotherapy" },
      ],
      chart: {
        title: "Radiation Oncology Service Volume 2000-2025",
        description: "Radiation oncology service trend over time.",
        data: buildChartData(125),
      },
      consultSymptoms: ["solid tumors", "advanced radiotherapy"],
    },
    oncology: {
      name: "Oncology",
      slug: "oncology",
      url: "https://www.shifa.com.pk/specialities/oncology/islamabad",
      tagline:
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers. Advanced radiotherapy for solid tumors within Shifa Cancer Center.",
      whenToConsult:
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers. Advanced radiotherapy for solid tumors within Shifa Cancer Center.",
      heroStats: [
        { label: "Shifa Cancer Center", value: "Integrated" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers.",
        "Advanced radiotherapy for solid tumors within Shifa Cancer Center.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Shifa Cancer Center", description: "Shifa Cancer Center" },
        { title: "Chemotherapy", description: "Chemotherapy" },
        { title: "Targeted therapy", description: "targeted therapy" },
        { title: "Immunotherapy", description: "immunotherapy" },
        { title: "Hormonal therapy", description: "hormonal therapy" },
        { title: "Advanced radiotherapy", description: "Advanced radiotherapy for solid tumors" },
      ],
      diagnostics: [
        { title: "Cancer center assessment", detail: "Shifa Cancer Center" },
        { title: "Medical oncology assessment", detail: "Chemotherapy, targeted therapy, immunotherapy, and hormonal therapy for all cancers" },
        { title: "Radiation oncology assessment", detail: "Advanced radiotherapy for solid tumors" },
      ],
      treatments: [
        { title: "Chemotherapy", description: "Chemotherapy" },
        { title: "Targeted therapy", description: "targeted therapy" },
        { title: "Immunotherapy", description: "immunotherapy" },
        { title: "Hormonal therapy", description: "hormonal therapy" },
        { title: "Advanced radiotherapy", description: "Advanced radiotherapy for solid tumors" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Shifa Cancer Center" },
        { period: "Present", achievement: "Medical + radiation + surgical oncology" },
      ],
      chart: {
        title: "Oncology Service Volume 2000-2025",
        description: "Oncology service trend over time.",
        data: buildChartData(130),
      },
      consultSymptoms: ["all cancers", "chemotherapy", "targeted therapy", "immunotherapy", "hormonal therapy", "solid tumors"],
    },
    ophthalmology: {
      name: "Ophthalmology",
      slug: "ophthalmology",
      url: "https://www.shifa.com.pk/specialities/ophthalmology/islamabad",
      tagline:
        "Cataracts, glaucoma, diabetic retinopathy, corneal disease, macular degeneration, strabismus, and retinal disorders.",
      whenToConsult:
        "Cataracts, glaucoma, diabetic retinopathy, corneal disease, macular degeneration, strabismus, and retinal disorders.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Cataracts, glaucoma, diabetic retinopathy, corneal disease, macular degeneration, strabismus, and retinal disorders.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Cataract care", description: "Cataracts" },
        { title: "Glaucoma care", description: "glaucoma" },
        { title: "Diabetic retinopathy care", description: "diabetic retinopathy" },
        { title: "Corneal and macular care", description: "corneal disease, macular degeneration" },
        { title: "Strabismus and retinal care", description: "strabismus, and retinal disorders" },
      ],
      diagnostics: [
        { title: "Cataract and glaucoma assessment", detail: "Cataracts, glaucoma" },
        { title: "Retina assessment", detail: "diabetic retinopathy, and retinal disorders" },
        { title: "Corneal and macular assessment", detail: "corneal disease, macular degeneration" },
      ],
      treatments: [
        { title: "Cataract pathway", description: "Cataracts" },
        { title: "Glaucoma pathway", description: "glaucoma" },
        { title: "Retinal pathway", description: "retinal disorders" },
        { title: "Corneal pathway", description: "corneal disease" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Ophthalmology Service Volume 2000-2025",
        description: "Ophthalmology service trend over time.",
        data: buildChartData(98),
      },
      consultSymptoms: ["cataracts", "glaucoma", "diabetic retinopathy", "corneal disease", "macular degeneration", "retinal disorders"],
    },
    orthopaedics: {
      name: "Orthopaedics",
      slug: "orthopaedics",
      url: "https://www.shifa.com.pk/specialities/orthopaedics/islamabad",
      tagline:
        "Yes. Total knee replacement and total hip replacement. Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      whenToConsult:
        "Yes. Total knee replacement and total hip replacement. Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      heroStats: [
        { label: "Joint Replacement", value: "TKR/THR" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Yes. Total knee replacement and total hip replacement.",
        "Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Total knee replacement", description: "Total knee replacement" },
        { title: "Total hip replacement", description: "Total hip replacement" },
        { title: "Trauma surgery", description: "trauma surgery" },
        { title: "Spine surgery", description: "spine surgery" },
        { title: "Sports medicine", description: "sports medicine" },
        { title: "Fractures and ligament injuries", description: "fractures, and ligament injuries" },
      ],
      diagnostics: [
        { title: "Orthopaedic assessment", detail: "Total knee replacement and total hip replacement" },
        { title: "Trauma and spine assessment", detail: "trauma surgery, spine surgery" },
        { title: "Sports injury assessment", detail: "sports medicine, fractures, and ligament injuries" },
      ],
      treatments: [
        { title: "Total knee replacement", description: "Total knee replacement" },
        { title: "Total hip replacement", description: "Total hip replacement" },
        { title: "Trauma surgery", description: "trauma surgery" },
        { title: "Spine surgery", description: "spine surgery" },
        { title: "Sports medicine", description: "sports medicine" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Orthopaedics Service Volume 2000-2025",
        description: "Orthopaedics service trend over time.",
        data: buildChartData(110),
      },
      consultSymptoms: ["total knee replacement", "total hip replacement", "trauma surgery", "spine surgery", "sports medicine", "ligament injuries"],
    },
    orthopedics: {
      name: "Orthopedics",
      slug: "orthopedics",
      url: "https://www.shifa.com.pk/specialities/orthopedics/islamabad",
      tagline:
        "Yes. Total knee replacement and total hip replacement. Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      whenToConsult:
        "Yes. Total knee replacement and total hip replacement. Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      heroStats: [
        { label: "Joint Replacement", value: "TKR/THR" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Yes. Total knee replacement and total hip replacement.",
        "Also trauma surgery, spine surgery, sports medicine, fractures, and ligament injuries.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Total knee replacement", description: "Total knee replacement" },
        { title: "Total hip replacement", description: "Total hip replacement" },
        { title: "Trauma surgery", description: "trauma surgery" },
        { title: "Spine surgery", description: "spine surgery" },
        { title: "Sports medicine", description: "sports medicine" },
        { title: "Fractures and ligament injuries", description: "fractures, and ligament injuries" },
      ],
      diagnostics: [
        { title: "Orthopedic assessment", detail: "Total knee replacement and total hip replacement" },
        { title: "Trauma and spine assessment", detail: "trauma surgery, spine surgery" },
        { title: "Sports injury assessment", detail: "sports medicine, fractures, and ligament injuries" },
      ],
      treatments: [
        { title: "Total knee replacement", description: "Total knee replacement" },
        { title: "Total hip replacement", description: "Total hip replacement" },
        { title: "Trauma surgery", description: "trauma surgery" },
        { title: "Spine surgery", description: "spine surgery" },
        { title: "Sports medicine", description: "sports medicine" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Orthopedics Service Volume 2000-2025",
        description: "Orthopedics service trend over time.",
        data: buildChartData(110),
      },
      consultSymptoms: ["total knee replacement", "total hip replacement", "trauma surgery", "spine surgery", "sports medicine", "ligament injuries"],
    },
    paediatrics: {
      name: "Paediatrics",
      slug: "paediatrics",
      url: "https://www.shifa.com.pk/specialities/paediatrics/islamabad",
      tagline: "Care from birth through adolescence. Neonatology (dedicated NICU), pediatric subspecialties, pediatric surgery, vaccination clinics.",
      whenToConsult: "Care from birth through adolescence. Neonatology (dedicated NICU), pediatric subspecialties, pediatric surgery, vaccination clinics.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Care from birth through adolescence.",
        "Neonatology (dedicated NICU), pediatric subspecialties, pediatric surgery, vaccination clinics.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Birth through adolescence", description: "Care from birth through adolescence" },
        { title: "Neonatology", description: "Neonatology (dedicated NICU)" },
        { title: "Pediatric subspecialties", description: "pediatric subspecialties" },
        { title: "Pediatric surgery", description: "pediatric surgery" },
        { title: "Vaccination clinics", description: "vaccination clinics" },
      ],
      diagnostics: [
        { title: "Pediatric assessment", detail: "Care from birth through adolescence" },
        { title: "Neonatology pathway", detail: "Neonatology (dedicated NICU)" },
        { title: "Subspecialty assessment", detail: "pediatric subspecialties" },
      ],
      treatments: [
        { title: "Pediatric pathway", description: "Care from birth through adolescence" },
        { title: "Neonatology pathway", description: "Neonatology (dedicated NICU)" },
        { title: "Pediatric surgery pathway", description: "pediatric surgery" },
        { title: "Vaccination pathway", description: "vaccination clinics" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Paediatrics Service Volume 2000-2025",
        description: "Paediatrics service trend over time.",
        data: buildChartData(125),
      },
      consultSymptoms: ["neonatology", "pediatric subspecialties", "pediatric surgery", "vaccination clinics"],
    },
    "pathology-and-laboratory-medicine": {
      name: "Pathology & Laboratory Medicine",
      slug: "pathology-and-laboratory-medicine",
      url: "https://www.shifa.com.pk/specialities/pathology-and-laboratory-medicine/islamabad",
      tagline:
        "Total Lab Automation (TLA) - among Pakistan's first - robotic processing across nine subspecialties: hematology, microbiology, biochemistry, histopathology, immunology, molecular diagnostics, blood bank, cytology, and clinical chemistry.",
      whenToConsult:
        "Total Lab Automation (TLA) - among Pakistan's first - robotic processing across nine subspecialties: hematology, microbiology, biochemistry, histopathology, immunology, molecular diagnostics, blood bank, cytology, and clinical chemistry.",
      heroStats: [
        { label: "Lab Subspecialties", value: "9" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Total Lab Automation (TLA) - among Pakistan's first - robotic processing across nine subspecialties: hematology, microbiology, biochemistry, histopathology, immunology, molecular diagnostics, blood bank, cytology, and clinical chemistry.",
      ],
      overviewStats: [
        { icon: "heart", value: 9, label: "Lab Subspecialties" },
        { icon: "shield", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Total Lab Automation", description: "Total Lab Automation (TLA) - among Pakistan's first - robotic processing" },
        { title: "Hematology and microbiology", description: "hematology, microbiology" },
        { title: "Biochemistry and histopathology", description: "biochemistry, histopathology" },
        { title: "Immunology and molecular diagnostics", description: "immunology, molecular diagnostics" },
        { title: "Blood bank and cytology", description: "blood bank, cytology" },
        { title: "Clinical chemistry", description: "clinical chemistry" },
      ],
      diagnostics: [
        { title: "Hematology", detail: "hematology" },
        { title: "Microbiology", detail: "microbiology" },
        { title: "Biochemistry", detail: "biochemistry" },
        { title: "Histopathology", detail: "histopathology" },
        { title: "Molecular diagnostics", detail: "molecular diagnostics" },
        { title: "Clinical chemistry", detail: "clinical chemistry" },
      ],
      treatments: [
        { title: "Laboratory support pathway", description: "Total Lab Automation (TLA)" },
        { title: "Diagnostic support", description: "robotic processing across nine subspecialties" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Total Lab Automation (TLA)" },
        { period: "Present", achievement: "Nine subspecialties" },
      ],
      chart: {
        title: "Pathology & Laboratory Medicine Service Volume 2000-2025",
        description: "Pathology and laboratory medicine service trend over time.",
        data: buildChartData(220),
      },
      consultSymptoms: ["hematology", "microbiology", "histopathology", "molecular diagnostics", "clinical chemistry"],
    },
    "physical-medicine-and-rehabilitation": {
      name: "Physical Medicine & Rehabilitation",
      slug: "physical-medicine-and-rehabilitation",
      url: "https://www.shifa.com.pk/specialities/physical-medicine-and-rehabilitation/islamabad",
      tagline:
        "Stroke recovery, post-orthopedic rehabilitation, spinal cord injury, neurological conditions, and chronic pain. Physiotherapy, occupational therapy, and speech therapy.",
      whenToConsult:
        "Stroke recovery, post-orthopedic rehabilitation, spinal cord injury, neurological conditions, and chronic pain. Physiotherapy, occupational therapy, and speech therapy.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Stroke recovery, post-orthopedic rehabilitation, spinal cord injury, neurological conditions, and chronic pain.",
        "Physiotherapy, occupational therapy, and speech therapy.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Stroke recovery", description: "Stroke recovery" },
        { title: "Post-orthopedic rehabilitation", description: "post-orthopedic rehabilitation" },
        { title: "Spinal cord injury", description: "spinal cord injury" },
        { title: "Neurological and chronic pain", description: "neurological conditions, and chronic pain" },
        { title: "Therapy services", description: "Physiotherapy, occupational therapy, and speech therapy" },
      ],
      diagnostics: [
        { title: "Rehabilitation assessment", detail: "Stroke recovery, post-orthopedic rehabilitation" },
        { title: "Neurological rehabilitation assessment", detail: "neurological conditions, and chronic pain" },
        { title: "Therapy planning", detail: "Physiotherapy, occupational therapy, and speech therapy" },
      ],
      treatments: [
        { title: "Stroke recovery pathway", description: "Stroke recovery" },
        { title: "Orthopedic rehabilitation pathway", description: "post-orthopedic rehabilitation" },
        { title: "Spinal cord pathway", description: "spinal cord injury" },
        { title: "Therapy pathway", description: "Physiotherapy, occupational therapy, and speech therapy" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Physical Medicine & Rehabilitation Service Volume 2000-2025",
        description: "Physical medicine and rehabilitation service trend over time.",
        data: buildChartData(102),
      },
      consultSymptoms: ["stroke recovery", "post-orthopedic rehabilitation", "spinal cord injury", "chronic pain"],
    },
    "plastic-surgery": {
      name: "Plastic Surgery",
      slug: "plastic-surgery",
      url: "https://www.shifa.com.pk/specialities/plastic-surgery/islamabad",
      tagline:
        "Burns reconstruction, hand surgery, head and neck reconstruction, breast surgery, pediatric plastic surgery, and aesthetic/cosmetic procedures.",
      whenToConsult:
        "Burns reconstruction, hand surgery, head and neck reconstruction, breast surgery, pediatric plastic surgery, and aesthetic/cosmetic procedures.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Burns reconstruction, hand surgery, head and neck reconstruction, breast surgery, pediatric plastic surgery, and aesthetic/cosmetic procedures.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Burns reconstruction", description: "Burns reconstruction" },
        { title: "Hand surgery", description: "hand surgery" },
        { title: "Head and neck reconstruction", description: "head and neck reconstruction" },
        { title: "Breast surgery", description: "breast surgery" },
        { title: "Pediatric plastic surgery", description: "pediatric plastic surgery" },
        { title: "Aesthetic and cosmetic", description: "aesthetic/cosmetic procedures" },
      ],
      diagnostics: [
        { title: "Reconstructive assessment", detail: "Burns reconstruction, hand surgery, head and neck reconstruction" },
        { title: "Breast and pediatric assessment", detail: "breast surgery, pediatric plastic surgery" },
        { title: "Aesthetic assessment", detail: "aesthetic/cosmetic procedures" },
      ],
      treatments: [
        { title: "Burns reconstruction", description: "Burns reconstruction" },
        { title: "Hand surgery", description: "hand surgery" },
        { title: "Head and neck reconstruction", description: "head and neck reconstruction" },
        { title: "Breast surgery", description: "breast surgery" },
        { title: "Pediatric plastic surgery", description: "pediatric plastic surgery" },
        { title: "Aesthetic and cosmetic procedures", description: "aesthetic/cosmetic procedures" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Plastic Surgery Service Volume 2000-2025",
        description: "Plastic surgery service trend over time.",
        data: buildChartData(88),
      },
      consultSymptoms: ["burns reconstruction", "hand surgery", "head and neck reconstruction", "breast surgery", "pediatric plastic surgery"],
    },
    psychiatry: {
      name: "Psychiatry",
      slug: "psychiatry",
      url: "https://www.shifa.com.pk/specialities/psychiatry/islamabad",
      tagline:
        "Depression, anxiety, bipolar disorder, schizophrenia, OCD, addiction, and personality disorders. Inpatient and outpatient mental health services.",
      whenToConsult:
        "Depression, anxiety, bipolar disorder, schizophrenia, OCD, addiction, and personality disorders. Inpatient and outpatient mental health services.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Depression, anxiety, bipolar disorder, schizophrenia, OCD, addiction, and personality disorders.",
        "Inpatient and outpatient mental health services.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Depression and anxiety care", description: "Depression, anxiety" },
        { title: "Bipolar and schizophrenia care", description: "bipolar disorder, schizophrenia" },
        { title: "OCD and addiction care", description: "OCD, addiction" },
        { title: "Personality disorder care", description: "personality disorders" },
        { title: "Inpatient and outpatient services", description: "Inpatient and outpatient mental health services" },
      ],
      diagnostics: [
        { title: "Mental health assessment", detail: "Depression, anxiety, bipolar disorder, schizophrenia, OCD, addiction, and personality disorders" },
        { title: "Inpatient evaluation", detail: "Inpatient and outpatient mental health services" },
        { title: "Outpatient evaluation", detail: "Inpatient and outpatient mental health services" },
      ],
      treatments: [
        { title: "Depression and anxiety pathway", description: "Depression, anxiety" },
        { title: "Bipolar and schizophrenia pathway", description: "bipolar disorder, schizophrenia" },
        { title: "OCD and addiction pathway", description: "OCD, addiction" },
        { title: "Inpatient and outpatient pathway", description: "Inpatient and outpatient mental health services" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Psychiatry Service Volume 2000-2025",
        description: "Psychiatry service trend over time.",
        data: buildChartData(86),
      },
      consultSymptoms: ["depression", "anxiety", "bipolar disorder", "schizophrenia", "OCD", "addiction"],
    },
    "pulmonology-and-critical-care": {
      name: "Pulmonology & Critical Care",
      slug: "pulmonology-and-critical-care",
      url: "https://www.shifa.com.pk/specialities/pulmonology-and-critical-care/islamabad",
      tagline:
        "Asthma, COPD, pneumonia, TB, lung cancer, interstitial lung disease, pulmonary hypertension, sleep-disordered breathing. Combined with ICU for critically ill patients.",
      whenToConsult:
        "Asthma, COPD, pneumonia, TB, lung cancer, interstitial lung disease, pulmonary hypertension, sleep-disordered breathing. Combined with ICU for critically ill patients.",
      heroStats: [
        { label: "ICU Integration", value: "Combined" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Asthma, COPD, pneumonia, TB, lung cancer, interstitial lung disease, pulmonary hypertension, sleep-disordered breathing.",
        "Combined with ICU for critically ill patients.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Asthma and COPD care", description: "Asthma, COPD" },
        { title: "Pneumonia and TB care", description: "pneumonia, TB" },
        { title: "Lung cancer and ILD care", description: "lung cancer, interstitial lung disease" },
        { title: "Pulmonary hypertension", description: "pulmonary hypertension" },
        { title: "Sleep-disordered breathing", description: "sleep-disordered breathing" },
        { title: "ICU integration", description: "Combined with ICU for critically ill patients" },
      ],
      diagnostics: [
        { title: "Respiratory workup", detail: "Respiratory workup - asthma, COPD, pneumonia" },
        { title: "Pulmonary and ICU assessment", detail: "Combined with ICU for critically ill patients" },
        { title: "TB and lung cancer assessment", detail: "TB, lung cancer" },
      ],
      treatments: [
        { title: "Asthma and COPD pathway", description: "Asthma, COPD" },
        { title: "Pneumonia and TB pathway", description: "pneumonia, TB" },
        { title: "Lung cancer pathway", description: "lung cancer" },
        { title: "Critical care pathway", description: "Combined with ICU for critically ill patients" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Pulmonology & Critical Care Service Volume 2000-2025",
        description: "Pulmonology and critical care service trend over time.",
        data: buildChartData(140),
      },
      consultSymptoms: ["asthma", "COPD", "pneumonia", "TB", "lung cancer", "sleep-disordered breathing"],
    },
    "radiology-and-imaging": {
      name: "Radiology & Imaging",
      slug: "radiology-and-imaging",
      url: "https://www.shifa.com.pk/specialities/radiology-and-imaging/islamabad",
      tagline:
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      whenToConsult:
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      heroStats: [
        { label: "CT Platform", value: "640-slice" },
        { label: "MRI Platform", value: "3 Tesla" },
        { label: "Interventional", value: "Image-guided" },
      ],
      overviewParagraphs: [
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      ],
      overviewStats: [
        { icon: "heart", value: 640, label: "CT Platform" },
        { icon: "shield", value: 3, label: "Tesla MRI" },
        { icon: "stethoscope", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "activity", value: 300, suffix: "+", label: "Clinical Consultants" },
      ],
      facilities: [
        { title: "640-slice CT scan", description: "640-slice CT scan" },
        { title: "3 Tesla MRI", description: "3 Tesla MRI" },
        { title: "Digital X-ray", description: "digital X-ray" },
        { title: "Fluoroscopy", description: "fluoroscopy" },
        { title: "Ultrasound", description: "ultrasound" },
        { title: "Interventional radiology", description: "image-guided biopsies, drainages, embolizations" },
      ],
      diagnostics: [
        { title: "CT imaging", detail: "640-slice CT scan" },
        { title: "MRI imaging", detail: "3 Tesla MRI" },
        { title: "Digital X-ray and fluoroscopy", detail: "digital X-ray, fluoroscopy" },
        { title: "Ultrasound", detail: "ultrasound" },
        { title: "Interventional imaging", detail: "image-guided biopsies, drainages, embolizations" },
      ],
      treatments: [
        { title: "Image-guided biopsies", description: "image-guided biopsies" },
        { title: "Image-guided drainages", description: "image-guided drainages" },
        { title: "Image-guided embolizations", description: "image-guided embolizations" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "640-slice CT and 3 Tesla MRI" },
        { period: "Present", achievement: "Interventional radiology" },
      ],
      chart: {
        title: "Radiology & Imaging Service Volume 2000-2025",
        description: "Radiology and imaging service trend over time.",
        data: buildChartData(220),
      },
      consultSymptoms: ["CT scan", "MRI", "X-ray", "ultrasound", "image-guided biopsies", "embolizations"],
    },
    radiology: {
      name: "Radiology & Imaging",
      slug: "radiology",
      url: "https://www.shifa.com.pk/specialities/radiology/islamabad",
      tagline:
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      whenToConsult:
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      heroStats: [
        { label: "CT Platform", value: "640-slice" },
        { label: "MRI Platform", value: "3 Tesla" },
        { label: "Interventional", value: "Image-guided" },
      ],
      overviewParagraphs: [
        "640-slice CT scan, 3 Tesla MRI, digital X-ray, fluoroscopy, ultrasound, and interventional radiology (image-guided biopsies, drainages, embolizations).",
      ],
      overviewStats: [
        { icon: "heart", value: 640, label: "CT Platform" },
        { icon: "shield", value: 3, label: "Tesla MRI" },
        { icon: "stethoscope", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "activity", value: 300, suffix: "+", label: "Clinical Consultants" },
      ],
      facilities: [
        { title: "640-slice CT scan", description: "640-slice CT scan" },
        { title: "3 Tesla MRI", description: "3 Tesla MRI" },
        { title: "Digital X-ray", description: "digital X-ray" },
        { title: "Fluoroscopy", description: "fluoroscopy" },
        { title: "Ultrasound", description: "ultrasound" },
        { title: "Interventional radiology", description: "image-guided biopsies, drainages, embolizations" },
      ],
      diagnostics: [
        { title: "CT imaging", detail: "640-slice CT scan" },
        { title: "MRI imaging", detail: "3 Tesla MRI" },
        { title: "Digital X-ray and fluoroscopy", detail: "digital X-ray, fluoroscopy" },
        { title: "Ultrasound", detail: "ultrasound" },
        { title: "Interventional imaging", detail: "image-guided biopsies, drainages, embolizations" },
      ],
      treatments: [
        { title: "Image-guided biopsies", description: "image-guided biopsies" },
        { title: "Image-guided drainages", description: "image-guided drainages" },
        { title: "Image-guided embolizations", description: "image-guided embolizations" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "640-slice CT and 3 Tesla MRI" },
        { period: "Present", achievement: "Interventional radiology" },
      ],
      chart: {
        title: "Radiology Service Volume 2000-2025",
        description: "Radiology service trend over time.",
        data: buildChartData(220),
      },
      consultSymptoms: ["CT scan", "MRI", "X-ray", "ultrasound", "image-guided biopsies", "embolizations"],
    },
    rheumatology: {
      name: "Rheumatology",
      slug: "rheumatology",
      url: "https://www.shifa.com.pk/specialities/rheumatology/islamabad",
      tagline:
        "Rheumatoid arthritis, lupus (SLE), ankylosing spondylitis, gout, vasculitis, and Sjogren's syndrome - long-term autoimmune and inflammatory disease management.",
      whenToConsult:
        "Rheumatoid arthritis, lupus (SLE), ankylosing spondylitis, gout, vasculitis, and Sjogren's syndrome - long-term autoimmune and inflammatory disease management.",
      heroStats: [
        { label: "Clinical Specialities", value: "45+" },
        { label: "Hospital Beds", value: "550+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Rheumatoid arthritis, lupus (SLE), ankylosing spondylitis, gout, vasculitis, and Sjogren's syndrome - long-term autoimmune and inflammatory disease management.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Rheumatoid arthritis", description: "Rheumatoid arthritis" },
        { title: "Lupus and ankylosing spondylitis", description: "lupus (SLE), ankylosing spondylitis" },
        { title: "Gout and vasculitis", description: "gout, vasculitis" },
        { title: "Sjogren's syndrome", description: "Sjogren's syndrome" },
        { title: "Long-term autoimmune management", description: "long-term autoimmune and inflammatory disease management" },
      ],
      diagnostics: [
        { title: "Autoimmune assessment", detail: "long-term autoimmune and inflammatory disease management" },
        { title: "Inflammatory disease assessment", detail: "Rheumatoid arthritis, lupus (SLE), ankylosing spondylitis, gout, vasculitis, and Sjogren's syndrome" },
        { title: "Long-term follow-up", detail: "long-term autoimmune and inflammatory disease management" },
      ],
      treatments: [
        { title: "Rheumatoid arthritis pathway", description: "Rheumatoid arthritis" },
        { title: "Lupus pathway", description: "lupus (SLE)" },
        { title: "Ankylosing spondylitis pathway", description: "ankylosing spondylitis" },
        { title: "Gout pathway", description: "gout" },
        { title: "Vasculitis pathway", description: "vasculitis" },
        { title: "Sjogren's syndrome pathway", description: "Sjogren's syndrome" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "45+ clinical specialities" },
        { period: "Present", achievement: "550+ beds and 300+ clinical consultants" },
      ],
      chart: {
        title: "Rheumatology Service Volume 2000-2025",
        description: "Rheumatology service trend over time.",
        data: buildChartData(90),
      },
      consultSymptoms: ["rheumatoid arthritis", "lupus", "ankylosing spondylitis", "gout", "vasculitis", "Sjogren's syndrome"],
    },
    urology: {
      name: "Urology",
      slug: "urology",
      url: "https://www.shifa.com.pk/specialities/urology/islamabad",
      tagline:
        "Yes. Non-invasive Lithotripsy. Also covers prostate disorders (BPH, prostate cancer), bladder disease, UTIs, urological cancers, and male fertility evaluation.",
      whenToConsult:
        "Yes. Non-invasive Lithotripsy. Also covers prostate disorders (BPH, prostate cancer), bladder disease, UTIs, urological cancers, and male fertility evaluation.",
      heroStats: [
        { label: "Lithotripsy", value: "Non-invasive" },
        { label: "Clinical Specialities", value: "45+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Yes. Non-invasive Lithotripsy.",
        "Also covers prostate disorders (BPH, prostate cancer), bladder disease, UTIs, urological cancers, and male fertility evaluation.",
      ],
      overviewStats: [
        { icon: "heart", value: 45, suffix: "+", label: "Clinical Specialities" },
        { icon: "shield", value: 550, suffix: "+", label: "Hospital Beds" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 2017, label: "JCI Gold" },
      ],
      facilities: [
        { title: "Non-invasive Lithotripsy", description: "Non-invasive Lithotripsy" },
        { title: "Prostate disorders", description: "prostate disorders (BPH, prostate cancer)" },
        { title: "Bladder disease", description: "bladder disease" },
        { title: "UTIs", description: "UTIs" },
        { title: "Urological cancers", description: "urological cancers" },
        { title: "Male fertility evaluation", description: "male fertility evaluation" },
      ],
      diagnostics: [
        { title: "Prostate assessment", detail: "prostate disorders (BPH, prostate cancer)" },
        { title: "Bladder and UTI assessment", detail: "bladder disease, UTIs" },
        { title: "Fertility assessment", detail: "male fertility evaluation" },
      ],
      treatments: [
        { title: "Lithotripsy", description: "Non-invasive Lithotripsy" },
        { title: "Prostate pathway", description: "prostate disorders (BPH, prostate cancer)" },
        { title: "Bladder pathway", description: "bladder disease" },
        { title: "UTI pathway", description: "UTIs" },
        { title: "Urological cancer pathway", description: "urological cancers" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Lithotripsy" },
        { period: "Present", achievement: "45+ clinical specialities" },
      ],
      chart: {
        title: "Urology Service Volume 2000-2025",
        description: "Urology service trend over time.",
        data: buildChartData(112),
      },
      consultSymptoms: ["kidney stones", "prostate disorders", "bladder disease", "UTIs", "urological cancers", "male fertility"],
    },
    "liver-transplant": {
      name: "Liver Transplant",
      slug: "liver-transplant",
      url: "https://www.shifa.com.pk/specialities/liver-transplant/islamabad",
      tagline:
        "Pakistan's premier liver transplant program. Living-donor and deceased-donor transplants for pediatric and adult patients.",
      whenToConsult:
        "Pakistan's premier liver transplant program. Living-donor and deceased-donor transplants for pediatric and adult patients.",
      heroStats: [
        { label: "Transplant Programs", value: "4" },
        { label: "Transplants Performed", value: "3,000+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Pakistan's premier liver transplant program.",
        "Living-donor and deceased-donor transplants for pediatric and adult patients.",
      ],
      overviewStats: [
        { icon: "heart", value: 4, label: "Transplant Programs" },
        { icon: "shield", value: 3000, suffix: "+", label: "Transplants Performed" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 550, suffix: "+", label: "Hospital Beds" },
      ],
      facilities: [
        { title: "Premier liver transplant program", description: "Pakistan's premier liver transplant program" },
        { title: "Living-donor transplant", description: "Living-donor" },
        { title: "Deceased-donor transplant", description: "deceased-donor transplants" },
        { title: "Pediatric and adult patients", description: "for pediatric and adult patients" },
      ],
      diagnostics: [
        { title: "Transplant assessment", detail: "Pakistan's premier liver transplant program" },
        { title: "Donor pathway assessment", detail: "Living-donor and deceased-donor transplants" },
        { title: "Age-group pathway assessment", detail: "for pediatric and adult patients" },
      ],
      treatments: [
        { title: "Living-donor transplant", description: "Living-donor" },
        { title: "Deceased-donor transplant", description: "deceased-donor transplants" },
        { title: "Pediatric transplant pathway", description: "for pediatric patients" },
        { title: "Adult transplant pathway", description: "for adult patients" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Four transplant programs" },
        { period: "Present", achievement: "3,000+ transplants performed" },
      ],
      chart: {
        title: "Liver Transplant Service Volume 2000-2025",
        description: "Liver transplant service trend over time.",
        data: buildChartData(75),
      },
      consultSymptoms: ["liver transplant", "living-donor", "deceased-donor", "pediatric patients", "adult patients"],
    },
    "bone-marrow-transplant": {
      name: "Bone Marrow Transplant (BMT)",
      slug: "bone-marrow-transplant",
      url: "https://www.shifa.com.pk/specialities/bone-marrow-transplant/islamabad",
      tagline:
        "Second-largest BMT program in Pakistan. Leukemia, lymphoma, aplastic anemia, and stem cell disorders.",
      whenToConsult:
        "Second-largest BMT program in Pakistan. Leukemia, lymphoma, aplastic anemia, and stem cell disorders.",
      heroStats: [
        { label: "Transplant Programs", value: "4" },
        { label: "Transplants Performed", value: "3,000+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "Second-largest BMT program in Pakistan.",
        "Leukemia, lymphoma, aplastic anemia, and stem cell disorders.",
      ],
      overviewStats: [
        { icon: "heart", value: 4, label: "Transplant Programs" },
        { icon: "shield", value: 3000, suffix: "+", label: "Transplants Performed" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 550, suffix: "+", label: "Hospital Beds" },
      ],
      facilities: [
        { title: "BMT program", description: "Second-largest BMT program in Pakistan" },
        { title: "Leukemia", description: "Leukemia" },
        { title: "Lymphoma", description: "lymphoma" },
        { title: "Aplastic anemia", description: "aplastic anemia" },
        { title: "Stem cell disorders", description: "stem cell disorders" },
      ],
      diagnostics: [
        { title: "BMT assessment", detail: "Second-largest BMT program in Pakistan" },
        { title: "Hematology assessment", detail: "Leukemia, lymphoma, aplastic anemia" },
        { title: "Stem cell assessment", detail: "stem cell disorders" },
      ],
      treatments: [
        { title: "BMT pathway", description: "Second-largest BMT program in Pakistan" },
        { title: "Leukemia pathway", description: "Leukemia" },
        { title: "Lymphoma pathway", description: "lymphoma" },
        { title: "Aplastic anemia pathway", description: "aplastic anemia" },
        { title: "Stem cell disorder pathway", description: "stem cell disorders" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Four transplant programs" },
        { period: "Present", achievement: "3,000+ transplants performed" },
      ],
      chart: {
        title: "Bone Marrow Transplant Service Volume 2000-2025",
        description: "Bone marrow transplant service trend over time.",
        data: buildChartData(85),
      },
      consultSymptoms: ["leukemia", "lymphoma", "aplastic anemia", "stem cell disorders"],
    },
    "kidney-transplant": {
      name: "Kidney Transplant",
      slug: "kidney-transplant",
      url: "https://www.shifa.com.pk/specialities/kidney-transplant/islamabad",
      tagline:
        "One of Pakistan's leading kidney transplant programs - adult and pediatric surgical care, full pre- and post-transplant nephrology support.",
      whenToConsult:
        "One of Pakistan's leading kidney transplant programs - adult and pediatric surgical care, full pre- and post-transplant nephrology support.",
      heroStats: [
        { label: "Transplant Programs", value: "4" },
        { label: "Transplants Performed", value: "3,000+" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "One of Pakistan's leading kidney transplant programs.",
        "adult and pediatric surgical care, full pre- and post-transplant nephrology support.",
      ],
      overviewStats: [
        { icon: "heart", value: 4, label: "Transplant Programs" },
        { icon: "shield", value: 3000, suffix: "+", label: "Transplants Performed" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 550, suffix: "+", label: "Hospital Beds" },
      ],
      facilities: [
        { title: "Kidney transplant program", description: "One of Pakistan's leading kidney transplant programs" },
        { title: "Adult surgical care", description: "adult surgical care" },
        { title: "Pediatric surgical care", description: "pediatric surgical care" },
        { title: "Pre-transplant nephrology", description: "full pre-transplant nephrology support" },
        { title: "Post-transplant nephrology", description: "full post-transplant nephrology support" },
      ],
      diagnostics: [
        { title: "Kidney transplant assessment", detail: "One of Pakistan's leading kidney transplant programs" },
        { title: "Nephrology assessment", detail: "full pre- and post-transplant nephrology support" },
        { title: "Age-group pathway assessment", detail: "adult and pediatric surgical care" },
      ],
      treatments: [
        { title: "Kidney transplant pathway", description: "One of Pakistan's leading kidney transplant programs" },
        { title: "Adult pathway", description: "adult surgical care" },
        { title: "Pediatric pathway", description: "pediatric surgical care" },
        { title: "Nephrology continuity", description: "full pre- and post-transplant nephrology support" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Four transplant programs" },
        { period: "Present", achievement: "3,000+ transplants performed" },
      ],
      chart: {
        title: "Kidney Transplant Service Volume 2000-2025",
        description: "Kidney transplant service trend over time.",
        data: buildChartData(82),
      },
      consultSymptoms: ["kidney transplant", "adult surgical care", "pediatric surgical care", "pre-transplant nephrology", "post-transplant nephrology"],
    },
    "corneal-transplant": {
      name: "Corneal Transplant",
      slug: "corneal-transplant",
      url: "https://www.shifa.com.pk/specialities/corneal-transplant/islamabad",
      tagline: "350+ successful transplants. Among the leading corneal programs in the region.",
      whenToConsult: "350+ successful transplants. Among the leading corneal programs in the region.",
      heroStats: [
        { label: "Corneal Transplants", value: "350+" },
        { label: "Transplant Programs", value: "4" },
        { label: "Clinical Consultants", value: "300+" },
      ],
      overviewParagraphs: [
        "350+ successful transplants.",
        "Among the leading corneal programs in the region.",
      ],
      overviewStats: [
        { icon: "heart", value: 350, suffix: "+", label: "Successful transplants" },
        { icon: "shield", value: 4, label: "Transplant Programs" },
        { icon: "stethoscope", value: 300, suffix: "+", label: "Clinical Consultants" },
        { icon: "activity", value: 550, suffix: "+", label: "Hospital Beds" },
      ],
      facilities: [
        { title: "Corneal transplant program", description: "Among the leading corneal programs in the region" },
        { title: "Successful transplants", description: "350+ successful transplants" },
      ],
      diagnostics: [
        { title: "Corneal transplant assessment", detail: "Among the leading corneal programs in the region" },
        { title: "Outcome assessment", detail: "350+ successful transplants" },
      ],
      treatments: [{ title: "Corneal transplant", description: "350+ successful transplants" }],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Four transplant programs" },
        { period: "Present", achievement: "350+ successful transplants" },
      ],
      chart: {
        title: "Corneal Transplant Service Volume 2000-2025",
        description: "Corneal transplant service trend over time.",
        data: buildChartData(65),
      },
      consultSymptoms: ["corneal transplant"],
    },
    transplants: {
      name: "Transplants",
      slug: "transplants",
      url: "https://www.shifa.com.pk/specialities/transplants/islamabad",
      tagline:
        "Yes - four programs, making Shifa Pakistan's most comprehensive organ transplant center: Liver Transplant, Bone Marrow Transplant (BMT), Kidney Transplant, and Corneal Transplant.",
      whenToConsult:
        "Yes - four programs, making Shifa Pakistan's most comprehensive organ transplant center: Liver Transplant, Bone Marrow Transplant (BMT), Kidney Transplant, and Corneal Transplant.",
      heroStats: [
        { label: "Transplant Programs", value: "4" },
        { label: "Transplants Performed", value: "3,000+" },
        { label: "Corneal Transplants", value: "350+" },
      ],
      overviewParagraphs: [
        "Yes - four programs, making Shifa Pakistan's most comprehensive organ transplant center.",
        "Liver Transplant, Bone Marrow Transplant (BMT), Kidney Transplant, and Corneal Transplant.",
      ],
      overviewStats: [
        { icon: "heart", value: 4, label: "Transplant Programs" },
        { icon: "shield", value: 3000, suffix: "+", label: "Transplants Performed" },
        { icon: "stethoscope", value: 350, suffix: "+", label: "Corneal Transplants" },
        { icon: "activity", value: 300, suffix: "+", label: "Clinical Consultants" },
      ],
      facilities: [
        { title: "Liver Transplant", description: "Liver Transplant" },
        { title: "Bone Marrow Transplant (BMT)", description: "Bone Marrow Transplant (BMT)" },
        { title: "Kidney Transplant", description: "Kidney Transplant" },
        { title: "Corneal Transplant", description: "Corneal Transplant" },
        { title: "Most comprehensive organ transplant center", description: "Shifa Pakistan's most comprehensive organ transplant center" },
      ],
      diagnostics: [
        { title: "Transplant program assessment", detail: "four programs" },
        { title: "Pre and post transplant pathway", detail: "full pre- and post-transplant nephrology support" },
        { title: "Adult and pediatric pathway", detail: "adult and pediatric surgical care" },
      ],
      treatments: [
        { title: "Liver Transplant", description: "Living-donor and deceased-donor transplants for pediatric and adult patients" },
        { title: "Bone Marrow Transplant (BMT)", description: "Leukemia, lymphoma, aplastic anemia, and stem cell disorders" },
        { title: "Kidney Transplant", description: "adult and pediatric surgical care, full pre- and post-transplant nephrology support" },
        { title: "Corneal Transplant", description: "350+ successful transplants" },
      ],
      milestones: [
        { period: "1993", achievement: "Established" },
        { period: "2017", achievement: "JCI Gold (2017-present)" },
        { period: "Present", achievement: "Four transplant programs" },
        { period: "Present", achievement: "3,000+ transplants performed" },
      ],
      chart: {
        title: "Transplants Service Volume 2000-2025",
        description: "Transplants service trend over time.",
        data: buildChartData(70),
      },
      consultSymptoms: ["liver transplant", "bone marrow transplant", "kidney transplant", "corneal transplant"],
    },
  };

const specialtyAliasMap: Record<string, string> = {
  pediatrics: "paediatrics",
  "obstetrics-and-gynecology": "obstetrics-and-gynaecology",
  obgyn: "obstetrics-and-gynaecology",
  gastroenterology: "gastroenterology-and-hepatology",
  pulmonology: "pulmonology-and-critical-care",
  pathology: "pathology-and-laboratory-medicine",
};

function resolveSpecialtySlug(slug: string) {
  return specialtyAliasMap[slug] ?? slug;
}

  export function getAllSpecialtySlugs() {
    return [...Object.keys(specialtyPageConfig), ...Object.keys(specialtyAliasMap)];
  }

  export function getSpecialtyTemplateData(slug: string): SpecialtyTemplateData | null {
    const resolvedSlug = resolveSpecialtySlug(slug);
    const base = specialtyPageConfig[resolvedSlug];
    if (!base) return null;

    const specialtyDoctors = doctors.filter((doctor) => doctor.departmentSlug === resolvedSlug);

    return {
      ...base,
      team: specialtyDoctors.map((doctor) => ({
        name: doctor.name,
        designation: doctor.specialty,
        profile: `/doctors/${doctor.slug}`,
        experience: doctor.experience,
        hospitalAffiliation: "Shifa International Hospitals Islamabad",
      })),
    };
  }
