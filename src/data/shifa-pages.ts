import type {
  FaqItem,
  HeroData,
  NewsCategory,
  PageCard,
  PageSeo,
  ServiceItem,
  Stat,
} from "@/types/shifa";

export const patientPortalSeo: PageSeo = {
  title: "Patient Portal | Shifa International Hospitals",
  description:
    "Access your diagnostic reports, book appointments, and manage your health records securely through the Shifa International Hospitals Patient Portal.",
  keywords: ["patient portal", "diagnostic reports", "shifa patient login", "online reports islamabad"],
  canonical: "https://www.shifa.com.pk/patient-portal",
};

export const patientPortalHero: HeroData = {
  headline: "Your Health, At Your Fingertips",
  subheadline:
    "Access diagnostic reports, second opinions, and specialist consultations securely online.",
  backgroundType: "gradient",
  ctas: [
    { label: "Access Patient Portal", href: "https://patientportal.shifa.com.pk", variant: "primary" },
    { label: "Register Now", href: "https://patientportal.shifa.com.pk/register", variant: "ghost" },
  ],
};

export const patientPortalFeatures: ServiceItem[] = [
  {
    id: "diagnostic-reports",
    title: "Your Diagnostic Reports",
    description: "Secure online access to lab results, imaging reports, and test results anytime, anywhere.",
  },
  {
    id: "second-opinion",
    title: "Second Opinion Service",
    description: "Have your reports reviewed by experienced Shifa physicians for trusted guidance.",
  },
  {
    id: "executive-health",
    title: "Executive Health Service",
    description: "One-day, all-inclusive checkups with advanced diagnostics for professionals.",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Program",
    description: "Medically supervised dietary, medical, and bariatric options personalized to your profile.",
  },
  {
    id: "find-doctor",
    title: "Find a Doctor",
    description: "Connect with the right specialist across 45+ clinical specialities.",
  },
  {
    id: "stories",
    title: "Stories of Hope and Healing",
    description: "Read real patient experiences and recovery journeys at Shifa International Hospitals.",
  },
];

export const healthLibrarySeo: PageSeo = {
  title: "Health Library | Shifa International Hospitals",
  description:
    "Explore Shifa's Health Library: patient guides, doctor interviews, health news, wellness blogs, and health calculators.",
  keywords: ["health library", "patient guide", "shifa health blog", "doctor interviews pakistan"],
  canonical: "https://www.shifa.com.pk/health-library",
};

export const healthLibraryHero: HeroData = {
  headline: "Your Guide to Better Health",
  subheadline:
    "Evidence-based health information from Shifa specialists through guides, interviews, and calculators.",
  backgroundType: "gradient",
  ctas: [
    { label: "Browse Articles", href: "/health-library/blogs", variant: "primary" },
    { label: "Health Calculators", href: "/health-library/calculators", variant: "ghost" },
  ],
};

export const healthLibrarySections: PageCard[] = [
  {
    id: "patient-guide",
    heading: "Patient Guide",
    subheading: "A to Z disease information to help you understand conditions and symptoms.",
    href: "/health-library/patient-guide",
  },
  {
    id: "doctor-interviews",
    heading: "Doctor Interviews",
    subheading: "Expert health guidance directly from Shifa clinical specialists.",
    href: "/health-library/interviews",
  },
  {
    id: "shifa-news",
    heading: "Shifa News",
    subheading: "Latest health updates, awareness campaigns, and hospital news.",
    href: "https://shifanews.com",
    external: true,
  },
  {
    id: "blogs",
    heading: "Health Blogs",
    subheading: "Wellness tips, disease management advice, and lifestyle articles.",
    href: "/health-library/blogs",
  },
  {
    id: "calculators",
    heading: "Health Calculators",
    subheading: "BMI, blood pressure risk, diabetes risk, and more interactive tools.",
    href: "/health-library/calculators",
  },
];

export const healthCalculatorCards: Array<{ id: string; label: string; description: string }> = [
  { id: "bmi", label: "BMI Calculator", description: "Calculate your body mass index." },
  { id: "bp-risk", label: "Blood Pressure Risk", description: "Assess your hypertension risk." },
  { id: "diabetes-risk", label: "Diabetes Risk Score", description: "Screen for type 2 diabetes risk." },
  { id: "heart-age", label: "Heart Age Calculator", description: "Estimate your cardiovascular age." },
  { id: "calorie", label: "Calorie Calculator", description: "Estimate your daily caloric needs." },
];

