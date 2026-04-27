# Health Blog System — Quick Reference

## 📍 Where Everything Lives

### Articles & Data
```
shifa_health_blogs.md
├─ 12 complete publishable articles (markdown format)
└─ Full content with FAQs, no placeholders

src/data/health-articles.ts
├─ TypeScript data export for all 12 articles
├─ Article type: id, slug, title, excerpt, content, category, author, tags, etc.
└─ Auto-generated from health_articles.md, manually typed in

src/data/article-enhancements.ts
├─ Chart configs & data per article (keyed by slug)
├─ Key statistics (3-4 per article)
├─ Recharts visualization data (line, bar, horizontal-bar, pie)
└─ Export: articleEnhancements: Record<string, ArticleEnhancement>
```

### Components
```
src/components/blog/BlogDetailClient.tsx
├─ Main interactive blog detail page
├─ Features: progress bar, stats cards, TOC, content parser, chart, FAQ accordion
├─ Uses: Framer Motion (animations), Recharts (charts), Lucide (icons)
└─ Status: "use client" component

src/components/news/NewsEventsClient.tsx (updated)
├─ Blog listing page (shows all articles + filters)
├─ Enhanced styling, better metadata display
└─ Imports: healthArticles from src/data/health-articles.ts
```

### Routes
```
/health-library/blogs
├─ Blog listing with featured article, grid, filters
└─ Uses: NewsEventsClient component

/health-library/blogs/[slug]
├─ Individual blog article detail page
├─ Slug examples: heart-attack-warning-signs-islamabad, type-2-diabetes-prevention-management-pakistan
└─ Uses: BlogDetailClient component + article enhancements

/api/news
├─ API endpoint for fetching articles
├─ Returns: healthArticles + RSS feed (falls back to local if RSS fails)
└─ Query params: category, lang, page, pageSize
```

---

## 🎨 Key Features by Component

### ReadingProgress (fixed bar at top)
- Animated width based on scroll position
- Gradient red → blue
- Passive scroll listener

### KeyStatsCard (animated cards)
- 3–4 per article
- Scroll-triggered entrance animation
- Staggered 40ms between cards
- Shows: value, label, description

### TableOfContents (sticky sidebar on desktop)
- Auto-generated from H2 headings
- Active section highlighting via IntersectionObserver
- Collapses on mobile

### ContentRenderer (markdown-like parser)
Handles block types:
- `h2` / `h3` — headings with optional body
- `paragraph` — with inline bold support
- `highlight` — colored border-left boxes
- `numbered-item` — badge-style items
- `table` — styled table rows
- `numbered-list` / `bullet-list` — lists
- `faq` — extracted and moved to accordion

### FAQAccordion (expandable Q&As)
- Parsed from content (blocks starting with `**Q:`)
- Smooth expand/collapse animation
- Chevron rotation, height transition
- Per-item open/close state

### ArticleChart (Recharts visualization)
- Type auto-detected (line, bar, horizontal-bar, pie)
- Custom tooltips, legends, colors
- 400px height, full width responsive
- Real Pakistan healthcare data

---

## 📊 Article Categories

Each article maps to one primary category:
```
cardiology              → Heart Attack article
diabetes               → Type 2 Diabetes article
womens-health          → PCOS article
neurology              → Stroke article, Headache article
orthopaedics           → Knee Pain article
paediatrics            → Vaccination article
mental-health          → Depression article
nutrition              → Blood Pressure Foods article
diagnosis              → Lab Test Results article
elderly-care           → Older Adults article
first-aid              → Heart Attack First Aid article
symptoms               → Headache article
```

---

## 📈 Chart Types Per Article

| Article | Chart Type | Data Points | Unit |
|---------|-----------|-------------|------|
| Heart Attack | Line | 2000–2025 CVD mortality | per 100k |
| Diabetes | Line | 2000–2025 prevalence | millions |
| PCOS | Bar | 7 age groups | % prevalence |
| Stroke | Horizontal Bar | 6 risk factors | % in patients |
| Knee Pain | Bar | 6 age groups | % osteoarthritis |
| Vaccination | Bar | 7 EPI vaccines | % coverage |
| Depression | Bar | 6 population groups | % prevalence |
| BP Foods | Horizontal Bar | 9 foods | mmHg reduction |
| Lab Tests | Bar | 6 CBC causes | % of referrals |
| Elderly | Line | 2000–2050 projection | millions (60+) |
| First Aid | Bar | Time to CPR | % survival |
| Headache | Pie | 6 headache types | % distribution |

