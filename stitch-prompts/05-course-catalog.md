# Stitch Prompt: Course Catalog (EduFlow)

**Project Type:** Network (Web / Sieć)

---

## Overview

Design the course catalog page — browse all available courses with filtering and search.

---

## Technical Requirements

- **Tailwind CSS** (Mobile-First)
- **Responsive:** Mobile (1 col), Tablet (2 col), Desktop (3-4 col grid)
- **Colors:** Primary #6C63FF, Secondary #4ECDC4, Accent #FF6B9D
- **Typography:** Inter font
- **Spacing:** 8px grid
- **Cards:** rounded-2xl, shadow, hover lift

---

## Layout Structure

```
<header> — Same Navigation as Dashboard
<main>
  <section> — Page Header (H1 + subtitle)
  <section> — Filter Bar (categories, level, price, language)
  <section> — Search + Results Count
  <section> — Course Cards Grid (12 courses visible)
  <footer> — Pagination
</main>
```

---

## Components

### 1. Top Navigation
Same as Dashboard (sticky, search, notifications, user menu)

### 2. Page Header
- H1: "Katalog Kursów" (text-3xl, font-black, text-slate-900)
- Subtitle: "Znajdź idealny kurs dla siebie — ponad 1,200 kursów dostępnych" (text-slate-600)
- Breadcrumb: Home > Katalog (text-xs, text-slate-400)

### 3. Filter Bar
**Layout:** Horizontal on desktop, collapsible on mobile

**Filters (4 dropdowns):**
1. **Kategoria:** Wszystkie / Frontend / Backend / Design / Mobile / DevOps / AI & ML
2. **Poziom:** Wszystkie / Beginner / Intermediate / Advanced / Expert
3. **Cena:** Wszystkie / Darmowe / Płatne / 0-99 zł / 100-199 zł / 200+ zł
4. **Język:** Wszystkie / Polski / Angielski / Niemiecki / Hiszpański

**Style:**
- Dropdowns: bg-white, border, rounded-lg, px-4 py-2
- Selected filter: bg-primary text-white
- Clear filters button (text-primary, hover:underline)

### 4. Search + Results
**Search bar:**
- Input: placeholder "Szukaj po nazwie, instrukurze, technologii..."
- Icon: magnifying glass (left side)
- Button: "Szukaj" (bg-primary, text-white, rounded-lg)

**Results count:**
- Text: "Znaleziono 48 kursów" (text-sm, text-slate-600)
- Sort dropdown: "Sortuj: Najpopularniejsze / Najnowsze / Najwyżej oceniane / Cena rosnąco / Cena malejąco"

### 5. Course Cards Grid
**Grid:** 1 col mobile, 2 col tablet (md:), 3 col desktop (lg:), 4 col wide (xl:)

**Each Course Card:**
- **Thumbnail:** 16:9 aspect ratio, course image, hover:scale-105
- **Badge** (top-right corner):
  - "BESTSELLER" (bg-primary, text-white)
  - "NOWY" (bg-secondary, text-white)
  - "DARMOWY" (bg-green-500, text-white)
- **Category tag:** Small pill (bg-primary/10, text-primary, text-xs, rounded-full, px-3 py-1)
  - Examples: "Frontend", "Backend", "Design"
- **Title:** H3 text-base font-bold (line-clamp-2)
- **Instructor:** Avatar (24px circle) + name (text-xs text-slate-500)
- **Rating:** ⭐ 4.8 (1,245 opinii) — text-xs, text-amber-500
- **Stats row:**
  - 👥 "8,450 uczniów" (text-xs text-slate-400)
  - ⏱️ "12h 30min" (text-xs text-slate-400)
  - 📚 "45 lekcji" (text-xs text-slate-400)
- **Price:**
  - Paid: "149 zł" (text-lg font-bold text-primary)
  - Free: "DARMOWY" (text-lg font-bold text-secondary)
- **CTA Button:**
  - "Zobacz kurs" (bg-white border border-primary text-primary hover:bg-primary hover:text-white, full-width, rounded-lg)

