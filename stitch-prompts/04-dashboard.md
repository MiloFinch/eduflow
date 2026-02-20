# Stitch Prompt: Student Dashboard (EduFlow)

**Project Type:** Network (Web / Sieć)

---

## Overview

Design the main student dashboard for EduFlow e-learning platform. This is the **first screen after login** — user sees their progress, continues learning, discovers new courses.

---

## Technical Requirements

- **Tailwind CSS** (Mobile-First: base = mobile, md: = tablet 768px+, lg: = desktop 1024px+)
- **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<nav>`, `<aside>`
- **Responsive:** Mobile (1 col), Tablet (2 col), Desktop (2-3 col grid)
- **Colors:** Primary #6C63FF, Secondary #4ECDC4, Accent #FF6B9D
- **Typography:** Inter font, H1 3rem/700, H2 1.875rem/700, H3 1.5rem/600, body 1rem/400
- **Spacing:** 8px grid (xs=4px, sm=8px, md=16px, lg=24px, xl=32px, 2xl=48px)
- **Border-radius:** Cards 16px, buttons 12px, pills 9999px
- **Shadows:** Hover `0 2px 8px rgba(108,99,255,0.1)`, Cards `0 4px 16px rgba(0,0,0,0.08)`

---

## Layout Structure

```
<header> — Top Navigation
<main>
  <section> — Welcome Section (H2 + 3 stat cards)
  <section> — Continue Learning (3 course cards with progress)
  <section> — Recommended Courses (4 course cards grid)
  <aside> — Activity Feed (right sidebar on desktop, bottom on mobile)
</main>
```

---

## Components

### 1. Top Navigation Bar (Header)
- **Desktop (1024px+):**
  - Logo (left): EduFlow icon + text
  - Search bar (center): Input with magnifying glass icon, placeholder "Szukaj kursów..."
  - Right icons: Notification bell (with badge "3"), User avatar + name dropdown
- **Mobile (<768px):**
  - Hamburger menu (left), Logo (center), User avatar (right)
  - Search bar below (full width, collapsible)

---

### 2. Welcome Section
**Layout:** Full-width banner with gradient background `#6C63FF to #4ECDC4`

**Content:**
- H2: "Witaj z powrotem, Jan!" (white text, left-aligned)
- Subtitle: "Kontynuuj naukę tam, gdzie skończyłeś" (white/90 opacity)
- **3 Stat Cards** (horizontal on desktop, stack on mobile):
  1. **Ukończone kursy:** Icon 🎓 + Number "12" + Label "Kursów ukończonych"
  2. **Godziny nauki:** Icon ⏱️ + Number "47h" + Label "Godzin w tym miesiącu"
  3. **Punkty:** Icon ⭐ + Number "850" + Label "Punktów zdobytych"
- **Card style:** White/20 opacity, backdrop-blur, rounded-2xl, padding 24px

---

### 3. Continue Learning Section
**H3:** "Kontynuuj naukę" (left-aligned, margin-bottom 24px)

**3 Course Cards** (horizontal scroll on mobile, 3-col grid on desktop):

Each card:
- **Thumbnail:** 16:9 aspect ratio, course image (placeholder: gradient from course color)
- **Title:** H4 "React Hooks w praktyce" (text-slate-900, font-semibold)
- **Instructor:** Small text + avatar (40px circle) "Anna Kowalska"
- **Progress bar:** 
  - Label: "65% ukończono"
  - Bar: full-width, height 8px, bg-slate-200, fill #6C63FF (65% width)
  - Time: "Ostatnio: 2 dni temu" (text-xs, text-slate-500)
- **CTA Button:** "Kontynuuj" (bg-primary, text-white, rounded-lg, full-width on mobile)
- **Card hover:** Lift effect (transform: translateY(-4px), shadow-lg)

---

### 4. Recommended Courses Section
**H3:** "Polecane dla Ciebie" (left-aligned, margin-bottom 24px)

**4 Course Cards** (1 col mobile, 2 col tablet, 4 col desktop):