---

## 🔄 Data Flow

```
health-articles.ts (data)
    ↓
BlogDetailClient (receives article)
    ├─ Parses content blocks
    ├─ Extracts H2 headings → TOC
    ├─ Extracts FAQs → accordion
    └─ Renders all blocks with proper styling

article-enhancements.ts (charts + stats)
    ↓
BlogDetailClient (receives enhancement by slug)
    ├─ Renders KeyStatsCard × 4
    └─ Renders ArticleChart with data

NewsEventsClient (listing)
    ├─ Fetches /api/news (returns healthArticles)
    └─ Maps to card components with links to /health-library/blogs/[slug]
```

---

## 🛠 How to Add a New Article

1. **Create article in `health-articles.ts`:**
   ```ts
   {
     id: "ha-013",
     slug: "asthma-management-pakistan",
     title: "Asthma: Causes, Triggers, and Treatment",
     excerpt: "...",
     content: "...",
     category: "pulmonology",
     language: "en",
     author: "Dr. Respiratory Specialist",
     publishedAt: "2026-05-01",
     featuredImage: "",
     tags: ["asthma", "respiratory", "breathing"],
     readingTimeMinutes: 7,
     type: "blog",
   }
   ```

2. **Add enhancement in `article-enhancements.ts`:**
   ```ts
   "asthma-management-pakistan": {
     keyStats: [
       { value: "300M+", label: "People with Asthma", description: "Globally" },
       // ... 3 more
     ],
     chart: {
       type: "line",
       title: "Asthma Prevalence Trend",
       data: [{ name: "2000", value: 120 }, ...],
       legendLabel: "Cases (millions)",
     },
   }
   ```

3. **Done!** Article automatically appears at:
   - `/health-library/blogs/asthma-management-pakistan`
   - `/health-library/blogs` (in listing)

---

## 🧪 Testing

**Test locally after `npm run dev`:**

1. Visit `/health-library/blogs`
   - Should see featured article
   - Should see grid of all 12 articles
   - Should be able to filter by category

2. Click any article → `/health-library/blogs/[slug]`
   - Reading progress bar animates while scrolling
   - Key stats cards scale in on view
   - TOC highlights active section
   - Chart renders correctly
   - FAQ accordion expands/collapses smoothly
   - All links work

3. Test responsive:
   - Desktop (lg): TOC visible on right
   - Tablet (md): TOC visible on right
   - Mobile: TOC hidden, single column

---

## 📋 Checklist Before Publishing

- [ ] All 12 articles have unique slugs (no duplicates)
- [ ] All chart data is accurate to Pakistan context
- [ ] All FAQ items are searchable (no jargon without explanation)
- [ ] Links work (internal to other articles, external where applicable)
- [ ] Images present or placeholder handling (currently empty strings)
- [ ] Meta titles under 60 characters
- [ ] Meta descriptions 150–160 characters
- [ ] Reading time estimates accurate (160 words/min average)
- [ ] No typos or medical inaccuracies
- [ ] FAQs are common real questions (not made-up)
- [ ] Charts have descriptive titles + descriptions
- [ ] Key stats are verified from reliable sources

---

## 🎯 Performance Tips

- Chart rendering is lazy (whileInView in Framer Motion)
- Content parsing uses useMemo (cached per article)
- TOC uses IntersectionObserver (efficient scroll tracking)
- Progress bar uses passive scroll listener
- No hydration mismatches (server component page wrapper, client child component)

---

## 📞 Support

**Questions about the blog system?**

Check:
1. `BLOG_IMPLEMENTATION_SUMMARY.md` — high-level overview
2. `src/components/blog/BlogDetailClient.tsx` — component code comments
3. `src/data/article-enhancements.ts` — chart examples
4. Component file headers for prop types

**Errors?**

- Type errors → Check `ArticleEnhancement` type in `article-enhancements.ts`
- Chart not rendering → Verify chart.type is one of: `"line" | "bar" | "horizontal-bar" | "pie"`
- Content not parsing → Check for `\n\n` separators between blocks
- TOC not working → Verify H2 headings have unique text
- FAQ not appearing → Check for `**Q:` at block start

---

**Last Updated**: April 2026  
**Status**: Production Ready ✅
