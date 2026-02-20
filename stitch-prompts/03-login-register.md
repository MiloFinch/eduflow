# Stitch Prompt — Login / Register Screens

**Screens:** Login + Register (side-by-side or separate views)
**Purpose:** User authentication gateway

---

## Design Login and Register screens for EduFlow with:

### LAYOUT
- **Single page with 2 variants** OR **2 separate screens** (your choice)
- **Glassmorphic card** centered on gradient background
- **Background:** Gradient from #6C63FF (top-left) to #4ECDC4 (bottom-right)
- **Card:** White bg with 70% opacity, backdrop-filter blur(12px), border 1px rgba(255,255,255,0.2), rounded-2xl (24px), shadow-xl, max-width 400px, padding 48px

---

### LOGIN SCREEN

**Card content:**
1. **Logo + Title**
   - EduFlow logo (simple icon: book or graduation cap, #6C63FF)
   - H2: "Zaloguj się" (1.875rem, 700, #2D3748)
   - Subtitle: "Kontynuuj swoją naukę" (0.875rem, #A0AEC0)

2. **Form fields (stacked, gap 16px):**
   - **Email input:**
     - Label: "Email" (small, 600, #4A5568)
     - Input: type email, placeholder "jan@example.com"
     - Style: border 1px #CBD5E0, rounded-md (12px), px-4 py-3, font 1rem
     - Focus: border #6C63FF, ring 3px rgba(108,99,255,0.2)
   
   - **Password input:**
     - Label: "Hasło"
     - Input: type password, placeholder "••••••••"
     - Eye icon (toggle show/hide) on right
     - Same styling as email

3. **Checkbox + Link row:**
   - Checkbox "Zapamiętaj mnie" (left)
   - Link "Zapomniałeś hasła?" (right, text #6C63FF, hover underline)

4. **Primary button:**
   - Text: "Zaloguj się"
   - Style: bg #6C63FF, white text, rounded-lg, px-6 py-3, font-semibold 600, w-full
   - Hover: translateY(-2px), shadow increase

5. **Divider:**
   - Line with "lub" text in center
   - Color: #CBD5E0

6. **Social login buttons (3 horizontal, gap 8px):**
   - Google: icon + "Google" (bg white, border #CBD5E0)
   - Facebook: icon + "Facebook" (bg #1877F2, white text)
   - LinkedIn: icon + "LinkedIn" (bg #0A66C2, white text)
   - Each: rounded-lg, px-4 py-2, hover lift

7. **Footer link:**
   - Text: "Nie masz konta?" + "Zarejestruj się" (link #6C63FF, font-semibold)

---

### REGISTER SCREEN

**Card content:**
1. **Logo + Title**
   - Same logo
   - H2: "Utwórz konto"
   - Subtitle: "Zacznij swoją przygodę z nauką"

2. **Form fields (stacked, gap 16px):**
   - **Imię i nazwisko:**
     - Label: "Imię i nazwisko"
     - Input: type text, placeholder "Jan Kowalski"
   
   - **Email:**
     - Same as login
   
   - **Hasło:**
     - Same as login
     - Password strength indicator below (weak/medium/strong, color-coded)
   
   - **Potwierdź hasło:**
     - Label: "Potwierdź hasło"
     - Input: type password, placeholder "••••••••"

3. **RODO checkbox:**
   - Checkbox + text: "Akceptuję Regulamin i Politykę Prywatności" (link underline on "Regulamin" and "Politykę")
   - Small text, #4A5568

4. **Primary button:**
   - Text: "Utwórz konto"
   - Same styling as login button

5. **Divider + Social (same as login)**

6. **Footer link:**
   - Text: "Masz już konto?" + "Zaloguj się" (link)

---

## DESIGN REQUIREMENTS

**Colors:**
- Primary: #6C63FF
- Secondary: #4ECDC4
- Neutrals: 900/700/500/300/100
- Background gradient: linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%)

**Typography:**
- Font: Inter (400/500/600/700)
- H2: 1.875rem (30px), 700
- Body: 1rem (16px), 400
- Small: 0.875rem (14px), 400
- Labels: 0.875rem (14px), 600

**Glassmorphism:**
- Card bg: rgba(255,255,255,0.7)
- Backdrop filter: blur(12px)
- Border: 1px solid rgba(255,255,255,0.2)
- Shadow: 0 8px 32px rgba(0,0,0,0.12)

**Spacing:**
- Card padding: 48px
- Field gap: 16px
- Input padding: 12px 16px
- Button padding: 12px 24px

**Border-radius:**
- Card: 24px (2xl)
- Inputs: 12px (lg)
- Buttons: 12px (lg)

**Interactions:**
- Input focus: border #6C63FF + ring glow
- Button hover: lift -2px, shadow increase
- Social button hover: lift -2px
- Links hover: underline

**Icons:**
- Material Icons Outlined
- Eye icon (password toggle): 20px, #A0AEC0
- Social icons: 20px

**Mobile-First:**
- Base = mobile (card max-width 400px, padding 32px)
- Desktop: card max-width 450px, padding 48px

---

## Generate clean, production-ready HTML with Tailwind classes.