export const internationalPatientsSeo: PageSeo = {
  title: "International Patients | Shifa International Hospitals",
  description:
    "Shifa welcomes patients from 150+ countries with JCI Gold-accredited care and dedicated concierge support.",
  keywords: ["international patients pakistan", "medical tourism pakistan", "shifa global health"],
  canonical: "https://www.shifa.com.pk/international-patients",
};

export const internationalPatientsHero: HeroData = {
  headline: "World-Class Care, Wherever You Are From",
  subheadline:
    "JCI Gold-accredited healthcare for patients from 150+ countries with concierge support.",
  backgroundType: "image",
  badge: "Serving 150+ Countries",
  ctas: [
    { label: "Get a Free Quote", href: "https://shifaglobal.uk/get-quote", variant: "primary" },
    { label: "Book Appointment", href: "https://shifaglobal.uk/book", variant: "ghost" },
  ],
};

export const internationalStats: Stat[] = [
  { label: "Countries Served", value: 150, suffix: "+" },
  { label: "Hospital Beds", value: 550, suffix: "+" },
  { label: "Clinical Consultants", value: 300, suffix: "+" },
  { label: "Transplants Performed", value: 3000, suffix: "+" },
];

export const internationalServices: ServiceItem[] = [
  { id: "dermatology", title: "Dermatology", description: "Specialist skin and dermato-procedural care." },
  { id: "plastic-surgery", title: "Plastic Surgery", description: "Reconstructive and aesthetic services." },
  { id: "obgyn", title: "Gynecology and Obstetrics", description: "Women-focused diagnostics and treatment." },
  { id: "orthopedic", title: "Orthopedic Surgery", description: "Joint, trauma, and musculoskeletal care." },
  { id: "gastro", title: "Gastroenterology", description: "Comprehensive digestive and liver care." },
  { id: "oncology", title: "Oncology", description: "Integrated cancer treatment pathways." },
  { id: "dentistry", title: "Dentistry and Oral-Maxillofacial Surgery", description: "Advanced oral healthcare services." },
];

export const homeHealthSeo: PageSeo = {
  title: "Home Health Services | Shifa International Hospitals - eShifa",
  description:
    "eShifa brings Shifa clinical care to your home: teleclinics, home lab, pharmacy, nursing, vaccination, and rehab.",
  keywords: ["home healthcare pakistan", "eshifa", "home nursing islamabad", "teleclinic pakistan"],
  canonical: "https://www.shifa.com.pk/home-health",
};

export const homeHealthHero: HeroData = {
  headline: "Shifa Healthcare, Delivered to Your Door",
  subheadline:
    "Access home healthcare services without hospital visits or waiting.",
  backgroundType: "gradient",
  ctas: [
    { label: "Book a Service", href: "https://eshifa.org", variant: "primary" },
    { label: "Call 051-111-111-567", href: "tel:051111111567", variant: "ghost" },
  ],
};

export const homeHealthServices: ServiceItem[] = [
  {
    id: "teleclinic",
    title: "Teleclinics",
    description: "Telemedicine consultations with Shifa specialists.",
    availability: "24/7",
  },
  {
    id: "fauree-mashwara",
    title: "Fauree Mashwara",
    description: "Instant online consultations for urgent advice.",
    availability: "24/7",
  },
  {
    id: "home-lab",
    title: "Home Lab Services",
    description: "Sample collection at home with digital reporting.",
    availability: "7 AM-10 PM",
  },
  {
    id: "home-pharmacy",
    title: "Home Pharmacy",
    description: "Prescription delivery with temperature compliance.",
    availability: "Daily",
  },
  {
    id: "home-nursing",
    title: "Home Nursing",
    description: "Qualified clinical nursing care in-home.",
    availability: "24/7",
  },
  {
    id: "home-vaccination",
    title: "Home Vaccination",
    description: "In-home immunization by trained staff.",
    availability: "By appointment",
  },
  {
    id: "home-rehab",
    title: "Home Rehabilitation",
    description: "Physiotherapy, speech, and occupational therapy at home.",
    availability: "By appointment",
  },
  {
    id: "home-supplies",
    title: "Home Medical Supplies",
    description: "Medical equipment and supplies delivery.",
    availability: "Daily",
  },
  {
    id: "elderly-care",
    title: "Elderly Care Program",
    description: "Senior-focused chronic care and support services.",
    availability: "24/7",
  },
  {
    id: "diabetes-care",
    title: "Home Diabetes Care Program",
    description: "Long-term diabetes management and coaching.",
    availability: "Daily",
  },
];

