# EduFlow — Modern E-Learning Platform

Built with Next.js 14, React, and Tailwind CSS.

## 🚀 Status: MVP Phase (Component Library)

**Design System:** Modern Productivity App (2026)  
**Repo:** https://github.com/MiloFinch/eduflow

---

## 📐 Architecture

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS (Mobile-First)
- **Typography:** Inter font
- **Design Tokens:** See `tailwind.config.ts`

---

## 🎨 Design System

**Colors:**
- Primary: `#6C63FF` (Soft Purple)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#FF6B9D` (Soft Pink)
- Neutrals: 900/700/500/300/100

**Typography:**
- H1: 3rem (48px), weight 700
- H2: 1.875rem (30px), weight 700
- H3: 1.5rem (24px), weight 600
- Body: 1rem (16px), weight 400

**Spacing:** 8px grid (xs/sm/md/lg/xl/2xl/3xl)

**Shadows:** hover, card, modal, floating

---

## 📁 Project Structure

```
eduflow/
├── app/
│   ├── page.tsx              # Homepage (placeholder)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Tailwind + custom styles
├── components/
│   ├── ui/                   # Reusable UI components (Button, Card, Input)
│   └── layout/               # Layout components (Header, Footer, Sidebar)
├── public/
│   └── images/               # Static assets
├── stitch-prompts/           # Google Stitch prompts for each screen
│   └── 01-component-library.md
├── stitch-exports/           # HTML output from Stitch (before transpilation)
├── tailwind.config.ts        # Tailwind + design tokens
├── package.json
└── README.md
```

---

## 🛠️ Setup (Local Development)

1. **Install dependencies:**
   ```bash
   cd ~/localhost/eduflow
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open:** http://localhost:3000

---

## 🎯 MVP Roadmap (6 Screens)

| # | Screen | Status | Prompt |
|---|--------|--------|--------|
| 1 | Component Library | ⏳ Awaiting Stitch HTML | `stitch-prompts/01-component-library.md` |
| 2 | Landing Page | 📝 Planned | TBD |
| 3 | Login / Register | 📝 Planned | TBD |
| 4 | Dashboard | 📝 Planned | TBD |
| 5 | Course Catalog + Detail | 📝 Planned | TBD |
| 6 | Lesson Player | 📝 Planned | TBD |

---

## 📋 Workflow (Stitch → Codex → Audyt → Next.js)

### Step 1: Google Stitch
1. Open https://stitch.withgoogle.com
2. Copy prompt from `stitch-prompts/01-component-library.md`
3. Paste into Stitch
4. Generate UI
5. Export HTML → save to `stitch-exports/01-component-library.html`

### Step 2: Codex Transpilation
- Convert HTML → React/Next.js
- Replace `class=` with `className=`
- Replace `<a>` with `<Link>`
- Add accessibility (aria-labels, alt text, focus states)

### Step 3: Claude Audyt
- Q1: SSOT Compliance (wszystko z Dashboard?)
- Q2: Responsywność (Mobile-First, breakpoints?)
- Q3: Accessibility (labels, aria, focus, contrast?)

### Step 4: Konsolidacja
- Save to `app/components/page.tsx`
- Extract reusable components → `components/ui/`
- Commit → `git commit -m "✅ Component Library — audyt passed"`

---

## 🔗 Links

- **GitHub Repo:** https://github.com/MiloFinch/eduflow
- **Design System (UI/UX Library):** Research Dashboard → UI/UX Library → Modern Productivity App (2026)
- **Project Spec:** Research Dashboard → Projekt #16 → Notatka #167
- **Workflow Doc:** `~/.openclaw/workspace/WEB-AGENT.md`

---

## 🧑‍💻 Next Steps (for Janusz)

**Ready for you:**
1. ✅ Folder structure created (`~/localhost/eduflow/`)
2. ✅ Next.js boilerplate setup (package.json, tailwind.config.ts, etc.)
3. ✅ Stitch prompt ready (`stitch-prompts/01-component-library.md`)
4. ✅ GitHub repo created: https://github.com/MiloFinch/eduflow

**When you're back from lunch:**
1. Open https://stitch.withgoogle.com
2. Copy/paste prompt from `stitch-prompts/01-component-library.md`
3. Let Stitch generate the UI
4. Export HTML → send to me (or save to `stitch-exports/01-component-library.html`)

I'll handle the rest (Codex transpilation → audyt → React components) 🦅

---

*Built by Milo Finch (OpenClaw) — 2026-02-20*