**Card hover:** lift effect (translateY(-4px), shadow-xl)

### 6. Pagination
**Layout:** Center-aligned, horizontal

**Elements:**
- Previous button: "← Poprzednia" (disabled on page 1)
- Page numbers: 1, 2, 3, ..., 10 (current page bg-primary text-white)
- Next button: "Następna →"

**Style:**
- Buttons: px-4 py-2, rounded-lg, border
- Active page: bg-primary text-white
- Inactive: bg-white border hover:bg-slate-100

---

## Placeholder Data (12 Courses)

1. **React: Kompletny Kurs** — Anna Kowalska — ⭐ 4.9 (2,340) — 👥 12,500 — ⏱️ 24h — 📚 120 lekcji — 199 zł — BESTSELLER
2. **Node.js Backend Development** — Marek Wiśniewski — ⭐ 4.7 (1,890) — 👥 9,200 — ⏱️ 18h — 📚 85 lekcji — 179 zł
3. **TypeScript dla Zaawansowanych** — Piotr Nowak — ⭐ 4.8 (1,240) — 👥 8,450 — ⏱️ 12h 30min — 📚 45 lekcji — 149 zł — NOWY
4. **CSS Grid & Flexbox Mastery** — Ewa Kowalczyk — ⭐ 4.6 (890) — 👥 5,600 — ⏱️ 8h — 📚 32 lekcji — DARMOWY
5. **Python dla Początkujących** — Jan Lewandowski — ⭐ 4.9 (3,120) — 👥 15,300 — ⏱️ 20h — 📚 95 lekcji — 129 zł — BESTSELLER
6. **UI/UX Design Fundamentals** — Karolina Nowak — ⭐ 4.7 (1,560) — 👥 7,800 — ⏱️ 10h — 📚 40 lekcji — 169 zł
7. **Docker & Kubernetes** — Tomasz Kowalski — ⭐ 4.8 (980) — 👥 4,200 — ⏱️ 14h — 📚 55 lekcji — 189 zł — NOWY
8. **JavaScript: Od Podstaw** — Anna Wiśniewska — ⭐ 4.5 (2,450) — 👥 18,900 — ⏱️ 16h — 📚 70 lekcji — DARMOWY
9. **Machine Learning z Python** — Michał Lewandowski — ⭐ 4.9 (1,780) — 👥 6,400 — ⏱️ 28h — 📚 140 lekcji — 249 zł
10. **Vue.js 3: Kompletny Przewodnik** — Ewa Kowalska — ⭐ 4.6 (1,120) — 👥 5,900 — ⏱️ 15h — 📚 68 lekcji — 159 zł
11. **SQL & Database Design** — Piotr Wiśniewski — ⭐ 4.7 (1,340) — 👥 8,100 — ⏱️ 11h — 📚 48 lekcji — 139 zł
12. **Tailwind CSS: Modern Styling** — Karolina Lewandowska — ⭐ 4.8 (1,890) — 👥 9,600 — ⏱️ 9h — 📚 38 lekcji — DARMOWY — NOWY

---

## Interactions

- **Course cards:** Hover lift (translateY(-4px))
- **Filter dropdowns:** Open on click, close on select
- **Search:** Submit on Enter or button click
- **Pagination:** Disabled state for prev/next at boundaries
- **Sort dropdown:** Change order immediately

---

## Accessibility

- All images: alt text
- Filter dropdowns: aria-label
- Pagination: aria-label "Page 1 of 10"
- Course cards: clickable area (whole card), focus ring
- Search: aria-label "Wyszukaj kursy"

---

## Mobile-First Breakpoints

**Base (<768px):** 1 column, filters collapsible (hamburger)
**md: (768px+):** 2 columns, filters horizontal
**lg: (1024px+):** 3 columns
**xl: (1280px+):** 4 columns

---

Generate clean HTML with Tailwind CSS, Mobile-First responsive design.
