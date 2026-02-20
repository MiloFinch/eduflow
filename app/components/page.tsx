type ButtonVariant = {
  id: string
  label: string
  description: string
  className: string
}

type InputType = {
  id: string
  label: string
  type: 'text' | 'email' | 'password' | 'search'
  placeholder: string
  helper: string
}

type CardStyle = {
  id: string
  title: string
  description: string
  className: string
}

type ColorSwatch = {
  name: string
  hex: string
}

const buttonVariants: ButtonVariant[] = [
  {
    id: 'primary',
    label: 'Primary',
    description: 'Main call-to-action',
    className:
      'bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:ring-primary',
  },
  {
    id: 'secondary',
    label: 'Secondary',
    description: 'Supportive actions',
    className:
      'bg-secondary text-neutral-900 shadow-sm hover:bg-secondary/90 focus-visible:ring-secondary',
  },
  {
    id: 'accent',
    label: 'Accent',
    description: 'Highlights important moments',
    className:
      'bg-accent text-white shadow-sm hover:bg-accent/90 focus-visible:ring-accent',
  },
  {
    id: 'outline',
    label: 'Outline',
    description: 'Low-emphasis actions',
    className:
      'border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary',
  },
  {
    id: 'ghost',
    label: 'Ghost',
    description: 'Minimal utility actions',
    className:
      'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-500',
  },
]

const inputTypes: InputType[] = [
  {
    id: 'text',
    label: 'Text Input',
    type: 'text',
    placeholder: 'Enter your full name',
    helper: 'Use for short free-form text.',
  },
  {
    id: 'email',
    label: 'Email Input',
    type: 'email',
    placeholder: 'name@example.com',
    helper: 'Includes browser email validation.',
  },
  {
    id: 'password',
    label: 'Password Input',
    type: 'password',
    placeholder: 'Create a secure password',
    helper: 'Mask characters for private entry.',
  },
  {
    id: 'search',
    label: 'Search Input',
    type: 'search',
    placeholder: 'Search course content',
    helper: 'Optimized for filtering and quick find.',
  },
]

const cardStyles: CardStyle[] = [
  {
    id: 'elevated',
    title: 'Elevated Card',
    description: 'Soft shadow for key content blocks.',
    className: 'bg-white shadow-card border border-neutral-100',
  },
  {
    id: 'outlined',
    title: 'Outlined Card',
    description: 'Clean border for structured layouts.',
    className: 'bg-white border-2 border-neutral-200 shadow-none',
  },
  {
    id: 'accented',
    title: 'Accent Gradient Card',
    description: 'Blend of primary and secondary for featured content.',
    className:
      'bg-gradient-to-br from-primary/15 via-white to-secondary/20 border border-primary/20 shadow-hover',
  },
]

const colorSwatches: ColorSwatch[] = [
  { name: 'Primary', hex: '#6C63FF' },
  { name: 'Primary Soft', hex: '#E4E2FF' },
  { name: 'Primary Deep', hex: '#4F46D9' },
  { name: 'Secondary', hex: '#4ECDC4' },
  { name: 'Secondary Soft', hex: '#D9F5F3' },
  { name: 'Secondary Deep', hex: '#2FAFA7' },
  { name: 'Accent', hex: '#FF6B9D' },
  { name: 'Accent Soft', hex: '#FFDCE9' },
  { name: 'Accent Deep', hex: '#E04B7E' },
  { name: 'Neutral 900', hex: '#2D3748' },
  { name: 'Neutral 500', hex: '#A0AEC0' },
  { name: 'Neutral 100', hex: '#EDF2F7' },
]

const iconPlaceholders = Array.from({ length: 20 }, (_, index) => `Icon ${index + 1}`)

export default function ComponentLibraryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-100 px-4 py-8 font-sans sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Component Library
          </p>
          <h1 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
            Design System Playground
          </h1>
          <p className="max-w-2xl text-sm text-neutral-700 sm:text-base">
            Mobile-first UI primitives using Inter, semantic HTML, and the core EduFlow
            palette: primary <strong>#6C63FF</strong>, secondary{' '}
            <strong>#4ECDC4</strong>, and accent <strong>#FF6B9D</strong>.
          </p>
        </header>

        <section aria-labelledby="typography-showcase" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="typography-showcase" className="mb-4 text-2xl font-bold text-neutral-900">
            Typography Showcase
          </h2>
          <div className="space-y-4">
            <h1>H1: Learning Experiences That Scale</h1>
            <h2>H2: Structured Paths and Milestones</h2>
            <h3>H3: Progress Signals for Every Learner</h3>
            <h4>H4: Compact Metadata and Labels</h4>
          </div>
        </section>

        <section aria-labelledby="button-variants" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="button-variants" className="mb-4 text-2xl font-bold text-neutral-900">
            Button Variants
          </h2>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buttonVariants.map((button) => (
              <li key={button.id} className="rounded-lg border border-neutral-200 p-4">
                <button
                  type="button"
                  className={`inline-flex min-h-[44px] items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${button.className}`}
                >
                  {button.label} Button
                </button>
                <p className="mt-2 text-sm text-neutral-600">{button.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="input-types" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="input-types" className="mb-4 text-2xl font-bold text-neutral-900">
            Input Types
          </h2>
          <form className="grid gap-4 sm:grid-cols-2" action="#">
            {inputTypes.map((input) => (
              <div key={input.id} className="space-y-2">
                <label htmlFor={input.id} className="text-sm font-medium text-neutral-900">
                  {input.label}
                </label>
                <input
                  id={input.id}
                  name={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="min-h-[44px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <p className="text-xs text-neutral-600">{input.helper}</p>
              </div>
            ))}
          </form>
        </section>

        <section aria-labelledby="card-styles" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="card-styles" className="mb-4 text-2xl font-bold text-neutral-900">
            Card Styles
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {cardStyles.map((card) => (
              <article key={card.id} className={`rounded-lg p-5 ${card.className}`}>
                <h3 className="text-lg font-semibold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{card.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  View details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="color-swatches" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="color-swatches" className="mb-4 text-2xl font-bold text-neutral-900">
            Color Swatches
          </h2>
          <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {colorSwatches.map((swatch) => (
              <li key={swatch.name} className="rounded-lg border border-neutral-200 p-3">
                <div
                  className="h-14 w-full rounded-md border border-neutral-200"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
                />
                <p className="mt-2 text-sm font-medium text-neutral-900">{swatch.name}</p>
                <p className="text-xs text-neutral-600">{swatch.hex}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="icon-placeholders" className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 id="icon-placeholders" className="mb-4 text-2xl font-bold text-neutral-900">
            Icon Placeholders
          </h2>
          <ul role="list" className="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-10">
            {iconPlaceholders.map((icon) => (
              <li
                key={icon}
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md border-2 border-dashed border-neutral-300 text-neutral-500">
                  <span className="text-xs font-semibold">IC</span>
                </div>
                <p className="mt-2 text-[11px] font-medium text-neutral-600">{icon}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
