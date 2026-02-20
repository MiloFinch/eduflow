# Stitch Prompt — Component Library

**Screen:** Component Library (Design System Showcase)
**Purpose:** Display all reusable UI components for the EduFlow platform

---

## Design Requirements

Design a **Component Library page** showing all UI elements in an organized, visually appealing layout.

### Technical Requirements:
- Use **Tailwind CSS classes** (Mobile-First: base = mobile, `md:` = tablet 768px+, `lg:` = desktop 1024px+)
- **Semantic HTML5 tags** (`<header>`, `<main>`, `<section>`)
- **Responsive layout:** 1 column mobile, 2 columns tablet, 2-3 columns desktop (where appropriate)
- **Interactions:** Hover states on buttons/cards, focus states on inputs
- **Colors from palette:** primary #6C63FF, secondary #4ECDC4, accent #FF6B9D, neutral-900 #2D3748, neutral-700 #4A5568, neutral-500 #A0AEC0, neutral-300 #CBD5E0, neutral-100 #EDF2F7
- **Typography:** Inter font
  - H1: 3rem (48px), weight 700, line-height 1.1
  - H2: 1.875rem (30px), weight 700, line-height 1.2
  - H3: 1.5rem (24px), weight 600, line-height 1.2
  - H4: 1.25rem (20px), weight 600, line-height 1.2
  - Body: 1rem (16px), weight 400, line-height 1.5
  - Small: 0.875rem (14px), weight 400, line-height 1.5