Each card:
- **Thumbnail:** 16:9, course image (placeholder: abstract learning concept)
- **Badge:** "NOWY" or "BESTSELLER" (top-right corner, bg-accent, text-white, rounded-full, px-3 py-1)
- **Title:** H4 "TypeScript dla zaawansowanych" (text-slate-900)
- **Instructor:** Small text + avatar "Piotr Nowak"
- **Rating:** ⭐ 4.8 (485 opinii)
- **Price:** "149 zł" (text-primary, font-bold) or "DARMOWY" (text-secondary)
- **Enrollment:** "1,245 uczniów" (text-xs, text-slate-500)
- **CTA Button:** "Zobacz kurs" (bg-white, border border-primary, text-primary, hover: bg-primary hover:text-white)
- **Card style:** White bg, rounded-2xl, shadow-card, padding 16px

---

### 5. Activity Feed (Right Sidebar)
**Desktop:** Fixed sidebar (width 320px, right side)
**Mobile/Tablet:** Bottom section (full-width)

**H4:** "Ostatnia aktywność" (margin-bottom 16px)

**5 Activity Items** (stack vertically):

Each item:
- **Icon:** (left) — 🎓 (completed lesson), 💬 (comment), 🏆 (achievement), 📝 (quiz)
- **Text:** 
  - Main: "Ukończyłeś lekcję: React useState" (text-slate-700)
  - Time: "3 godziny temu" (text-xs, text-slate-400)
- **Separator:** Border-bottom (border-slate-200, last item no border)
- **Background:** White, rounded-xl, padding 12px, margin-bottom 8px

---

## Interactions (Hover States)

- **Course cards:** Lift effect (`transform: translateY(-4px)`, shadow increase)
- **Buttons:** Background color shift (primary → darker primary), lift
- **Stat cards:** Slight scale (`scale: 1.02`)
- **Search input:** Ring effect (focus:ring-2 focus:ring-primary)

---

## Accessibility

- All images: `alt` text (e.g., "Miniatura kursu React Hooks")
- Buttons: `aria-label` when icon-only (e.g., notification bell → "3 nowe powiadomienia")
- Focus states: Visible ring (`focus:ring-2 focus:ring-primary focus:outline-none`)
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<aside>`

---

## Mobile-First Breakpoints

**Base (320px-767px):** 1 column, stack everything vertically
**md: (768px+):** 2 columns (Continue Learning: 2-col, Recommended: 2-col)
**lg: (1024px+):** Activity Feed becomes right sidebar, Recommended: 4-col grid

---

## Placeholder Data

### Continue Learning Courses:
1. **React Hooks w praktyce** — Anna Kowalska — 65% — 2 dni temu
2. **Node.js od podstaw** — Marek Wiśniewski — 42% — 5 dni temu
3. **CSS Grid & Flexbox** — Ewa Nowak — 88% — wczoraj

### Recommended Courses:
1. **TypeScript dla zaawansowanych** — Piotr Nowak — 4.8 ⭐ (485) — 149 zł — NOWY
2. **Next.js 14: Full Course** — Jan Kowalczyk — 4.9 ⭐ (1,023) — 199 zł — BESTSELLER
3. **Tailwind CSS Masterclass** — Anna Kowalska — 4.7 ⭐ (342) — DARMOWY
4. **GraphQL & Apollo Client** — Tomasz Lewandowski — 4.6 ⭐ (287) — 179 zł

### Activity Feed:
1. 🎓 Ukończyłeś lekcję: React useState — 3 godziny temu
2. 💬 Skomentowałeś kurs: Node.js od podstaw — wczoraj
3. 🏆 Zdobyłeś odznakę: "React Master" — 2 dni temu
4. 📝 Zdałeś quiz: CSS Grid (9/10) — 3 dni temu
5. 🎓 Ukończyłeś kurs: HTML & CSS — tydzień temu

---

## Design Notes

- **Gradient background** for Welcome Section (full-width, height ~200px)
- **Glassmorphism** for stat cards (white/20, backdrop-blur-xl)
- **Card Play** trend: Subtle shadows, rounded corners, hover lift
- **Clean whitespace:** Generous padding between sections (48px desktop, 32px mobile)
- **Inter font** everywhere (Google Fonts)
- **Material Icons** for icons (notification, search, etc.)

---

Generate clean, production-ready HTML with Tailwind classes. Focus on responsive design and accessibility.
