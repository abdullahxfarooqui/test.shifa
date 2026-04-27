# SHIFA SPECIALTY PAGE — DESIGN TEMPLATE

> **Stack target:** Next.js + Tailwind CSS + Framer Motion + Recharts / D3  
> **Theme:** Clinical precision meets warmth. Not a sterile white box. Not a marketing carousel.

---

## Design Tokens

```
--color-primary:     #C8102E      /* Shifa red */
--color-primary-dim: #9B0C23      /* deep red for hover/active */
--color-surface:     #FAFAF8      /* off-white, warmer than pure white */
--color-surface-2:   #F2F1EE      /* subtle card background */
--color-border:      #E4E2DC      /* warm gray border */
--color-text-1:      #1A1A1A      /* headings */
--color-text-2:      #444444      /* body */
--color-text-3:      #787878      /* captions, labels */
--color-accent:      #1B4F72      /* deep navy — data viz, links */
--color-accent-2:    #2E86C1      /* chart fill, secondary accent */

--font-display:  "Inter", system-ui        /* headings */
--font-body:     "Inter", system-ui        /* body */
--font-mono:     "JetBrains Mono", mono    /* data labels, slugs */

--radius-sm:  6px
--radius-md:  12px
--radius-lg:  20px
--radius-xl:  32px

--shadow-card: 0 2px 16px rgba(0,0,0,0.06)
--shadow-hover: 0 8px 32px rgba(0,0,0,0.11)

--transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Page Structure

```
[NAV — fixed, blur-backdrop]
│
├── HERO
├── STICKY SECTION NAV
├── OVERVIEW
├── FACILITIES
├── DIAGNOSTICS
├── TREATMENTS
├── MILESTONES TIMELINE
├── DATA VISUALIZATION BLOCK
├── CLINICAL TEAM STRIP
├── WHEN TO CONSULT CALLOUT
├── BOOK APPOINTMENT CTA
└── FOOTER
```

---

## Section Specs

---

### 1. HERO

**Layout:** Full-width, asymmetric split — 55% text left / 45% visual right  
**Height:** 520px desktop, 420px mobile

**Left column:**
- Breadcrumb: `Home / Specialities / [Specialty]` — `--color-text-3`, 12px monospace
- Specialty name: 56px / 700 weight / `--color-text-1`. All caps, 0.04em letter-spacing.
- Tagline: 22px / 400 weight / `--color-text-2`. Italic. One line.
- Two pill buttons: Primary (solid `--color-primary`) "Book Appointment" + Ghost (bordered) "Find a Doctor"

**Right column:**
- Abstract SVG mesh or subtle anatomical illustration — NOT a stock photo
- Overlay stat cluster — 3 floating cards, staggered: key metrics (e.g. "24/7 Emergency", "Cath Labs", "CCU")
- Cards: `--surface-2`, `--radius-md`, `--shadow-card`, slight rotation (−2° / 0° / +1.5°)

**Animation:** Left col fades up on mount (Framer Motion, 60ms stagger per element). Stat cards drift in from right, spring easing.

---

### 2. STICKY SECTION NAV

Thin horizontal bar, appears after hero scrolls out of view.  
Background: `rgba(250,250,248,0.88)` with `backdrop-filter: blur(12px)`.  
Height: 44px. Border-bottom: `1px solid --color-border`.

Items: Overview · Facilities · Diagnostics · Treatments · Milestones · Book  
Active item: `--color-primary` underline 2px, bold weight.  
Smooth scroll to sections on click.

---

### 3. OVERVIEW

**Layout:** 2-column grid — prose left (60%), key stats right (40%)

**Left:** Department description. Body text, 18px, 1.7 line-height. Max 3 short paragraphs.

**Right:** Stat cards grid (2×2 or 2×3)  
Each stat card:
- Icon (Lucide or custom SVG), 24px, `--color-primary`
- Metric: 36px / 700 / `--color-text-1`
- Label: 13px / `--color-text-3`
- Background: `--surface-2`
- Border: `1px solid --color-border`
- Hover: lift to `--shadow-hover`, border-color `--color-primary`
- **Animated count-up** on scroll enter (0 → target, 800ms, ease-out)

---

### 4. FACILITIES

**Layout:** Horizontal scroll strip on mobile, 3-column grid on desktop

Each card:
- 280px wide, full height
- Top: colored icon block `--color-primary` at 10% opacity background
- Icon: 32px stroke, `--color-primary`
- Title: 15px / 600 weight
- Description: 13px / `--color-text-2`
- Border-left: 3px solid `--color-primary` on hover
- Transition: `--transition`

**Animation:** Cards stagger in from bottom on scroll, 40ms between each.

---

### 5. DIAGNOSTICS

**Layout:** 2-column alternating rows — icon + label left, expandable detail right

Default: collapsed rows showing test name only.  
On hover/click: accordion expansion reveals 1–2 line description.  
Expand indicator: `+` rotates to `×`, `--color-primary`.

Dividers between rows: 1px `--color-border`. No bullet points.

---

### 6. TREATMENTS

**Layout:** Tab group across top — one tab per treatment sub-specialty

Tab bar:
- Pill tabs, not underline tabs
- Active: `--color-primary` background, white text
- Inactive: `--surface-2`, `--color-text-2`
- Hover: `--color-border` background
- Tab labels: 13px / 500 weight

Tab content panel:
- Slide in from right on tab change (Framer Motion `AnimatePresence`)
- Left: procedure name (H3) + description paragraph
- Right: small icon or minimal illustration

---

### 7. MILESTONES TIMELINE

**Layout:** Horizontal scrolling timeline on desktop, vertical on mobile

Timeline line: 2px `--color-border` horizontal rule  
Node: 12px circle, `--color-primary` fill, white border 2px  
Active/hovered node: 18px, drop shadow

Each milestone:
- Year label: `--font-mono`, 13px, `--color-text-3`
- Title: 15px / 600 / `--color-text-1`
- Description: 13px / `--color-text-2`

**Animation:** Nodes animate in left-to-right as timeline scrolls into view. Line draws in with SVG stroke-dashoffset animation.

---

### 8. DATA VISUALIZATION BLOCK

**This section is required on every specialty page.** Choose the chart type that best fits the specialty's data story.

**Chart types by specialty category:**

| Specialty Type | Recommended Chart | Data Story |
|---|---|---|
| Cardiology | Line chart (Recharts) | Cardiac procedures per year 2000–2025 |
| Oncology | Stacked bar | Cancer types treated by volume |
| Transplant | Area chart | Cumulative transplants over time |
| General Surgery | Donut chart | Procedure category breakdown |
| Internal Medicine | Radar chart | Speciality coverage breadth |
| Pathology | Horizontal bar | Lab test volume by subspecialty |
| Any | Milestone progress bar | Department metric over time |

**Visual rules:**
- Chart fills full section width on desktop, 100% width on mobile
- Color palette: `--color-accent` primary fill, `--color-accent-2` secondary, `--color-primary` for emphasis
- Grid lines: `--color-border`, 0.5px
- Axis labels: `--font-mono`, 11px, `--color-text-3`
- Tooltip: `--surface-2` background, `--shadow-card`, `--radius-sm`, 13px text
- No legend inside chart area — use a clean external legend strip below
- **Animate on scroll enter** — bars grow up, lines draw in, donut arcs sweep, all 600ms ease-out

**Section wrapper:**
- Background: `--color-accent` at 4% opacity — subtle tinted band to visually anchor the chart
- Section header: "By the Numbers" — 13px mono label above H2 title

---

### 9. CLINICAL TEAM STRIP

Horizontal scroll row of doctor cards.

Each card (200px wide):
- Circular photo placeholder (80px) with gradient background if no image
- Name: 14px / 600
- Designation: 12px / `--color-text-3`
- "View Profile →" link: `--color-primary`, 12px

Strip arrow controls: left/right scroll buttons, `--color-primary`, appear on desktop hover.

---

### 10. WHEN TO CONSULT — CALLOUT

**Layout:** Full-width band, `--color-primary` at 6% opacity background, `--radius-lg`

Left: Icon (caduceus or relevant) + heading "When to See a Specialist"  
Right: Symptom list — 2-column grid, each item with a small `--color-primary` dot prefix

No bullet points. Dots are 6px circles via CSS, `--color-primary`.

---

### 11. BOOK APPOINTMENT CTA

**Layout:** Split card — left text, right form/WhatsApp links

Left:
- H2: "Schedule Your Consultation"
- Subline: plain text, department name and phone
- Trust badges: JCI Gold · 300+ Consultants · 24/7 Emergency

Right:
- Large WhatsApp button (green #25D366, white icon+text)
- Smaller "Call 051-8464646" button (ghost style)
- Optional: inline mini-form (Name, Phone, Specialty — 3 fields max)

Background: `--color-text-1` (near-black), white text — creates strong visual contrast at page end.

---

## Typography Scale

```
Display  (hero title):      56px / 700 / -0.5px tracking
H1:                         40px / 700
H2 (section headers):       28px / 600
H3 (sub-sections):          20px / 600
Body:                       17px / 400 / 1.7 line-height
Body small:                 14px / 400 / 1.6 line-height
Label / Caption:            12px / 500 / 0.04em tracking / uppercase
Mono (slugs, years):        13px / JetBrains Mono or similar
```

---

## Motion & Interaction

```
Scroll-enter animations:
  - Default: fade + translateY(24px) → (0), 0.45s, ease-out
  - Stagger sibling elements: 40–60ms between each
  - Trigger: IntersectionObserver, threshold 0.15

