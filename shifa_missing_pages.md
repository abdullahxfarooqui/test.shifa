# Shifa International Hospitals — Missing Pages Architecture
**Scraped & Structured — April 2026**
**Target:** Next.js 14 App Router · TypeScript · Production-grade

> All content extracted from live Shifa properties:
> shifa.com.pk · patientportal.shifa.com.pk · shifaglobal.uk · eshifa.org · careers.shifa.com.pk · shifanews.com

---

## Table of Contents

1. [Global Data Models](#1-global-data-models)
2. [Shared Component Registry](#2-shared-component-registry)
3. [/patient-portal](#3-patient-portal)
4. [/health-library](#4-health-library)
5. [/international-patients](#5-international-patients)
6. [/home-health](#6-home-health)
7. [/academics-research](#7-academics-research)
8. [/corporate](#8-corporate)
9. [/news-events](#9-news-events)
10. [/careers](#10-careers)
11. [/virtual-tour](#11-virtual-tour)
12. [/contact-us](#12-contact-us)
13. [/login](#13-login)
14. [/find-a-doctor](#14-find-a-doctor)
15. [/book-appointment](#15-book-appointment)
16. [/doctors](#16-doctors)
17. [Implementation Notes](#17-implementation-notes)

---

## 1. Global Data Models

These TypeScript types are shared across all pages.

```ts
// ─── DOCTOR ─────────────────────────────────────────────────────────────────
type Doctor = {
  id: string;
  slug: string;
  name: string;
  title: string;                        // "Prof. Dr.", "Dr.", etc.
  specialty: string;
  departmentSlug: string;
  qualifications: string[];             // ["MBBS", "FRCS", "FCPS"]
  experience: string;                   // "15+ years"
  gender: "male" | "female";
  languages: string[];
  location: "islamabad" | "faisalabad";
  availability: string[];               // ["Mon", "Wed", "Fri"]
  image: string;
  profileUrl: string;
  bio: string;
  procedures: string[];
};

// ─── ARTICLE ─────────────────────────────────────────────────────────────────
type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;                      // rich text / MDX
  category: ArticleCategory;
  language: "en" | "ur";
  author: string;
  publishedAt: string;                  // ISO date
  featuredImage: string;
  tags: string[];
  readingTimeMinutes: number;
  type: "blog" | "news" | "interview" | "patient-guide";
};

type ArticleCategory =
  | "cardiology" | "neurology" | "oncology" | "orthopaedics"
  | "paediatrics" | "womens-health" | "diabetes" | "nutrition"
  | "mental-health" | "first-aid" | "diagnosis" | "symptoms"
  | "elderly-care" | "general";

// ─── JOB POSTING ─────────────────────────────────────────────────────────────
type JobPosting = {
  id: string;
  slug: string;
  title: string;
  department: JobDepartment;
  type: "full-time" | "part-time" | "contract";
  location: string;
  postedAt: string;
  closingDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl: string;
};

type JobDepartment =
  | "physicians" | "nursing" | "allied-health"
  | "clinical" | "administration" | "engineering";

// ─── APPOINTMENT FORM ────────────────────────────────────────────────────────
type AppointmentForm = {
  patientName: string;
  phone: string;
  email?: string;
  specialty: string;
  preferredDoctor?: string;
  preferredDate: string;
  preferredTime: "morning" | "afternoon" | "evening";
  location: "islamabad" | "faisalabad";
  visitType: "first-visit" | "follow-up";
  notes?: string;
};

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  department?: string;
  message: string;
};

// ─── SECOND OPINION REQUEST ──────────────────────────────────────────────────
type SecondOpinionRequest = {
  patientName: string;
  age: number;
  gender: "male" | "female" | "other";
  country: string;
  email: string;
  phone: string;
  specialty: string;
  currentDiagnosis: string;
  treatmentHistory: string;
  documents: File[];                    // medical reports
  additionalNotes?: string;
};

// ─── HOME HEALTH BOOKING ─────────────────────────────────────────────────────
type HomeHealthBooking = {
  service: HomeHealthService;
  patientName: string;
  phone: string;
  address: string;
  city: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
};

type HomeHealthService =
  | "teleclinic" | "home-lab" | "home-pharmacy" | "home-nursing"
  | "home-vaccination" | "home-rehab" | "home-supplies"
  | "elderly-care" | "diabetes-care" | "fauree-mashwara";

// ─── PAGE SEO ─────────────────────────────────────────────────────────────────
type PageSEO = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
};

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
type HeroData = {
  headline: string;
  subheadline?: string;
  ctas: Array<{ label: string; href: string; variant: "primary" | "ghost" }>;
  backgroundImage?: string;
  backgroundType: "image" | "gradient" | "mesh";
  badge?: string;
};

// ─── PAGE SECTION ─────────────────────────────────────────────────────────────
type Section = {
  id: string;
  type: "stats" | "cards" | "grid" | "list" | "form" | "faq"
       | "steps" | "cta" | "testimonials" | "accordion" | "tabs";
  heading?: string;
  subheading?: string;
  content?: string;
  items?: SectionItem[];
};

type SectionItem = {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  link?: { label: string; href: string };
  meta?: Record<string, string | number>;
};

// ─── EXECUTIVE PACKAGE ───────────────────────────────────────────────────────
type ExecutivePackage = {
  id: string;
  name: "basic" | "essential" | "comprehensive";
  label: string;
  tests: string[];
  consultations: string[];
  features: string[];
  priceLabel?: string;                  // "Call for pricing"
};
```

---

## 2. Shared Component Registry

Components reused across multiple pages:

| Component | Used In | Description |
|---|---|---|
| `<HeroSection />` | All pages | Full-width hero with headline, CTA, background |
| `<SectionWrapper />` | All pages | Section with heading, subheading, children |
| `<StatCard />` | Portal, Contact, Home Health | Animated count-up metric card |
| `<StepProcess />` | Booking, Home Health, Careers | Numbered sequential steps |
| `<DoctorCard />` | Find a Doctor, Doctors | Doctor name, specialty, image, CTA |
| `<DoctorSearchBar />` | Find a Doctor, Doctors | Specialty + city + gender filters |
| `<ArticleCard />` | Health Library, News | Title, category, date, excerpt, image |
| `<ArticleGrid />` | Health Library, News | Responsive card grid of articles |
| `<JobCard />` | Careers | Job title, department, type, apply CTA |
| `<ServiceCard />` | Home Health, Portal | Icon + title + description |
| `<AccordionFAQ />` | Multiple | Collapsible Q&A list |
| `<FormBuilder />` | All form pages | Field-driven generic form |
| `<ContactBand />` | All pages | Phone + WhatsApp + address strip |
| `<TestimonialCard />` | International, Portal | Quote + patient name |
| `<PackageCard />` | Executive Health | Package tier with included tests |
| `<CategoryFilter />` | Health Library, Doctors, News | Pill-tab filter group |
| `<PageBreadcrumb />` | All pages | Home > Section > Page trail |
| `<NewsletterBar />` | Multiple | Email subscribe strip |
| `<SocialLinks />` | Footer, Contact | FB, IG, YT, TikTok, X, LinkedIn, Threads |

---

## 3. /patient-portal

### Real URL
`https://patientportal.shifa.com.pk` (external subdomain — implement as redirect or embedded iframe landing)

### Discovery Notes
The patient portal lives on a separate subdomain (`patientportal.shifa.com.pk`). The `/patient-portal` route in the Next.js app should be a **landing/gateway page** that describes portal features and provides a direct link to the external portal.

### Page Data (JSON)

```json
{
  "slug": "patient-portal",
  "seo": {
    "title": "Patient Portal | Shifa International Hospitals",
    "description": "Access your diagnostic reports, book appointments, and manage your health records securely through the Shifa International Hospitals Patient Portal.",
    "keywords": ["patient portal", "diagnostic reports", "shifa patient login", "online reports islamabad"],
    "canonical": "https://www.shifa.com.pk/patient-portal"
  },
  "hero": {
    "headline": "Your Health, At Your Fingertips",
    "subheadline": "Access diagnostic reports, second opinions, and specialist consultations — securely, online.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Access Patient Portal", "href": "https://patientportal.shifa.com.pk", "variant": "primary" },
      { "label": "Register Now", "href": "https://patientportal.shifa.com.pk/register", "variant": "ghost" }
    ]
  },
  "features": [
    {
      "title": "Your Diagnostic Reports",
      "description": "Secure online access to lab results, imaging reports, and test results — anytime, anywhere.",
      "icon": "file-text"
    },
    {
      "title": "Second Opinion Service",
      "description": "Have your medical reports reviewed by experienced Shifa physicians for trusted guidance on diagnoses and treatment options.",
      "icon": "user-check"
    },
    {
      "title": "Executive Health Service",
      "description": "Comprehensive health screening tailored for busy professionals — one-day, all-inclusive checkups with advanced diagnostics.",
      "icon": "shield-check"
    },
    {
      "title": "Weight Loss Program",
      "description": "Medically supervised weight loss — dietary, medical, and bariatric options personalized to your health profile.",
      "icon": "activity"
    },
    {
      "title": "Find a Doctor",
      "description": "Connect with the right specialist for your healthcare needs across all 45+ clinical specialities.",
      "icon": "search"
    },
    {
      "title": "Stories of Hope & Healing",
      "description": "Read real patient experiences and recovery journeys at Shifa International Hospitals.",
      "icon": "heart"
    }
  ],
  "loginCard": {
    "heading": "Sign in to Your Portal",
    "fields": [
      { "name": "username", "type": "text", "label": "Username / Patient ID", "required": true, "placeholder": "Enter your username" },
      { "name": "password", "type": "password", "label": "Password", "required": true, "placeholder": "Enter your password" }
    ],
    "submitLabel": "Sign In",
    "forgotPasswordHref": "https://patientportal.shifa.com.pk/forgot-password",
    "registerHref": "https://patientportal.shifa.com.pk/register"
  }
}
```

### Component Breakdown

```
src/app/patient-portal/page.tsx
├── <HeroSection />            — headline + two CTAs
├── <FeatureGrid />            — 6 service cards (2×3 grid)
├── <LoginCard />              — embedded mini login UI linking to portal
├── <ExecutivePackageTeaser /> — "Book an Executive Health Screening" CTA
└── <ContactBand />            — phone + WhatsApp strip
```

### Data Source Strategy
- Feature cards: static JSON in `src/data/portal-features.ts`
- Login: external redirect to `patientportal.shifa.com.pk`
- Executive packages: static data from executive health service scrape

---

## 4. /health-library

### Real URL
`https://www.shifa.com.pk/health-library` (404 — implement this route)
Sub-sections exist: Patient Guide, Doctor Interviews, Shifa News (shifanews.com), Blogs, Health Calculators

### Discovery Notes
The Health Library is a nav-level section with five distinct sub-sections. Content currently lives on `shifanews.com` (bilingual Urdu/English). This page should be a **hub** routing to each sub-section.

### Page Data (JSON)

```json
{
  "slug": "health-library",
  "seo": {
    "title": "Health Library | Shifa International Hospitals",
    "description": "Explore Shifa's Health Library — patient guides, doctor interviews, health news, wellness blogs, and interactive health calculators.",
    "keywords": ["health library", "patient guide", "shifa health blog", "doctor interviews pakistan"],
    "canonical": "https://www.shifa.com.pk/health-library"
  },
  "hero": {
    "headline": "Your Guide to Better Health",
    "subheadline": "Evidence-based health information from Shifa's specialist physicians — articles, interviews, calculators, and more.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Browse Articles", "href": "/health-library/blogs", "variant": "primary" },
      { "label": "Health Calculators", "href": "/health-library/calculators", "variant": "ghost" }
    ]
  },
  "sections": [
    {
      "id": "patient-guide",
      "type": "cards",
      "heading": "Patient Guide",
      "subheading": "Comprehensive A–Z disease information to help you understand conditions and symptoms.",
      "href": "/health-library/patient-guide"
    },
    {
      "id": "doctor-interviews",
      "type": "cards",
      "heading": "Doctor Interviews",
      "subheading": "Expert health guidance directly from Shifa's clinical specialists.",
      "href": "/health-library/interviews"
    },
    {
      "id": "shifa-news",
      "type": "cards",
      "heading": "Shifa News",
      "subheading": "Latest health updates, medical awareness campaigns, and hospital news.",
      "href": "https://shifanews.com",
      "external": true
    },
    {
      "id": "blogs",
      "type": "cards",
      "heading": "Health Blogs",
      "subheading": "Wellness tips, disease management advice, and lifestyle health articles.",
      "href": "/health-library/blogs"
    },
    {
      "id": "calculators",
      "type": "cards",
      "heading": "Health Calculators",
      "subheading": "BMI, blood pressure, diabetes risk, and other interactive health tools.",
      "href": "/health-library/calculators"
    }
  ],
  "articleCategories": [
    { "slug": "cardiology", "label": "Heart Health" },
    { "slug": "neurology", "label": "Brain & Nerves" },
    { "slug": "womens-health", "label": "Women's Health" },
    { "slug": "paediatrics", "label": "Children's Health" },
    { "slug": "elderly-care", "label": "Elderly Care" },
    { "slug": "diabetes", "label": "Diabetes" },
    { "slug": "nutrition", "label": "Nutrition" },
    { "slug": "mental-health", "label": "Mental Health" },
    { "slug": "diagnosis", "label": "Diagnosis & Treatment" },
    { "slug": "symptoms", "label": "Symptoms" },
    { "slug": "first-aid", "label": "First Aid" },
    { "slug": "general", "label": "General Health" }
  ],
  "calculators": [
    { "id": "bmi", "label": "BMI Calculator", "description": "Calculate your Body Mass Index" },
    { "id": "bp-risk", "label": "Blood Pressure Risk", "description": "Assess your hypertension risk" },
    { "id": "diabetes-risk", "label": "Diabetes Risk Score", "description": "Screen for Type 2 diabetes risk" },
    { "id": "heart-age", "label": "Heart Age Calculator", "description": "Estimate your cardiovascular age" },
    { "id": "calorie", "label": "Calorie Calculator", "description": "Daily caloric needs estimator" }
  ]
}
```

### Sub-route File Structure

```
src/app/health-library/
├── page.tsx                   — Hub landing page
├── patient-guide/
│   └── page.tsx               — A-Z condition directory
├── patient-guide/[slug]/
│   └── page.tsx               — Individual condition article
├── interviews/
│   └── page.tsx               — Doctor interview video/article grid
├── blogs/
│   └── page.tsx               — Blog article listing with category filter
├── blogs/[slug]/
│   └── page.tsx               — Individual blog post
└── calculators/
    └── page.tsx               — Health calculator hub
```

### Component Breakdown

```
src/app/health-library/page.tsx
├── <HeroSection />            — headline + CTA
├── <SectionHubGrid />         — 5 sub-section cards with icons
├── <CategoryFilter />         — pill tabs for article categories
├── <ArticleGrid />            — latest articles (first 6)
└── <NewsletterBar />          — subscribe strip

src/app/health-library/blogs/page.tsx
├── <CategoryFilter />
├── <ArticleGrid />            — paginated
└── <Pagination />
```

### Data Source Strategy
- Articles: fetch from `shifanews.com` API or RSS feed
- Calculators: client components with local logic
- Patient Guide: static MDX files per condition, or CMS

---

## 5. /international-patients

### Real URL
`https://shifaglobal.uk` (external property — Next.js route is a gateway/teaser page)

### Discovery Notes
Shifa Global Health is a fully separate UK-based entity at `shifaglobal.uk` serving international patients from 150+ countries. The `/international-patients` route should present the service and redirect to shifaglobal.uk.

### Page Data (JSON)

```json
{
  "slug": "international-patients",
  "seo": {
    "title": "International Patients | Shifa International Hospitals",
    "description": "Shifa International Hospitals welcomes patients from 150+ countries. JCI Gold-accredited care, medical concierge services, and seamless international patient support.",
    "keywords": ["international patients pakistan", "medical tourism pakistan", "shifa global health", "JCI hospital islamabad"],
    "canonical": "https://www.shifa.com.pk/international-patients"
  },
  "hero": {
    "headline": "World-Class Care, Wherever You're From",
    "subheadline": "JCI Gold-accredited healthcare for patients from 150+ countries. Dedicated medical concierge support throughout your treatment journey.",
    "backgroundType": "image",
    "ctas": [
      { "label": "Get a Free Quote", "href": "https://shifaglobal.uk/get-quote", "variant": "primary" },
      { "label": "Book Appointment", "href": "https://shifaglobal.uk/book", "variant": "ghost" }
    ],
    "badge": "Serving 150+ Countries"
  },
  "stats": [
    { "label": "Countries Served", "value": 150, "suffix": "+" },
    { "label": "Hospital Beds", "value": 550, "suffix": "+" },
    { "label": "Clinical Consultants", "value": 300, "suffix": "+" },
    { "label": "Transplants Performed", "value": 3000, "suffix": "+" }
  ],
  "services": [
    { "title": "Dermatology", "icon": "skin" },
    { "title": "Plastic Surgery", "icon": "scissors" },
    { "title": "Gynecology & Obstetrics", "icon": "user" },
    { "title": "Orthopedic Surgery", "icon": "bone" },
    { "title": "Gastroenterology", "icon": "activity" },
    { "title": "Oncology", "icon": "shield" },
    { "title": "Dentistry & Oral-Maxillofacial Surgery", "icon": "smile" }
  ],
  "whyChooseShifa": [
    { "title": "Objectively Safe Care", "description": "JCI Gold-accredited facility — first achieved 2017, maintained continuously." },
    { "title": "Timely & Efficient Care", "description": "Minimal wait times, advanced diagnostics, same-day results for executive packages." },
    { "title": "Personalized Support", "description": "Dedicated Medical Concierge guides every step of your treatment journey." },
    { "title": "Internationally Accredited", "description": "US & Europe-trained consultants in 45+ specialities." }
  ],
  "patientJourneySteps": [
    { "step": 1, "title": "Submit Medical Documents", "description": "Share your medical history and reports online — document upload optional." },
    { "step": 2, "title": "Receive Free Quote", "description": "Our medical team reviews your case and provides treatment cost estimate." },
    { "step": 3, "title": "Book & Confirm", "description": "Schedule your visit, receive pre-arrival guidelines, and confirm logistics." },
    { "step": 4, "title": "Arrive & Begin Treatment", "description": "Concierge team meets you, supports through diagnostics and consultations." },
    { "step": 5, "title": "Follow-up Care", "description": "Remote post-treatment follow-up with your Shifa specialist via eShifa." }
  ],
  "contact": {
    "phone": "+44 121 790 1777",
    "whatsapp": "+44 777 767 2222",
    "email": "info@shifaglobal.uk",
    "address": "42 Chapel Fields Road, Solihull, B92 7RX, UK",
    "availability": "24/7",
    "portalUrl": "https://shifaglobal.uk"
  },
  "quoteForm": {
    "fields": [
      { "name": "patientName", "type": "text", "label": "Full Name", "required": true },
      { "name": "country", "type": "select", "label": "Country", "required": true, "note": "150+ countries in dropdown" },
      { "name": "email", "type": "email", "label": "Email Address", "required": true },
      { "name": "phone", "type": "tel", "label": "Phone / WhatsApp", "required": true },
      { "name": "specialty", "type": "select", "label": "Medical Specialty", "required": true },
      { "name": "currentDiagnosis", "type": "textarea", "label": "Current Condition / Diagnosis", "required": false },
      { "name": "documents", "type": "file", "label": "Upload Medical Documents (optional)", "required": false, "accept": ".pdf,.jpg,.png" }
    ],
    "submitLabel": "Get Free Quote",
    "action": "https://shifaglobal.uk/api/quote"
  }
}
```

### Component Breakdown

```
src/app/international-patients/page.tsx
├── <HeroSection />            — headline with "150+ Countries" badge
├── <StatsRow />               — 4 animated stat cards
├── <ServiceGrid />            — 7 specialty cards
├── <WhyChooseSection />       — 4 USP cards
├── <PatientJourneySteps />    — 5-step process
├── <QuoteForm />              — embedded or link to shifaglobal.uk
├── <TestimonialCarousel />    — patient testimonials
└── <ContactBand />            — UK + PK contact info
```

---

## 6. /home-health

### Real URL
`https://eshifa.org` (external property — implement as Next.js gateway + embedded data)

### Discovery Notes
eShifa (eshifa.org) is Shifa's dedicated home healthcare platform. UAN: 051-111-111-567. Available as mobile app (Google Play + App Store). Serves Islamabad, Lahore, nationwide.

### Page Data (JSON)

```json
{
  "slug": "home-health",
  "seo": {
    "title": "Home Health Services | Shifa International Hospitals — eShifa",
    "description": "eShifa brings Shifa's clinical expertise to your home — teleclinics, home lab, pharmacy delivery, nursing, vaccination, rehabilitation, and elderly care. 24/7 across Pakistan.",
    "keywords": ["home healthcare pakistan", "eshifa", "home nursing islamabad", "teleclinic pakistan", "home lab islamabad"],
    "canonical": "https://www.shifa.com.pk/home-health"
  },
  "hero": {
    "headline": "Shifa Healthcare, Delivered to Your Door",
    "subheadline": "Access the finest home healthcare services at any time convenient for you — without hospital visits or waiting.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Book a Service", "href": "https://eshifa.org", "variant": "primary" },
      { "label": "Call 051-111-111-567", "href": "tel:051111111567", "variant": "ghost" }
    ]
  },
  "services": [
    {
      "id": "teleclinic",
      "title": "Teleclinics",
      "description": "Telemedicine consultations with Shifa specialists — video or audio, from your home.",
      "icon": "video",
      "availability": "24/7"
    },
    {
      "id": "fauree-mashwara",
      "title": "Fauree Mashwara",
      "description": "Instant online doctor consultations — 24/7 specialist access for urgent medical advice.",
      "icon": "message-circle",
      "availability": "24/7"
    },
    {
      "id": "home-lab",
      "title": "Home Lab Services",
      "description": "Trained phlebotomists collect samples at your home. Results delivered digitally.",
      "icon": "flask",
      "availability": "7 AM–10 PM"
    },
    {
      "id": "home-pharmacy",
      "title": "Home Pharmacy",
      "description": "Prescription medication delivered to your door with full temperature compliance.",
      "icon": "package",
      "availability": "Daily"
    },
    {
      "id": "home-nursing",
      "title": "Home Nursing",
      "description": "Personalized in-home clinical nursing care by qualified registered nurses.",
      "icon": "heart",
      "availability": "24/7"
    },
    {
      "id": "home-vaccination",
      "title": "Home Vaccination",
      "description": "In-home immunization administration by trained clinical staff.",
      "icon": "syringe",
      "availability": "By appointment"
    },
    {
      "id": "home-rehab",
      "title": "Home Rehabilitation",
      "description": "Physiotherapy, autism therapy, speech pathology, and occupational therapy at home.",
      "icon": "activity",
      "availability": "By appointment"
    },
    {
      "id": "home-supplies",
      "title": "Home Medical Supplies",
      "description": "Medical equipment and supply delivery for ongoing home care needs.",
      "icon": "box",
      "availability": "Daily"
    },
    {
      "id": "elderly-care",
      "title": "Elderly Care Program",
      "description": "Specialized senior patient services — chronic disease management, mobility support, and companionship care.",
      "icon": "users",
      "availability": "24/7"
    },
    {
      "id": "diabetes-care",
      "title": "Home Diabetes Care Program",
      "description": "Comprehensive disease-specific diabetes management program with monitoring and coaching.",
      "icon": "trending-down",
      "availability": "Daily"
    }
  ],
  "howItWorks": [
    { "step": 1, "title": "Call or Book Online", "description": "Phone 051-111-111-567 or book via the eShifa app in one click." },
    { "step": 2, "title": "Confirm Your Service", "description": "Our team confirms details, time slot, and prepares your care staff." },
    { "step": 3, "title": "Service at Your Home", "description": "Qualified medical staff arrives at your preferred time." },
    { "step": 4, "title": "Digital Follow-up", "description": "Receive digital prescriptions, test results, and follow-up guidance online." }
  ],
  "contact": {
    "uan": "051-111-111-567",
    "general": "051-8464646",
    "email": "info@eShifa.org",
    "address": "Plot No. 17 & 18, 2nd Floor, EOBI Building, I-8 Markaz, Islamabad",
    "appLinks": {
      "googlePlay": "https://play.google.com/store/apps/details?id=org.eshifa",
      "appStore": "https://apps.apple.com/app/eshifa"
    },
    "externalUrl": "https://eshifa.org",
    "availability": "24/7"
  },
  "bookingForm": {
    "fields": [
      { "name": "service", "type": "select", "label": "Select Service", "required": true },
      { "name": "patientName", "type": "text", "label": "Patient Name", "required": true },
      { "name": "phone", "type": "tel", "label": "Phone Number", "required": true },
      { "name": "address", "type": "textarea", "label": "Home Address", "required": true },
      { "name": "city", "type": "select", "label": "City", "required": true, "options": ["Islamabad", "Rawalpindi", "Lahore"] },
      { "name": "preferredDate", "type": "date", "label": "Preferred Date", "required": true },
      { "name": "preferredTime", "type": "time", "label": "Preferred Time", "required": true },
      { "name": "notes", "type": "textarea", "label": "Additional Notes", "required": false }
    ],
    "submitLabel": "Book Service",
    "action": "https://eshifa.org/api/book"
  }
}
```

### Component Breakdown

```
src/app/home-health/page.tsx
├── <HeroSection />            — headline + call + app download CTAs
├── <ServiceGrid />            — 10 service cards (icon + title + availability badge)
├── <HowItWorks />             — 4-step process
├── <AppDownloadBanner />      — Google Play + App Store badges
├── <BookingForm />            — service booking form
└── <ContactBand />            — UAN + WhatsApp + address
```

---

## 7. /academics-research

### Real URL
`https://www.shifa.com.pk/academics-research` — links to `#` in nav. **Page does not exist yet.**

### Discovery Notes
No live page found. Based on Shifa's positioning as a quaternary care hospital with US/Europe-trained consultants, this page should cover: medical education, residency programs, research publications, and clinical training.

### Recommended Page Data (JSON)

```json
{
  "slug": "academics-research",
  "seo": {
    "title": "Academics & Research | Shifa International Hospitals",
    "description": "Shifa International Hospitals' academic and research programs — medical education, residency training, and clinical research in Islamabad, Pakistan.",
    "keywords": ["shifa academics", "medical residency islamabad", "shifa research", "CPSP training hospital islamabad"],
    "canonical": "https://www.shifa.com.pk/academics-research"
  },
  "hero": {
    "headline": "Advancing Medicine. Training Tomorrow's Healers.",
    "subheadline": "Shifa International Hospitals is a recognized training institution for postgraduate medical education and clinical research in Pakistan.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Training Programs", "href": "#programs", "variant": "primary" },
      { "label": "Research Publications", "href": "#research", "variant": "ghost" }
    ]
  },
  "sections": [
    {
      "id": "programs",
      "type": "cards",
      "heading": "Academic Programs",
      "items": [
        { "title": "Postgraduate Medical Training", "description": "CPSP-recognized residency and fellowship programs across multiple specialities." },
        { "title": "Nursing Education", "description": "Clinical nursing training in partnership with leading nursing institutions." },
        { "title": "Allied Health Training", "description": "Structured training for physiotherapy, laboratory, radiology, and pharmacy disciplines." },
        { "title": "CME & Workshops", "description": "Continuing Medical Education events, workshops, and specialist masterclasses." }
      ]
    },
    {
      "id": "research",
      "type": "list",
      "heading": "Research & Publications",
      "items": [
        { "title": "Clinical Research", "description": "Evidence-based clinical research led by Shifa's consultant physicians across specialities." },
        { "title": "Journal Publications", "description": "Shifa physicians regularly contribute to national and international peer-reviewed journals." },
        { "title": "Research Ethics Board", "description": "Institutional review board oversight for all research protocols." }
      ]
    }
  ],
  "contactEmail": "academics@shifa.com.pk",
  "note": "Content to be populated from Shifa's academic department. CMS-ready structure."
}
```

### Component Breakdown

```
src/app/academics-research/page.tsx
├── <HeroSection />
├── <ProgramCards />           — postgrad, nursing, allied health, CME
├── <ResearchSection />        — publications + ethics board
├── <ContactAcademics />       — email + department contact
└── <CTABand />                — "Apply for Training" CTA
```

---

## 8. /corporate

### Real URL
`https://www.shifa.com.pk/corporate` — links to `#` in nav. **Page does not exist yet.**

### Discovery Notes
No live page found. Corporate services likely include: B2B health screening packages, corporate tie-ups, Executive Health Service for companies, health insurance partnerships.

### Recommended Page Data (JSON)

```json
{
  "slug": "corporate",
  "seo": {
    "title": "Corporate Health Services | Shifa International Hospitals",
    "description": "Corporate health packages, executive screening, and employee wellness programs from Shifa International Hospitals — Pakistan's JCI Gold-accredited hospital.",
    "keywords": ["corporate health islamabad", "employee health screening", "shifa corporate", "group health packages pakistan"],
    "canonical": "https://www.shifa.com.pk/corporate"
  },
  "hero": {
    "headline": "Investing in Your Team's Health",
    "subheadline": "Shifa's Corporate Health Services provide organizations with tailored medical screening, employee wellness programs, and priority access to 300+ specialist consultants.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Get a Corporate Package", "href": "#contact", "variant": "primary" },
      { "label": "View Packages", "href": "#packages", "variant": "ghost" }
    ]
  },
  "packages": [
    {
      "id": "basic",
      "name": "Basic Corporate Package",
      "tests": ["Blood profile", "Diabetes screening", "Blood pressure assessment"],
      "consultations": ["General physician consultation"],
      "features": ["Group booking discount", "Same-day results", "Digital report delivery"],
      "priceLabel": "Call for pricing"
    },
    {
      "id": "essential",
      "name": "Essential Corporate Package",
      "tests": ["Blood profile", "Liver & kidney function", "Diabetes screening", "Hepatitis screening", "Thyroid screening"],
      "consultations": ["General physician", "Cardiac risk assessment"],
      "features": ["Group booking", "Same-day results", "7-day follow-up consultation", "Complimentary breakfast"],
      "priceLabel": "Call for pricing"
    },
    {
      "id": "comprehensive",
      "name": "Comprehensive Corporate Package",
      "tests": ["Full blood profile", "Liver & kidney function", "Diabetes", "Hepatitis B & C", "Thyroid", "Bone density", "Lung function", "Heart health analysis"],
      "consultations": ["Internal medicine", "Cardiology risk", "Nutritionist consultation"],
      "features": ["VIP experience", "Same-day diagnostics", "Comprehensive health report", "7-day follow-up", "HR health summary report"],
      "priceLabel": "Call for pricing"
    }
  ],
  "benefits": [
    { "title": "Reduced Absenteeism", "description": "Early detection reduces employee sick days and long-term medical costs." },
    { "title": "Priority Access", "description": "Corporate clients receive priority booking across all 45+ specialities." },
    { "title": "Flexible On-site Options", "description": "Shifa's team can visit your office for basic screenings and health awareness sessions." },
    { "title": "Insurance Panel", "description": "Shifa is panelled with major health insurance providers in Pakistan." }
  ],
  "inquiryForm": {
    "fields": [
      { "name": "companyName", "type": "text", "label": "Company Name", "required": true },
      { "name": "contactPerson", "type": "text", "label": "Contact Person", "required": true },
      { "name": "designation", "type": "text", "label": "Designation", "required": false },
      { "name": "email", "type": "email", "label": "Business Email", "required": true },
      { "name": "phone", "type": "tel", "label": "Phone Number", "required": true },
      { "name": "employeeCount", "type": "select", "label": "Number of Employees", "required": true,
        "options": ["1–50", "51–200", "201–500", "500+"] },
      { "name": "packageInterest", "type": "select", "label": "Package Interest", "required": false,
        "options": ["Basic", "Essential", "Comprehensive", "Custom"] },
      { "name": "message", "type": "textarea", "label": "Additional Requirements", "required": false }
    ],
    "submitLabel": "Request Corporate Quote",
    "action": "/api/corporate-inquiry"
  }
}
```

### Component Breakdown

```
src/app/corporate/page.tsx
├── <HeroSection />
├── <CorporateBenefits />      — 4 USP cards
├── <PackageComparison />      — 3-tier package table / cards
├── <CorporateInquiryForm />   — B2B form
└── <ContactBand />
```

---

## 9. /news-events

### Real URL
`https://shifanews.com` (external bilingual news property)

### Discovery Notes
ShifaNews is a standalone bilingual (Urdu/English) health news platform. Categories are primarily in Urdu. The `/news-events` route should aggregate content via RSS/API and display in the Next.js app.

### Page Data (JSON)

```json
{
  "slug": "news-events",
  "seo": {
    "title": "News & Events | Shifa International Hospitals",
    "description": "Latest health news, hospital events, medical awareness campaigns, and expert health articles from Shifa International Hospitals.",
    "keywords": ["shifa news", "shifa events", "health news pakistan", "shifa hospital updates"],
    "canonical": "https://www.shifa.com.pk/news-events"
  },
  "hero": {
    "headline": "Latest Health News & Hospital Events",
    "subheadline": "Medical awareness, expert insights, and Shifa updates — in Urdu and English.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Browse All Articles", "href": "https://shifanews.com", "variant": "primary" },
      { "label": "Subscribe to Updates", "href": "#newsletter", "variant": "ghost" }
    ]
  },
  "categories": [
    { "slug": "latest", "label": "Latest News", "urduLabel": "تازہ ترین" },
    { "slug": "children", "label": "Children's Health", "urduLabel": "بچے" },
    { "slug": "elderly", "label": "Elderly Health", "urduLabel": "بزرگ" },
    { "slug": "womens-health", "label": "Women's Health", "urduLabel": "خواتین" },
    { "slug": "diseases", "label": "Diseases", "urduLabel": "امراض" },
    { "slug": "diagnosis", "label": "Diagnosis & Treatment", "urduLabel": "تشخیص" },
    { "slug": "symptoms", "label": "Symptoms", "urduLabel": "علامات" },
    { "slug": "nutrition", "label": "Nutrition", "urduLabel": "غذائیات" },
    { "slug": "interviews", "label": "Interviews", "urduLabel": "انٹرویوز" },
    { "slug": "misc", "label": "Miscellaneous", "urduLabel": "متفرقات" }
  ],
  "articleSchema": {
    "id": "string",
    "slug": "string",
    "title": "string",
    "excerpt": "string",
    "category": "ArticleCategory",
    "language": "en | ur",
    "publishedAt": "ISO date string",
    "featuredImage": "URL string",
    "author": "string",
    "sourceUrl": "https://shifanews.com/[slug]"
  },
  "featuredTopics": [
    "HPV Infections", "Dengue Fever", "Knee Pain", "Protein Deficiency",
    "Blood Oxygen Levels", "Diabetes Management", "Women's Health"
  ],
  "externalUrl": "https://shifanews.com"
}
```

### Component Breakdown

```
src/app/news-events/page.tsx
├── <HeroSection />
├── <CategoryFilter />         — bilingual category pills
├── <FeaturedArticle />        — hero-size featured story
├── <ArticleGrid />            — 9-card grid, paginated
├── <VideoSection />           — YouTube Shorts embed grid
├── <NewsletterBar />          — subscribe to news updates
└── <ExternalNewsLink />       — "Read more on ShifaNews" CTA
```

### Data Source Strategy
- RSS feed: `https://shifanews.com/feed` (standard WordPress RSS)
- API: implement `/api/news?category=&page=&lang=` that proxies ShifaNews
- Cache: ISR with 1-hour revalidation (`revalidate: 3600`)

---

## 10. /contact-us

### Real URL
`https://www.shifa.com.pk/contact-us`

### Extracted Data

**Main Hospital — Islamabad**
- Phone: `051-8464646`
- Emergency / Ambulance: `051-846-4646`
- WhatsApp: `+92-51-8464646`
- Address: Pitras Bukhari Road, H-8/4, Islamabad Capital Territory

**External Properties**
- Patient Portal: `patientportal.shifa.com.pk`
- International Patients: `shifaglobal.uk`
- Home Health: `eshifa.org`
- Careers: `careers.shifa.com.pk`
- News: `shifanews.com`
- Medical Center G-10: `051-8469000`

**Social Media**
Facebook · Instagram · YouTube · TikTok · X (Twitter) · Threads · LinkedIn (@ShifaIntl)

### Page Data (JSON)

```json
{
  "slug": "contact-us",
  "seo": {
    "title": "Contact Us | Shifa International Hospitals Islamabad",
    "description": "Contact Shifa International Hospitals Islamabad — phone, WhatsApp, address, emergency line, and department contacts.",
    "keywords": ["shifa contact", "shifa hospital phone number", "shifa islamabad address", "051-8464646"],
    "canonical": "https://www.shifa.com.pk/contact-us"
  },
  "hero": {
    "headline": "Get in Touch",
    "subheadline": "We're here 24/7 — for emergencies, appointments, and general enquiries.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Call 051-8464646", "href": "tel:05184646", "variant": "primary" },
      { "label": "WhatsApp", "href": "https://wa.me/925184646", "variant": "ghost" }
    ]
  },
  "locations": [
    {
      "id": "main-hospital",
      "name": "Shifa International Hospitals — Main Campus",
      "address": "Pitras Bukhari Road, H-8/4, Islamabad Capital Territory",
      "phone": "051-8464646",
      "emergency": "051-846-4646",
      "whatsapp": "+92518464646",
      "mapEmbedUrl": "https://maps.google.com/?q=Shifa+International+Hospital+Islamabad",
      "hours": "24/7"
    },
    {
      "id": "g10-center",
      "name": "Shifa Medical Center — G-10",
      "address": "G-10 Markaz, Islamabad",
      "phone": "051-8469000",
      "note": "Secondary care center — 20% off lab, X-ray, ultrasound",
      "hours": "Mon–Sat"
    }
  ],
  "departmentContacts": [
    { "department": "Emergency", "phone": "051-846-4646", "available": "24/7" },
    { "department": "OPD Appointments", "phone": "051-8464646", "available": "24/7" },
    { "department": "International Patients", "phone": "+44 121 790 1777", "email": "info@shifaglobal.uk" },
    { "department": "Home Health (eShifa)", "phone": "051-111-111-567", "email": "info@eShifa.org" },
    { "department": "Careers / HR", "phone": "+92 51 846 3711", "email": "jobs@shifa.com.pk" },
    { "department": "Patient Portal", "url": "https://patientportal.shifa.com.pk" }
  ],
  "socialMedia": [
    { "platform": "Facebook", "handle": "@ShifaIntl", "url": "https://facebook.com/ShifaIntl" },
    { "platform": "Instagram", "handle": "@ShifaIntl", "url": "https://instagram.com/ShifaIntl" },
    { "platform": "YouTube", "handle": "@ShifaIntl", "url": "https://youtube.com/@ShifaIntl" },
    { "platform": "TikTok", "handle": "@ShifaIntl", "url": "https://tiktok.com/@ShifaIntl" },
    { "platform": "X (Twitter)", "handle": "@ShifaIntl", "url": "https://twitter.com/ShifaIntl" },
    { "platform": "LinkedIn", "handle": "@ShifaIntl", "url": "https://linkedin.com/company/ShifaIntl" },
    { "platform": "Threads", "handle": "@ShifaIntl", "url": "https://threads.net/@ShifaIntl" }
  ],
  "contactForm": {
    "fields": [
      { "name": "name", "type": "text", "label": "Full Name", "required": true, "placeholder": "Your full name" },
      { "name": "email", "type": "email", "label": "Email Address", "required": true, "placeholder": "you@example.com" },
      { "name": "phone", "type": "tel", "label": "Phone Number", "required": true, "placeholder": "+92 xxx xxxxxxx" },
      { "name": "subject", "type": "select", "label": "Subject", "required": true,
        "options": ["General Inquiry", "Appointment", "Complaint", "Feedback", "Media / Press", "Corporate", "Careers"] },
      { "name": "department", "type": "select", "label": "Department (optional)", "required": false },
      { "name": "message", "type": "textarea", "label": "Message", "required": true, "placeholder": "How can we help you?", "rows": 5 }
    ],
    "submitLabel": "Send Message",
    "action": "/api/contact"
  }
}
```

### Component Breakdown

```
src/app/contact-us/page.tsx
├── <HeroSection />            — headline + call + WhatsApp CTAs
├── <LocationCards />          — main hospital + G-10 center cards
├── <MapEmbed />               — Google Maps iframe (main campus)
├── <DepartmentContacts />     — department-wise phone/email table
├── <ContactForm />            — general inquiry form
├── <SocialLinks />            — all 7 platforms
└── <EmergencyBand />          — "Emergency: 051-846-4646 · 24/7" sticky callout
```

---

## 11. /login

### Real URL
`https://patientportal.shifa.com.pk` (same as patient portal)

### Discovery Notes
Login is a redirect/overlay to the external patient portal. The `/login` route should either redirect directly or show a minimal gateway page with the login form linking to the portal.

### Page Data (JSON)

```json
{
  "slug": "login",
  "seo": {
    "title": "Patient Login | Shifa International Hospitals",
    "description": "Sign in to your Shifa International Hospitals patient account to access diagnostic reports, appointments, and health records.",
    "keywords": ["shifa patient login", "shifa portal sign in", "diagnostic reports online"],
    "canonical": "https://www.shifa.com.pk/login"
  },
  "redirectTarget": "https://patientportal.shifa.com.pk",
  "loginUI": {
    "heading": "Sign In to Your Account",
    "subheading": "Access your diagnostic reports, appointments, and health records.",
    "fields": [
      { "name": "username", "type": "text", "label": "Username / Patient ID", "required": true, "placeholder": "Enter your username" },
      { "name": "password", "type": "password", "label": "Password", "required": true, "placeholder": "Enter your password" }
    ],
    "submitLabel": "Sign In",
    "links": [
      { "label": "Forgot password?", "href": "https://patientportal.shifa.com.pk/forgot-password" },
      { "label": "Register as a new patient", "href": "https://patientportal.shifa.com.pk/register" }
    ]
  },
  "sideContent": {
    "heading": "What You Can Access",
    "items": [
      "Diagnostic lab and imaging reports",
      "Appointment history and upcoming visits",
      "Second opinion request status",
      "Executive Health Service records",
      "Prescription history"
    ]
  }
}
```

### Component Breakdown

```
src/app/login/page.tsx
├── <LoginCard />              — username + password + submit
├── <PortalFeatureList />      — what you can access (right column)
└── <RegisterCTA />            — "New patient? Register here"
```

### Implementation Note
Use `redirect()` from Next.js or a client-side redirect if full login should happen on the external portal. The local page serves as a branded gateway only.

---

## 12. /find-a-doctor

### Real URL
`https://www.shifa.com.pk/find-a-doctor`

### Extracted Data
- Filter: Specialty (45+ options)
- Filter: City — `Islamabad`, `Faisalabad`
- Search: by doctor name
- Output: doctor cards with specialty, image, profile link

### Page Data (JSON)

```json
{
  "slug": "find-a-doctor",
  "seo": {
    "title": "Find a Doctor | Shifa International Hospitals",
    "description": "Search and connect with 300+ specialist doctors at Shifa International Hospitals Islamabad and Faisalabad. Filter by specialty, location, and availability.",
    "keywords": ["find a doctor islamabad", "shifa doctors", "specialist islamabad", "best doctors pakistan"],
    "canonical": "https://www.shifa.com.pk/find-a-doctor"
  },
  "hero": {
    "headline": "Find the Right Specialist",
    "subheadline": "Connect with 300+ clinical consultants trained in the USA and Europe across 45+ specialities.",
    "backgroundType": "gradient",
    "ctas": []
  },
  "searchFilters": [
    {
      "id": "specialty",
      "label": "Specialty",
      "type": "select",
      "options": [
        "Anesthesiology", "Audiology", "Cardiology", "Cardiac Surgery",
        "Dentistry & Orthodontics", "Dermatology", "Emergency Medicine",
        "Endocrinology & Diabetes", "ENT", "Gastroenterology & Hepatology",
        "General Surgery", "Infectious Diseases", "Internal Medicine",
        "Nephrology", "Neurology", "Neurosurgery", "Obstetrics & Gynaecology",
        "Medical Oncology", "Radiation Oncology", "Ophthalmology",
        "Orthopaedics", "Paediatrics", "Pathology", "Physical Medicine & Rehabilitation",
        "Plastic Surgery", "Psychiatry", "Pulmonology & Critical Care",
        "Radiology & Imaging", "Rheumatology", "Urology",
        "Liver Transplant", "Bone Marrow Transplant", "Kidney Transplant", "Corneal Transplant"
      ]
    },
    {
      "id": "city",
      "label": "City",
      "type": "select",
      "options": ["Islamabad", "Faisalabad"]
    },
    {
      "id": "gender",
      "label": "Gender",
      "type": "select",
      "options": ["Male", "Female", "Any"]
    },
    {
      "id": "availability",
      "label": "Availability",
      "type": "select",
      "options": ["Any Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
      "id": "query",
      "label": "Search by Name",
      "type": "text",
      "placeholder": "Type doctor name..."
    }
  ],
  "doctorCardSchema": {
    "id": "string",
    "slug": "string",
    "name": "string",
    "title": "string",
    "specialty": "string",
    "qualifications": "string[]",
    "gender": "male | female",
    "location": "islamabad | faisalabad",
    "availability": "string[]",
    "image": "URL",
    "profileUrl": "/doctors/[slug]"
  },
  "pagination": {
    "defaultPageSize": 12,
    "layout": "grid-3-col"
  }
}
```

### Component Breakdown

```
src/app/find-a-doctor/page.tsx
├── <HeroSection />            — headline + subheadline
├── <DoctorSearchBar />        — specialty + city + gender + availability + name
├── <ActiveFilters />          — pill badges showing active filters with × to remove
├── <DoctorCardGrid />         — 12-per-page responsive grid
├── <Pagination />
└── <ContactBand />            — "Can't find a doctor? Call 051-8464646"
```

### Data Source Strategy
- Static: `src/data/doctors.ts` (extend `medical-data.ts`)
- API-ready: `GET /api/doctors?specialty=&city=&gender=&availability=&q=&page=`
- Filtering: client-side for small dataset, server-side when >50 doctors

---

## 13. /book-appointment

### Real URL
Booking is via WhatsApp (`+92-518464646`) and phone (`051-8464646`). No standalone booking form page found on shifa.com.pk — **implement this route.**

### Discovery Notes
Appointment booking routes through WhatsApp or phone call. The page should provide a structured multi-step form as an upgrade path, with a WhatsApp fallback.

### Page Data (JSON)

```json
{
  "slug": "book-appointment",
  "seo": {
    "title": "Book an Appointment | Shifa International Hospitals",
    "description": "Book your appointment online at Shifa International Hospitals Islamabad. Choose your specialty, preferred doctor, and time slot — or contact us via WhatsApp.",
    "keywords": ["book appointment shifa", "shifa appointment online", "specialist appointment islamabad", "051-8464646"],
    "canonical": "https://www.shifa.com.pk/book-appointment"
  },
  "hero": {
    "headline": "Book Your Appointment",
    "subheadline": "Schedule a consultation with Shifa's 300+ specialists — online or via WhatsApp.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Book Online", "href": "#form", "variant": "primary" },
      { "label": "WhatsApp +92-51-8464646", "href": "https://wa.me/925184646", "variant": "ghost" }
    ]
  },
  "multiStepForm": {
    "steps": [
      {
        "step": 1,
        "title": "Select Specialty",
        "fields": [
          { "name": "specialty", "type": "select", "label": "Specialty", "required": true },
          { "name": "location", "type": "radio", "label": "Hospital Location", "required": true,
            "options": ["Islamabad", "Faisalabad"] },
          { "name": "visitType", "type": "radio", "label": "Visit Type", "required": true,
            "options": ["First Visit", "Follow-up"] }
        ]
      },
      {
        "step": 2,
        "title": "Choose Doctor (Optional)",
        "fields": [
          { "name": "preferredDoctor", "type": "search-select", "label": "Preferred Doctor", "required": false,
            "placeholder": "Search by name or browse all" }
        ]
      },
      {
        "step": 3,
        "title": "Pick Date & Time",
        "fields": [
          { "name": "preferredDate", "type": "date", "label": "Preferred Date", "required": true },
          { "name": "preferredTime", "type": "radio", "label": "Time Slot", "required": true,
            "options": ["Morning (8 AM–12 PM)", "Afternoon (12 PM–5 PM)", "Evening (5 PM–8 PM)"] }
        ]
      },
      {
        "step": 4,
        "title": "Your Details",
        "fields": [
          { "name": "patientName", "type": "text", "label": "Full Name", "required": true },
          { "name": "phone", "type": "tel", "label": "Phone Number", "required": true },
          { "name": "email", "type": "email", "label": "Email Address", "required": false },
          { "name": "age", "type": "number", "label": "Age", "required": false },
          { "name": "gender", "type": "select", "label": "Gender", "required": false,
            "options": ["Male", "Female", "Other"] },
          { "name": "notes", "type": "textarea", "label": "Additional Notes", "required": false,
            "placeholder": "Brief description of your concern (optional)" }
        ]
      }
    ],
    "submitLabel": "Confirm Appointment",
    "action": "/api/appointments",
    "successMessage": "Your appointment request has been received. Our team will call you within 1 business hour to confirm.",
    "whatsappFallback": {
      "label": "Prefer WhatsApp?",
      "number": "+92518464646",
      "messageTemplate": "Hi, I'd like to book an appointment at Shifa International Hospitals for [SPECIALTY] on [DATE]."
    }
  },
  "sundayOPD": {
    "note": "Sunday OPD available — up to 30% discount on consultations and diagnostics.",
    "badge": "30% OFF on Sundays"
  }
}
```

### Component Breakdown

```
src/app/book-appointment/page.tsx
├── <HeroSection />            — headline + online form + WhatsApp CTA
├── <SundayOPDBadge />         — "Sunday OPD — 30% OFF" banner
├── <MultiStepForm />          — 4-step appointment form with progress bar
│   ├── Step1: <SpecialtySelector />
│   ├── Step2: <DoctorPicker />
│   ├── Step3: <DateTimePicker />
│   └── Step4: <PatientDetails />
├── <WhatsAppFallback />       — "Prefer WhatsApp?" with pre-filled link
└── <ContactBand />
```

---

## 14. /doctors

### Real URL
Same as `/find-a-doctor` — both routes should render the doctor listing.

### Discovery Notes
`/doctors` is the canonical listing page. `/find-a-doctor` is the user-facing search page. Both can use the same component with different hero copy.

### Page Data (JSON)

```json
{
  "slug": "doctors",
  "seo": {
    "title": "Our Doctors | Shifa International Hospitals",
    "description": "Meet Shifa International Hospitals' 300+ clinical consultants — specialists trained in the USA and Europe across 45+ medical and surgical disciplines.",
    "keywords": ["shifa doctors", "specialist islamabad", "consultant list shifa", "best doctors islamabad"],
    "canonical": "https://www.shifa.com.pk/doctors"
  },
  "hero": {
    "headline": "Our Clinical Team",
    "subheadline": "300+ consultants trained in the USA and Europe — 45+ specialities, two campuses.",
    "backgroundType": "gradient",
    "ctas": [
      { "label": "Find a Specialist", "href": "/find-a-doctor", "variant": "primary" },
      { "label": "Book Appointment", "href": "/book-appointment", "variant": "ghost" }
    ]
  },
  "departmentGrouping": [
    { "label": "Cardiology & Cardiac Surgery", "slugs": ["cardiology", "cardiac-surgery"] },
    { "label": "Oncology", "slugs": ["medical-oncology", "radiation-oncology"] },
    { "label": "Neurosciences", "slugs": ["neurology", "neurosurgery"] },
    { "label": "Surgery", "slugs": ["general-surgery", "orthopaedics", "plastic-surgery", "urology"] },
    { "label": "Women & Children", "slugs": ["obstetrics-and-gynaecology", "paediatrics"] },
    { "label": "Internal Medicine", "slugs": ["internal-medicine", "endocrinology", "nephrology", "rheumatology", "pulmonology"] },
    { "label": "Diagnostics", "slugs": ["radiology", "pathology"] },
    { "label": "Transplant", "slugs": ["liver-transplant", "bone-marrow-transplant", "kidney-transplant"] }
  ],
  "doctorCardSchema": {
    "id": "string",
    "slug": "string",
    "name": "string",
    "title": "string",
    "specialty": "string",
    "qualifications": "string[]",
    "gender": "male | female",
    "location": "islamabad | faisalabad",
    "image": "URL",
    "profileUrl": "/doctors/[slug]",
    "bookHref": "/book-appointment?doctor=[slug]"
  }
}
```

### Component Breakdown

```
src/app/doctors/page.tsx
├── <HeroSection />
├── <DepartmentNav />          — horizontal scrollable department tabs
├── <DoctorSearchBar />        — shared with /find-a-doctor
├── <DoctorCardGrid />         — grouped by department or flat grid
├── <Pagination />
└── <BookingCTA />             — "Book with any specialist — 051-8464646"

src/app/doctors/[slug]/page.tsx    — Individual doctor profile
├── <DoctorProfileHero />      — name, title, specialty, qualifications
├── <DoctorBio />              — about section
├── <ProceduresList />         — treatments performed
├── <AvailabilityCalendar />   — days available
├── <BookingCard />            — sticky sidebar booking CTA
└── <RelatedDoctors />         — same specialty
```

---

## 15. /virtual-tour

### Real URL
`https://www.shifa.com.pk/virtual-tour`

### Extracted Data
Page exists with 4 tour areas. Content is thin — likely embeds a third-party virtual tour player.

### Page Data (JSON)

```json
{
  "slug": "virtual-tour",
  "seo": {
    "title": "Virtual Tour | Shifa International Hospitals Islamabad",
    "description": "Take a virtual tour of Shifa International Hospitals Islamabad — explore patient areas, diagnostic facilities, specialty care units, and patient comfort services.",
    "keywords": ["shifa virtual tour", "shifa hospital tour", "shifa islamabad inside"],
    "canonical": "https://www.shifa.com.pk/virtual-tour"
  },
  "hero": {
    "headline": "Explore Shifa From Anywhere",
    "subheadline": "Take an immersive virtual tour of Pakistan's leading JCI Gold-accredited hospital.",
    "backgroundType": "image",
    "ctas": [
      { "label": "Start Tour", "href": "#tour", "variant": "primary" },
      { "label": "Book a Visit", "href": "/book-appointment", "variant": "ghost" }
    ]
  },
  "tourAreas": [
    {
      "id": "patient-areas",
      "title": "Main Patient Areas",
      "description": "Core hospital facilities — OPD, wards, reception, and patient lounges.",
      "thumbnail": "/images/tour/patient-areas.jpg"
    },
    {
      "id": "diagnostics",
      "title": "Diagnostic & Treatment Facilities",
      "description": "640-slice CT, 3 Tesla MRI, imaging suites, and interventional radiology.",
      "thumbnail": "/images/tour/diagnostics.jpg"
    },
    {
      "id": "specialty-care",
      "title": "Specialty Care",
      "description": "Specialized medical departments — Shifa Heart Center, Cancer Center, transplant units.",
      "thumbnail": "/images/tour/specialty.jpg"
    },
    {
      "id": "comfort-support",
      "title": "Patient Comfort & Support",
      "description": "Amenities, cafeteria, family waiting areas, and patient support services.",
      "thumbnail": "/images/tour/comfort.jpg"
    }
  ],
  "embedConfig": {
    "type": "iframe",
    "src": "VIRTUAL_TOUR_EMBED_URL",
    "note": "Replace with actual Matterport / Cupix / Google Street View embed URL"
  }
}
```

### Component Breakdown

```
src/app/virtual-tour/page.tsx
├── <HeroSection />
├── <TourAreaGrid />           — 4 clickable area cards with thumbnail
├── <TourEmbed />              — iframe / Matterport embed
└── <BookingCTA />             — "Visited virtually? Book your appointment"
```

---

## 16. Implementation Notes

### URL Routing Summary

| Route | Implementation | External URL |
|---|---|---|
| `/patient-portal` | Gateway page → redirect | `patientportal.shifa.com.pk` |
| `/health-library` | Full Next.js hub | RSS from `shifanews.com` |
| `/international-patients` | Gateway + form | `shifaglobal.uk` |
| `/home-health` | Gateway + services | `eshifa.org` |
| `/academics-research` | New page — no content exists | Static (CMS-ready) |
| `/corporate` | New page — no content exists | Static + form |
| `/news-events` | Aggregator page | RSS from `shifanews.com` |
| `/careers` | Gateway → redirect | `careers.shifa.com.pk` |
| `/virtual-tour` | Exists — add embed | `shifa.com.pk/virtual-tour` |
| `/contact-us` | Exists — build structured | Phone/form/map |
| `/login` | Redirect gateway | `patientportal.shifa.com.pk` |
| `/find-a-doctor` | Exists — build search | Static data → API |
| `/book-appointment` | New — multi-step form | WhatsApp fallback |
| `/doctors` | New listing page | Same data as find-a-doctor |

### File Structure

```
src/
├── app/
│   ├── patient-portal/page.tsx
│   ├── health-library/
│   │   ├── page.tsx
│   │   ├── patient-guide/page.tsx
│   │   ├── patient-guide/[slug]/page.tsx
│   │   ├── interviews/page.tsx
│   │   ├── blogs/page.tsx
│   │   ├── blogs/[slug]/page.tsx
│   │   └── calculators/page.tsx
│   ├── international-patients/page.tsx
│   ├── home-health/page.tsx
│   ├── academics-research/page.tsx
│   ├── corporate/page.tsx
│   ├── news-events/page.tsx
│   ├── careers/page.tsx
│   ├── virtual-tour/page.tsx
│   ├── contact-us/page.tsx
│   ├── login/page.tsx
│   ├── find-a-doctor/page.tsx
│   ├── book-appointment/page.tsx
│   └── doctors/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── ui/
│   │   ├── HeroSection.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── StatCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── StepProcess.tsx
│   │   ├── AccordionFAQ.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── NewsletterBar.tsx
│   │   ├── ContactBand.tsx
│   │   ├── SocialLinks.tsx
│   │   └── PageBreadcrumb.tsx
│   ├── doctors/
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorCardGrid.tsx
│   │   ├── DoctorSearchBar.tsx
│   │   └── DoctorProfileHero.tsx
│   ├── articles/
│   │   ├── ArticleCard.tsx
│   │   └── ArticleGrid.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── BookingForm.tsx          ← multi-step
│   │   ├── QuoteForm.tsx            ← international patients
│   │   ├── HomeHealthBookingForm.tsx
│   │   └── CorporateInquiryForm.tsx
│   └── careers/
│       └── JobCard.tsx
├── data/
│   ├── doctors.ts
│   ├── specialties.ts
│   ├── portal-features.ts
│   ├── executive-packages.ts
│   ├── home-health-services.ts
│   └── contact-info.ts
└── types/
    └── index.ts                     ← all shared types from Section 1
```

### API Routes to Implement

```
src/app/api/
├── contact/route.ts             POST — contact form submission
├── appointments/route.ts        POST — appointment booking
├── corporate-inquiry/route.ts   POST — corporate package inquiry
├── news/route.ts                GET  — proxy ShifaNews RSS feed
└── doctors/route.ts             GET  — doctor search with filters
```

### External Integrations

| Service | Purpose | Integration |
|---|---|---|
| `patientportal.shifa.com.pk` | Patient login | Redirect / iframe |
| `shifaglobal.uk` | International patients | Link + form proxy |
| `eshifa.org` | Home health booking | Link + form proxy |
| `careers.shifa.com.pk` | Job applications | Redirect |
| `shifanews.com` | News/articles | RSS feed proxy |
| WhatsApp `+92518464646` | Booking fallback | `wa.me` deep link |
| Google Maps | Hospital location embed | Maps Embed API |
| Matterport / Cupix | Virtual tour | Embed `<iframe>` |

### SEO Implementation Notes

Each page needs:
```ts
// src/app/[route]/page.tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: [...],
  alternates: { canonical: "https://www.shifa.com.pk/[route]" },
  openGraph: { title, description, url, siteName: "Shifa International Hospitals", type: "website" },
};
```

JSON-LD schema per page type:
- Contact page → `LocalBusiness` + `ContactPoint`
- Doctor listing → `MedicalOrganization` + `Physician` per card
- News/Health Library → `Article` per post
- Booking → `MedicalClinic` + `MedicalService`
- Careers → `JobPosting` per listing

### Sunday OPD Note
Applies to: `/book-appointment`, `/find-a-doctor`, `/contact-us`
> "Sunday OPD — up to 30% discount on consultations and diagnostics."
Display as a persistent banner on booking-related pages.

---

*Document generated from live scraping of shifa.com.pk, shifaglobal.uk, eshifa.org, careers.shifa.com.pk, shifanews.com — April 2026.*