export const newsEventsSeo: PageSeo = {
  title: "News and Events | Shifa International Hospitals",
  description:
    "Latest health news, events, campaigns, and expert medical insights from Shifa International Hospitals.",
  keywords: ["shifa news", "shifa events", "health news pakistan", "shifa hospital updates"],
  canonical: "https://www.shifa.com.pk/news-events",
};

export const newsCategories: NewsCategory[] = [
  { slug: "latest", label: "Latest News", urduLabel: "تازہ ترین" },
  { slug: "children", label: "Children's Health", urduLabel: "بچے" },
  { slug: "elderly", label: "Elderly Health", urduLabel: "بزرگ" },
  { slug: "womens-health", label: "Women's Health", urduLabel: "خواتین" },
  { slug: "diseases", label: "Diseases", urduLabel: "امراض" },
  { slug: "diagnosis", label: "Diagnosis and Treatment", urduLabel: "تشخیص" },
  { slug: "symptoms", label: "Symptoms", urduLabel: "علامات" },
  { slug: "nutrition", label: "Nutrition", urduLabel: "غذائیات" },
  { slug: "interviews", label: "Interviews", urduLabel: "انٹرویوز" },
  { slug: "misc", label: "Miscellaneous", urduLabel: "متفرقات" },
];

export const contactSeo: PageSeo = {
  title: "Contact Us | Shifa International Hospitals Islamabad",
  description:
    "Contact Shifa International Hospitals Islamabad by phone, WhatsApp, address, and emergency hotline.",
  keywords: ["shifa contact", "shifa hospital phone number", "shifa islamabad address", "051-8464646"],
  canonical: "https://www.shifa.com.pk/contact-us",
};

export const contactFaqs: FaqItem[] = [
  {
    question: "What is the main phone number for Shifa International Hospitals?",
    answer: "Main phone line is 051-8464646.",
  },
  {
    question: "What is the emergency and ambulance line?",
    answer: "Emergency and ambulance line is 051-846-4646 and available 24/7.",
  },
  {
    question: "Where is the main campus located?",
    answer: "Pitras Bukhari Road, H-8/4, Islamabad Capital Territory.",
  },
];

export const careersSeo: PageSeo = {
  title: "Careers | Shifa International Hospitals",
  description:
    "Explore career opportunities through Shifa's careers portal and connect with our HR team for hiring updates.",
  keywords: ["shifa careers", "hospital jobs pakistan", "careers shifa"],
  canonical: "https://www.shifa.com.pk/careers",
};

export const virtualTourSeo: PageSeo = {
  title: "Virtual Tour | Shifa International Hospitals Islamabad",
  description:
    "Take a virtual tour of Shifa International Hospitals Islamabad and explore patient, diagnostic, and specialty care areas.",
  keywords: ["shifa virtual tour", "shifa hospital tour", "shifa islamabad"],
  canonical: "https://www.shifa.com.pk/virtual-tour",
};

export const findDoctorSeo: PageSeo = {
  title: "Find a Doctor | Shifa International Hospitals",
  description:
    "Search and connect with specialist doctors at Shifa International Hospitals by specialty, location, and gender.",
  keywords: ["find a doctor islamabad", "shifa doctors", "specialist islamabad"],
  canonical: "https://www.shifa.com.pk/find-a-doctor",
};

export const doctorsSeo: PageSeo = {
  title: "Our Doctors | Shifa International Hospitals",
  description:
    "Meet Shifa International Hospitals consultants across medical and surgical disciplines.",
  keywords: ["shifa doctors", "specialist islamabad", "consultant list shifa"],
  canonical: "https://www.shifa.com.pk/doctors",
};

export const appointmentSeo: PageSeo = {
  title: "Book an Appointment | Shifa International Hospitals",
  description:
    "Book your appointment online at Shifa International Hospitals, or use WhatsApp fallback for quick booking.",
  keywords: ["book appointment shifa", "shifa appointment online", "051-8464646"],
  canonical: "https://www.shifa.com.pk/book-appointment",
};

export const loginSeo: PageSeo = {
  title: "Patient Login | Shifa International Hospitals",
  description:
    "Sign in to your Shifa patient account to access reports, appointments, and health records.",
  keywords: ["shifa patient login", "shifa portal sign in", "diagnostic reports online"],
  canonical: "https://www.shifa.com.pk/login",
};
