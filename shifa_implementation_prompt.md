# IMPLEMENTATION PROMPT — SHIFA SPECIALTY PAGE

Use this prompt verbatim when working with an AI coding assistant (Cursor, Claude, Copilot, v0, etc.) to build the specialty pages. Replace `[SPECIALTY]` placeholders with actual values.

---

## PROMPT

```
You are building a specialty detail page for Shifa International Hospitals (shifa.com.pk).

STACK: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Recharts

---

TASK: Build the `SpecialtyPage` component and all sub-components for the "[SPECIALTY NAME]" specialty.

---

## DATA

Use this content exactly as provided. Do not paraphrase or add information.

### Specialty metadata
- name: "[SPECIALTY NAME]"
- tagline: "[TAGLINE]"
- slug: "/specialities/[slug]/islamabad"
- url: "https://www.shifa.com.pk/specialities/[slug]/islamabad"

### Stats (render as animated count-up cards)
[PASTE RELEVANT STATS FROM shifa_specialties.md — e.g. beds, consultants, etc.]

### Facilities
[PASTE FACILITIES LIST]

### Diagnostics
[PASTE DIAGNOSTICS LIST]

### Treatments
[PASTE TREATMENTS WITH SUB-HEADINGS]

### Milestones
[PASTE MILESTONES TABLE ROWS]

### When to Consult
[PASTE WHEN TO SEE A SPECIALIST PARAGRAPH]

### Data Visualization
- Chart type: [LINE / BAR / DONUT / RADAR — pick from template spec]
- Chart title: "[e.g. Cardiac Procedures Performed 2000–2025]"
- Data: [PROVIDE ACTUAL OR REPRESENTATIVE DATA POINTS as JSON array]
  Example: [{"year":"2000","value":120},{"year":"2005","value":340},...]

---

## DESIGN RULES (follow exactly — no deviation)

### Tokens (use CSS variables, define in globals.css)
--color-primary: #C8102E
--color-primary-dim: #9B0C23
--color-surface: #FAFAF8
--color-surface-2: #F2F1EE
--color-border: #E4E2DC
--color-text-1: #1A1A1A
--color-text-2: #444444
--color-text-3: #787878
--color-accent: #1B4F72
--color-accent-2: #2E86C1
--radius-md: 12px
--radius-lg: 20px
--shadow-card: 0 2px 16px rgba(0,0,0,0.06)
--shadow-hover: 0 8px 32px rgba(0,0,0,0.11)
--transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1)

### Typography
- Hero title: 56px / font-bold / tracking-[0.04em] / uppercase
- H2: 28px / font-semibold
- H3: 20px / font-semibold
- Body: 17px / leading-[1.7]
- Labels: 12px / font-medium / uppercase / tracking-[0.04em]
- Monospace (years, slugs): font-mono, 13px, color text-3

### Page sections (build in this order, all required)
1. HeroSection — asymmetric split, stat cards, pill CTAs
2. StickySectionNav — blur backdrop, active red underline
3. OverviewSection — prose + animated stat cards grid
4. FacilitiesGrid — 3-col desktop, horizontal scroll mobile
5. DiagnosticsAccordion — expand on click, no bullet points
6. TreatmentsTabs — pill tabs, AnimatePresence slide
7. MilestonesTimeline — SVG line draw, node stagger
8. DataVizBlock — Recharts chart, scroll-triggered animation
9. TeamStrip — horizontal scroll, circular avatars
10. ConsultCallout — tinted band, dot-prefix symptom list
11. BookingCTA — dark background, WhatsApp + call buttons

### Animations (all scroll-triggered via IntersectionObserver or Framer Motion whileInView)
- Default scroll enter: fade + translateY(24px→0), 0.45s ease-out
- Sibling stagger: 40ms between elements
- Count-up: 0 → value, 800ms, ease-out, on scroll enter
- Chart bars: scaleY 0→1, 0.6s ease-out, 60ms stagger per bar
- Chart lines: stroke-dashoffset draw, 0.8s ease-in-out
- Timeline line: SVG draw left→right, 1s
- Timeline nodes: scale 0→1, 80ms stagger
- Cards hover: translateY(-4px) + shadow-hover
- Respect prefers-reduced-motion: disable translate/scale, keep opacity

### DO NOT
- No stock photography. Use abstract SVG mesh or medical illustration in hero.
- No carousel/slider in hero.
- No bullet points. Use icon-prefixed items or accordion rows instead.
- No blue/white generic hospital palette. Use the token system above.
- No decorative charts. Charts must answer a real question with real-ish data.
- No "world-class", "seamless", "cutting-edge" as standalone adjectives.

---

## FILE STRUCTURE

```
app/
  specialities/
    [specialty]/
      [city]/
        page.tsx          ← server component, fetches data, renders SpecialtyPage
