# Stitch Prompt — Landing Page (Homepage)

**Screen:** Landing Page (Public Homepage)
**Purpose:** Convert visitors to registered users

---

## Design a Landing Page for EduFlow e-learning platform with:

### 1. HERO SECTION (full viewport height, centered)
- **H1 Heading:** "Ucz się w swoim tempie" (3rem, 700 weight, #2D3748)
- **Subtitle:** "Nowoczesna platforma e-learningowa dla ambitnych learnerów" (1.125rem, 400, #4A5568)
- **2 CTA buttons horizontal (stack on mobile):**
  - Primary: "Zacznij za darmo" (bg #6C63FF, white text, px-8 py-4, rounded-lg, font-semibold)
  - Secondary: "Zobacz kursy" (border 2px #6C63FF, text #6C63FF, px-8 py-4, rounded-lg, hover:bg-#6C63FF hover:text-white)
- **Background:** Gradient from #FAFAFA to #F5F5F7 with subtle geometric pattern
- **Hero Image:** Placeholder illustration (student with laptop, modern flat style) on right side (desktop) or below (mobile)

### 2. FEATURES SECTION (6 feature cards in bento grid)
**Section heading:** "Dlaczego EduFlow?" (H2, 2.25rem, 700, center, mb-12)

**6 Feature Cards (2 cols mobile, 3 cols desktop):**
1. **Ucz się kiedy chcesz**
   - Icon: `schedule` (Material Icons, 48px, #6C63FF)
   - Description: "Dostęp 24/7 do wszystkich kursów. Ucz się w swoim tempie."

2. **Certyfikaty**
   - Icon: `workspace_premium` (48px, #4ECDC4)
   - Description: "Otrzymuj certyfikaty po ukończeniu kursu."

3. **Eksperci**
   - Icon: `school` (48px, #FF6B9D)
   - Description: "Ucz się od najlepszych praktyków branży."

4. **Społeczność**
   - Icon: `groups` (48px, #48BB78)
   - Description: "Dołącz do aktywnej społeczności learnerów."

5. **Praktyka**
   - Icon: `psychology` (48px, #ECC94B)
   - Description: "Projekty praktyczne w każdym kursie."

6. **Lifetime Access**
   - Icon: `all_inclusive` (48px, #F56565)
   - Description: "Płacisz raz, masz dostęp na zawsze."

**Card style:**
- White bg, rounded-xl (16px), p-6, shadow-sm
- Hover: scale-105, shadow-lg, rotate-1 deg (Card Play effect)
- Icon in colored circle (bg-[color]/10, 64px circle)
- H3 title (1.25rem, 600)
- Description (0.875rem, #A0AEC0)

### 3. PRICING SECTION (3 tier cards)
**Section heading:** "Wybierz plan dla siebie" (H2, center, mb-12)

**3 Pricing Tiers (1 col mobile, 3 cols desktop):**

**Free Tier:**
- Badge: "Starter" (small chip, #CBD5E0 bg, top-left)
- Price: "€0" (H1 size, 700) "/miesiąc" (small, #A0AEC0)
- Features list (checkmarks, #48BB78):
  - 3 kursy bezpłatne
  - Dostęp przez 30 dni
  - Community forum
- Button: "Zacznij" (outline style)

**Pro Tier (HIGHLIGHTED):**
- Badge: "Najpopularniejszy" (#6C63FF bg, white text, pulse animation)
- Border: 2px solid #6C63FF (highlighted)
- Price: "€29" (H1) "/miesiąc"
- Features list:
  - Wszystkie kursy
  - Lifetime access
  - Certyfikaty
  - Priority support
  - Projekty praktyczne
- Button: "Wybierz Pro" (primary bg-#6C63FF, larger, font-bold)

**Enterprise Tier:**
- Badge: "Teams"
- Price: "Custom" (contact us)
- Features list:
  - Wszystko z Pro
  - Dedykowany manager
  - Custom kursy
  - Analytics dashboard
  - SSO integration
- Button: "Kontakt" (secondary outline)

**Card style:**
- White bg, rounded-2xl (24px), p-8, shadow-md
- Pro tier: scale-110 on desktop (bigger), shadow-xl
- Hover: lift -4px (translateY)

### 4. TESTIMONIALS SECTION (5 reviews carousel)
**Section heading:** "Co mówią nasi użytkownicy?" (H2, center, mb-12)

**5 Testimonial Cards (horizontal scroll on mobile, 3 visible desktop):**
1. "EduFlow zmienił moje podejście do nauki. Kursy są praktyczne i engaging!" — **Anna Kowalska**, UX Designer (avatar placeholder, 5 stars)
2. "Najlepsza platforma do nauki programowania. Certyfikat pomógł mi w karierze." — **Jan Nowak**, Frontend Developer
3. "Lifetime access to najlepsza inwestycja. Wracam do kursów kiedy potrzebuję." — **Maria Wiśniewska**, Product Manager
4. "Społeczność jest super pomocna. Znalazłem mentora i przyjaciół!" — **Piotr Zieliński**, Student
5. "Kursy od ekspertów, projekty praktyczne — exactly what I needed." — **Ewa Dąbrowska**, Data Analyst

**Card style:**
- White bg, rounded-xl, p-6, border border-#CBD5E0
- Avatar (48px circle, placeholder gradient)
- Quote (italic, #4A5568, 1rem)
- Name (bold, #2D3748) + Role (small, #A0AEC0)
- 5 star rating (Material Icons `star`, #ECC94B, 16px)

### 5. FOOTER
**4 columns (stack on mobile):**
- **Column 1:** EduFlow logo + tagline "Ucz się lepiej"
- **Column 2:** Produkty (Kursy, Certyfikaty, Community)
- **Column 3:** Firma (O nas, Kariera, Kontakt)
- **Column 4:** Social (Twitter, LinkedIn, GitHub icons)
- **Bottom:** Copyright © 2026 EduFlow | Privacy | Terms

**Style:**
- Dark bg (#2D2D30), white text
- Links: #A0AEC0, hover:#FFFFFF
- Social icons: 32px, #6C63FF on hover

---

## LAYOUT STRUCTURE

```
<main>
  <!-- Hero -->
  <section class="min-h-screen flex items-center">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left: Text + CTAs -->
        <!-- Right: Hero image -->
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center mb-12">Dlaczego EduFlow?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 6 feature cards -->
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <h2 class="text-center mb-12">Wybierz plan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 3 pricing cards (Pro in center, scale-110) -->
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center mb-12">Co mówią użytkownicy?</h2>
      <div class="flex gap-6 overflow-x-auto pb-4">
        <!-- 5 testimonial cards -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-white py-16">
    <!-- 4 columns + bottom -->
  </footer>
</main>
```

---

## DESIGN REQUIREMENTS

**Colors (same as Component Library):**
- Primary: #6C63FF
- Secondary: #4ECDC4  
- Accent: #FF6B9D
- Success: #48BB78
- Warning: #ECC94B
- Error: #F56565
- Neutrals: 900/700/500/300/100

**Typography:**
- Font: Inter (300/400/500/600/700)
- H1: 3rem (48px), 700
- H2: 2.25rem (36px), 700
- H3: 1.5rem (24px), 600
- Body: 1rem (16px), 400
- Small: 0.875rem (14px), 400

**Spacing:** 8px grid (4/8/16/24/32/48/64px)

**Shadows:**
- Cards: `0 4px 16px rgba(0,0,0,0.08)`
- Hover: `0 8px 32px rgba(0,0,0,0.12)`
- Floating: `0 12px 48px rgba(0,0,0,0.16)`

**Border-radius:**
- Buttons: 12px (lg)
- Cards: 16px (xl)
- Pricing cards: 24px (2xl)

**Icons:** Material Icons Outlined, 48px for features, 16px for stars

**Mobile-First:** Base = mobile, `md:` = tablet 768px+, `lg:` = desktop 1024px+

**Animations:**
- Hover lift: `translateY(-4px)` + shadow increase
- Card Play: `rotate(1deg) scale(1.05)` on feature cards
- Pulse: Pro tier badge

---

## Generate clean, production-ready HTML with Tailwind classes following this specification exactly.