- **Spacing:** 8px grid (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Border-radius:** inputs 12px, cards 16px, modals 24px, pills 9999px
- **Shadows:**
  - Hover: `0 2px 8px rgba(108, 99, 255, 0.1)`
  - Cards: `0 4px 16px rgba(0, 0, 0, 0.08)`
  - Modals: `0 8px 32px rgba(0, 0, 0, 0.12)`

---

## Components to Display

### 1. Page Header
- **H1 title:** "Component Library"
- **Subtitle:** "Design system for EduFlow platform — all reusable UI components"
- **Background:** Light gradient from #FAFAFA to #F5F5F7

---

### 2. Section: Buttons (5 variants)

**Section heading:** "Buttons"

Display 5 button variants in a horizontal row (stack vertically on mobile):

1. **Primary Button**
   - Text: "Primary Action"
   - Style: bg #6C63FF (primary), text white, rounded-lg (12px), padding 12px 24px, font-weight 600
   - Hover: lift up 2px (translateY -2px), shadow increase to `0 4px 16px rgba(108, 99, 255, 0.3)`

2. **Secondary Button**
   - Text: "Secondary Action"
   - Style: bg #4ECDC4 (secondary), text white, rounded-lg, padding 12px 24px, font-weight 600
   - Hover: same lift + shadow

3. **Outline Button**
   - Text: "Outline"
   - Style: bg transparent, border 2px solid #6C63FF, text #6C63FF, rounded-lg, padding 12px 24px, font-weight 600
   - Hover: bg #6C63FF, text white

4. **Ghost Button**
   - Text: "Ghost"
   - Style: bg transparent, no border, text #6C63FF, rounded-lg, padding 12px 24px, font-weight 600
   - Hover: bg #EDF2F7 (neutral-100)

5. **Disabled Button**
   - Text: "Disabled"
   - Style: bg #CBD5E0 (neutral-300), text #A0AEC0 (neutral-500), rounded-lg, padding 12px 24px, opacity 0.5, cursor not-allowed
   - No hover state

---

### 3. Section: Input Fields (4 types)

**Section heading:** "Input Fields"

Display 4 input types stacked vertically (with labels):

1. **Text Input**
   - Label: "Full Name"
   - Input: placeholder "John Doe", border 1px solid #CBD5E0, rounded-md (12px), padding 12px 16px, font-size 1rem
   - Focus state: border-color #6C63FF, outline ring 3px rgba(108, 99, 255, 0.2)

2. **Email Input**
   - Label: "Email Address"
   - Input: type email, placeholder "john@example.com", same styling as text
   - Focus state: same

3. **Password Input**
   - Label: "Password"
   - Input: type password, placeholder "••••••••", same styling
   - Focus state: same
   - Icon: eye icon on the right (show/hide password)

4. **Textarea**
   - Label: "Message"
   - Textarea: placeholder "Your message here...", rows 4, same border/rounded/padding/focus as inputs

---

### 4. Section: Cards (3 styles)

**Section heading:** "Cards"

Display 3 card variants in a grid (1 col mobile, 2 col tablet, 3 col desktop):

1. **Basic Card**
   - Style: bg white, border-radius 16px, padding 24px, shadow `0 4px 16px rgba(0, 0, 0, 0.08)`
   - Content: H3 "Basic Card", paragraph "This is a basic card with simple styling."

2. **Hoverable Card**
   - Style: same as basic + hover state
   - Hover: rotate(2deg) scale(1.02), shadow increase to `0 8px 32px rgba(0, 0, 0, 0.12)`, transition 0.3s ease
   - Content: H3 "Hoverable Card", paragraph "Hover to see the lift effect."

3. **Clickable Card (with button)**
   - Style: same as hoverable
   - Content: H3 "Clickable Card", paragraph "This card has a call-to-action.", button "Learn More" (primary style)
   - Hover: same lift + shadow

---

### 5. Section: Typography Showcase

**Section heading:** "Typography Scale"

Display all heading levels + body text:

- **H1:** "Heading 1" (3rem, 700, line-height 1.1, #2D3748)
- **H2:** "Heading 2" (1.875rem, 700, line-height 1.2, #2D3748)
- **H3:** "Heading 3" (1.5rem, 600, line-height 1.2, #2D3748)
- **H4:** "Heading 4" (1.25rem, 600, line-height 1.2, #2D3748)
- **Body:** "Body text — Lorem ipsum dolor sit amet, consectetur adipiscing elit." (1rem, 400, line-height 1.5, #4A5568)
- **Small:** "Small text — for captions and secondary information" (0.875rem, 400, line-height 1.5, #A0AEC0)

---

### 6. Section: Color Palette

**Section heading:** "Color Palette"

Display color swatches in a grid (3 col mobile, 6 col desktop):

- **Primary:** #6C63FF (square swatch 64px, rounded-lg, label "Primary" below)
- **Secondary:** #4ECDC4 (label "Secondary")
- **Accent:** #FF6B9D (label "Accent")
- **Success:** #48BB78 (label "Success")
- **Warning:** #ECC94B (label "Warning")
- **Error:** #F56565 (label "Error")
- **Info:** #4299E1 (label "Info")
- **Neutral 900:** #2D3748 (label "Neutral 900")
- **Neutral 700:** #4A5568 (label "Neutral 700")
- **Neutral 500:** #A0AEC0 (label "Neutral 500")
- **Neutral 300:** #CBD5E0 (label "Neutral 300")
- **Neutral 100:** #EDF2F7 (label "Neutral 100")

---

### 7. Section: Icons (20 common icons)

**Section heading:** "Icon Set"

Display 20 outline-style icons (Heroicons/Lucide) in a grid (4 col mobile, 10 col desktop):

Icons to include:
- Home
- Dashboard
- Courses (book icon)
- Search
- Notifications (bell)
- User/Profile
- Settings
- Help
- Logout
- Play (video)
- Pause
- Check (success)
- X (close)
- ChevronRight (navigation)
- ChevronDown
- Plus (add)
- Edit (pencil)
- Delete (trash)
- Download
- Upload

Each icon:
- Size: 24px
- Stroke weight: 1.5px
- Color: #6C63FF (primary)
- Hover: scale(1.1), color #4ECDC4 (secondary)

---

## Layout Structure

```
<main class="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 py-12 px-4">
  <div class="max-w-6xl mx-auto">
    
    <!-- Page Header -->
    <header class="text-center mb-12">
      <h1>Component Library</h1>
      <p class="text-neutral-500">Design system for EduFlow platform</p>
    </header>

    <!-- Section: Buttons -->
    <section class="mb-16">
      <h2 class="mb-6">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <!-- 5 button variants -->
      </div>
    </section>

    <!-- Section: Input Fields -->
    <section class="mb-16">
      <h2 class="mb-6">Input Fields</h2>
      <div class="space-y-4 max-w-md">
        <!-- 4 input types with labels -->
      </div>
    </section>

    <!-- Section: Cards -->
    <section class="mb-16">
      <h2 class="mb-6">Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 3 card variants -->
      </div>
    </section>

    <!-- Section: Typography -->
    <section class="mb-16">
      <h2 class="mb-6">Typography Scale</h2>
      <div class="space-y-4">
        <!-- All heading levels + body + small -->
      </div>
    </section>

    <!-- Section: Color Palette -->
    <section class="mb-16">
      <h2 class="mb-6">Color Palette</h2>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <!-- 12 color swatches -->
      </div>
    </section>

    <!-- Section: Icons -->
    <section class="mb-16">
      <h2 class="mb-6">Icon Set</h2>
      <div class="grid grid-cols-4 md:grid-cols-10 gap-4">
        <!-- 20 icons -->
      </div>
    </section>

  </div>
</main>
```

---

## Accessibility Requirements

- All inputs have associated `<label>` elements
- All icons have `aria-label` attributes
- All interactive elements have `focus:` states (ring-2, outline-primary)
- Color swatches display hex values on hover
- Semantic HTML5 tags throughout

---

## Generate clean, production-ready HTML with Tailwind classes following this specification exactly.