components/
  specialty/
    HeroSection.tsx
    StickySectionNav.tsx
    OverviewSection.tsx
    FacilitiesGrid.tsx
    DiagnosticsAccordion.tsx
    TreatmentsTabs.tsx
    MilestonesTimeline.tsx
    DataVizBlock.tsx
    TeamStrip.tsx
    ConsultCallout.tsx
    BookingCTA.tsx
  ui/
    AnimatedCounter.tsx
    ScrollReveal.tsx
```

---

## SEO / METADATA (implement in page.tsx)

```typescript
export const metadata: Metadata = {
  title: "[SPECIALTY NAME] | Shifa International Hospitals Islamabad",
  description: "[150-char description from specialty content — what it treats, key differentiator]",
  keywords: "[specialty] Islamabad, [specialty] Pakistan, Shifa [specialty], best [specialty] hospital Islamabad",
  alternates: { canonical: "https://www.shifa.com.pk/specialities/[slug]/islamabad" },
  openGraph: {
    title: "[SPECIALTY NAME] | Shifa International Hospitals",
    description: "[same description]",
    url: "https://www.shifa.com.pk/specialities/[slug]/islamabad",
    siteName: "Shifa International Hospitals",
    type: "website",
  },
}
```

## JSON-LD SCHEMA (inject in page.tsx via next/head or script tag)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Shifa International Hospitals — [SPECIALTY NAME]",
      "url": "https://www.shifa.com.pk/specialities/[slug]/islamabad",
      "telephone": "+92-51-8464646",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pitras Bukhari Road, H-8/4",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      },
      "medicalSpecialty": "[SPECIALTY NAME]",
      "availableService": ["[LIST KEY TREATMENTS]"],
      "parentOrganization": {
        "@type": "MedicalOrganization",
        "name": "Shifa International Hospitals Limited",
        "url": "https://www.shifa.com.pk"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Shifa [SPECIALTY] treat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[ANSWER FROM CONTENT]"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shifa.com.pk" },
        { "@type": "ListItem", "position": 2, "name": "Specialities", "item": "https://www.shifa.com.pk/specialities" },
        { "@type": "ListItem", "position": 3, "name": "[SPECIALTY NAME]", "item": "https://www.shifa.com.pk/specialities/[slug]/islamabad" }
      ]
    }
  ]
}
```

---

## DELIVER

1. All component files listed above — fully implemented, no placeholder comments
2. `globals.css` with all design tokens as CSS variables
3. `page.tsx` with metadata, JSON-LD, and data passed as props to components
4. Recharts `DataVizBlock` with scroll-triggered animation
5. Framer Motion `ScrollReveal` wrapper component reused across all sections
6. `AnimatedCounter` component for count-up stats

Start with `HeroSection.tsx`, then build remaining components in section order.
```

---

## HOW TO USE THIS PROMPT

1. Open `shifa_specialties.md` — copy the relevant specialty block
2. Open `shifa_specialty_template.md` — reference design spec for the section you're building
3. Fill all `[PLACEHOLDER]` fields in the prompt above
4. Paste into Cursor (Cmd+L), Claude, or v0
5. Build one component at a time — start with `HeroSection`, then proceed in order
6. For chart data: use actual hospital data if available, otherwise use representative trend data that matches the specialty's known growth pattern
7. Repeat for each specialty — swap content, keep all design tokens identical

---

## NOTES

- All 45+ specialty pages share identical component structure and design tokens. Only the data prop changes per page.
- `DataVizBlock` chart type changes per specialty — see the chart type mapping table in `shifa_specialty_template.md`
- `StickySectionNav` is a shared layout component — build once, reuse across all specialty pages
- If using a CMS (Strapi, Sanity, Contentful): map `shifa_specialties.md` fields to content types directly