Hover interactions:
  - Cards: translateY(-4px) + shadow upgrade, 0.22s ease
  - Buttons: scale(1.02) + color shift, 0.18s ease
  - Tab items: background color, 0.15s ease

Chart animations:
  - Bars: scaleY 0→1 from bottom, 0.6s ease-out, 60ms stagger
  - Lines: stroke-dashoffset draw, 0.8s ease-in-out
  - Donut: rotation + arc sweep, 0.7s ease-out
  - Trigger: on scroll enter, play once

Timeline:
  - Line: SVG stroke draw left→right, 1s ease
  - Nodes: scale 0→1, stagger 80ms per node
```

---

## Responsive Breakpoints

```
Mobile:   < 640px   — single column, horizontal scroll for cards/timeline
Tablet:   640–1024px — 2-column grids, compressed charts
Desktop:  > 1024px  — full layout as specified above
```

---

## Accessibility

- All charts must have `<title>` and `<desc>` in SVG, plus `aria-label` on wrapper
- Color contrast: all text pairs meet WCAG AA minimum (4.5:1)
- Keyboard nav: tab-accessible tabs, accordion, timeline nodes
- Reduced motion: `prefers-reduced-motion` → disable all translate/scale/draw animations, keep opacity fades only
- Focus rings: 2px `--color-primary` outline, `outline-offset: 3px`

---

## SEO Anchors (map to content headings)

```
#overview        → About / Overview section
#facilities      → Facilities section
#diagnostics     → Diagnostic Services section
#treatments      → Treatment & Management section
#milestones      → Milestones section
#data            → Data Visualization section
#team            → Clinical Team section
#consult         → When to Consult section
#book            → Book Appointment CTA
```

---

## What This Template Is Not

- Not a slideshow. No hero carousels.
- Not a stock-photo grid. Illustrations over photography.
- Not a wall of text. Every section has a visual counterpart.
- Not a generic hospital blue/white. The palette is warm, grounded, precise.
- Not decorative charts. Every chart answers a specific patient or clinical question.

---

<!--
IMPLEMENTATION NOTES
====================

Component map:
  HeroSection          → props: name, tagline, stats[]
  StickyNav            → props: sections[]
  OverviewSection      → props: description, stats[]
  FacilitiesGrid       → props: facilities[]
  DiagnosticsAccordion → props: tests[]
  TreatmentsTabs       → props: treatments[]
  MilestonesTimeline   → props: milestones[]
  DataVizBlock         → props: chartType, data[], title, description
  TeamStrip            → props: doctors[]
  ConsultCallout       → props: symptoms[]
  BookingCTA           → props: phone, whatsapp, formEnabled

Data format for milestones[]:
  { period: string, title: string, description: string }

Data format for DataVizBlock:
  { label: string, value: number, category?: string }

Chart library: Recharts (React) or Chart.js (vanilla)
Animation library: Framer Motion (React) or GSAP ScrollTrigger (vanilla)
Icon set: Lucide React or Heroicons

Slug convention:
  /specialities/[kebab-case-name]/islamabad
-->
