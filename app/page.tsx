"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────
interface Feature {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  hoverBg: string;
}

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  cta: string;
  highlighted: boolean;
  features: { text: string; enabled: boolean }[];
}

// ─── Data ────────────────────────────────────────────────────────────
const features: Feature[] = [
  {
    icon: "schedule",
    title: "Elastyczny grafik",
    description: "Ucz się kiedy chcesz i gdzie chcesz. Nasze kursy są dostępne 24/7 na każdym urządzeniu.",
    colorClass: "bg-[#6961ff]/10 text-[#6961ff]",
    hoverBg: "group-hover:bg-[#6961ff] group-hover:text-white",
  },
  {
    icon: "workspace_premium",
    title: "Certyfikaty",
    description: "Otrzymuj uznawane w branży certyfikaty po każdym ukończonym module i kursie.",
    colorClass: "bg-[#4ECDC4]/10 text-[#4ECDC4]",
    hoverBg: "group-hover:bg-[#4ECDC4] group-hover:text-white",
  },
  {
    icon: "school",
    title: "Najlepsi mentorzy",
    description: "Ucz się bezpośrednio od ekspertów z Google, Microsoft, Meta i czołowych startupów.",
    colorClass: "bg-[#FF6B9D]/10 text-[#FF6B9D]",
    hoverBg: "group-hover:bg-[#FF6B9D] group-hover:text-white",
  },
  {
    icon: "groups",
    title: "Społeczność",
    description: "Dołącz do tysięcy ambitnych studentów na naszych kanałach Discord i Slack.",
    colorClass: "bg-indigo-100 text-indigo-600",
    hoverBg: "group-hover:bg-indigo-600 group-hover:text-white",
  },
  {
    icon: "psychology",
    title: "Rozwój osobisty",
    description: "Buduj ścieżkę kariery dopasowaną do Twoich mocnych stron i ambicji.",
    colorClass: "bg-orange-100 text-orange-600",
    hoverBg: "group-hover:bg-orange-600 group-hover:text-white",
  },
  {
    icon: "all_inclusive",
    title: "Nielimitowany dostęp",
    description: "W planach premium otrzymujesz dostęp do wszystkich materiałów i aktualizacji 24/7.",
    colorClass: "bg-teal-100 text-teal-600",
    hoverBg: "group-hover:bg-teal-600 group-hover:text-white",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Anna Kowalska",
    role: "UX Design Student",
    initials: "AK",
    quote: "Kurs UX Design na EduFlow kompletnie zmienił moją ścieżkę zawodową. Mentorzy są niesamowicie pomocni, a materiały zawsze aktualne.",
  },
  {
    name: "Jan Nowak",
    role: "Frontend Developer",
    initials: "JN",
    quote: "Platforma jest intuicyjna, a system motywacyjny sprawia, że chce się wracać codziennie. Jako programista doceniam jakość kodu w kursach.",
  },
  {
    name: "Marta Lis",
    role: "Marketing Specialist",
    initials: "ML",
    quote: "Najlepsza inwestycja w mój rozwój osobisty w tym roku. Nielimitowany dostęp pozwala mi uczyć się różnych dziedzin jednocześnie.",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    subtitle: "Dla hobbystów",
    price: "€0",
    priceSuffix: "/miesiąc",
    cta: "Wybierz Free",
    highlighted: false,
    features: [
      { text: "Podstawowe kursy", enabled: true },
      { text: "Dostęp do społeczności", enabled: true },
      { text: "Reklamy", enabled: false },
    ],
  },
  {
    name: "Pro",
    subtitle: "Dla ambitnych profesjonalistów",
    price: "€29",
    priceSuffix: "/miesiąc",
    cta: "Zacznij Pro",
    highlighted: true,
    features: [
      { text: "Wszystkie kursy", enabled: true },
      { text: "Certyfikaty ukończenia", enabled: true },
      { text: "Brak reklam", enabled: true },
      { text: "Priorytetowe wsparcie", enabled: true },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Dla zespołów i firm",
    price: "Kontakt",
    cta: "Skontaktuj się",
    highlighted: false,
    features: [
      { text: "Zarządzanie zespołem", enabled: true },
      { text: "Analityka postępów", enabled: true },
      { text: "Dedykowany opiekun", enabled: true },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────
export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f5f8] font-[Inter,sans-serif] text-slate-900">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#6961ff] text-white shadow-lg shadow-[#6961ff]/30">
              <span className="material-symbols-outlined text-2xl">auto_stories</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">EduFlow</h1>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <Link href="/courses" className="text-sm font-semibold transition-colors hover:text-[#6961ff]">Kursy</Link>
            <a href="#pricing" className="text-sm font-semibold transition-colors hover:text-[#6961ff]">Ceny</a>
            <a href="#" className="text-sm font-semibold transition-colors hover:text-[#6961ff]">Dla firm</a>
            <a href="#" className="text-sm font-semibold transition-colors hover:text-[#6961ff]">O nas</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:text-[#6961ff]">
              Zaloguj się
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-[#6961ff] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#6961ff]/20 transition-all active:scale-95 hover:bg-[#6961ff]/90"
            >
              Zarejestruj się
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <header className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6961ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#6961ff]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6961ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6961ff]" />
              </span>
              Nowa wersja 2.0 dostępna
            </div>

            <h2 className="text-6xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
              Ucz się w swoim <span className="text-[#6961ff]">tempie</span>
            </h2>

            <p className="max-w-lg text-xl leading-relaxed text-slate-600">
              Nowoczesna platforma e-learningowa, która dostosowuje się do Twoich potrzeb. Rozwijaj umiejętności z najlepszymi mentorami z całego świata.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-[#6961ff] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#6961ff]/25 transition-all hover:-translate-y-1 hover:bg-[#6961ff]/90"
              >
                Zacznij za darmo
              </Link>
              <Link
                href="/courses"
                className="flex items-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-[#6961ff]/30"
              >
                Zobacz kursy
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {["AK", "JN", "ML"].map((initials) => (
                  <div
                    key={initials}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-[#6961ff]/10 text-xs font-bold text-[#6961ff]"
                  >
                    {initials}
                  </div>
                ))}
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Dołącz do ponad 2,000 aktywnych studentów
              </p>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#6961ff]/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#4ECDC4]/20 blur-[100px]" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-2xl shadow-slate-200">
              {/* TODO: Replace with real hero image */}
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-[#6961ff]/10 to-[#4ECDC4]/10 lg:aspect-video">
                <span className="material-symbols-outlined text-8xl text-[#6961ff]/30">
                  play_circle
                </span>
              </div>
              {/* Live Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/50 bg-white/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#4ECDC4] text-white">
                    <span className="material-symbols-outlined">play_circle</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tighter text-slate-500">
                      Live teraz
                    </p>
                    <p className="text-sm font-bold">Warsztaty UX Design</p>
                  </div>
                </div>
                <span className="animate-pulse rounded bg-red-500 px-2 py-1 text-[10px] font-black text-white">
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Features Section ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-20 flex max-w-3xl flex-col gap-4 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#6961ff]">Zalety</h2>
            <h3 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Dlaczego EduFlow?
            </h3>
            <p className="text-lg text-slate-600">
              Zaprojektowaliśmy naszą platformę tak, aby nauka była nie tylko efektywna, ale również przyjemna i inspirująca.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-transparent bg-[#f5f5f8] p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#6961ff]/20 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex size-14 items-center justify-center rounded-xl transition-colors duration-300 ${f.colorClass} ${f.hoverBg}`}
                >
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-slate-900">{f.title}</h4>
                <p className="leading-relaxed text-slate-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section id="pricing" className="overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col gap-4 text-center">
            <h3 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Wybierz plan
            </h3>
            <p className="text-slate-600">
              Przejrzyste ceny dopasowane do Twojego etapu nauki.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-6 rounded-xl bg-white p-10 ${
                  plan.highlighted
                    ? "z-10 scale-110 border-2 border-[#6961ff] shadow-2xl transition-transform hover:scale-[1.12]"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-pulse rounded-full bg-[#6961ff] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-[#6961ff]/40">
                    Best Value
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold">{plan.name}</h4>
                  <p className="text-sm text-slate-500">{plan.subtitle}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${plan.highlighted ? "text-[#6961ff]" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="font-medium text-slate-500">{plan.priceSuffix}</span>
                  )}
                </div>
                <button
                  className={`w-full rounded-xl py-3.5 font-bold transition-colors ${
                    plan.highlighted
                      ? "bg-[#6961ff] text-white shadow-lg shadow-[#6961ff]/25 hover:bg-[#6961ff]/90"
                      : "border-2 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="mt-4 flex flex-col gap-4">
                  {plan.features.map((feat) => (
                    <li
                      key={feat.text}
                      className={`flex items-center gap-3 text-sm ${
                        feat.enabled
                          ? plan.highlighted
                            ? "font-semibold"
                            : "text-slate-600"
                          : "text-slate-600 opacity-50"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-lg ${
                          feat.enabled
                            ? plan.highlighted
                              ? "text-[#6961ff]"
                              : "text-green-500"
                            : "text-slate-300"
                        }`}
                      >
                        {feat.enabled ? "check_circle" : "cancel"}
                      </span>
                      {feat.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="bg-[#6961ff]/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-16 text-center text-3xl font-black">Co mówią nasi studenci</h3>
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[400px] snap-center rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50"
              >
                <div className="mb-4 flex gap-1 text-[#FF6B9D]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-8 italic leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#6961ff]/10 text-sm font-bold text-[#6961ff]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#2D2D30] py-20 text-slate-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="flex size-8 items-center justify-center rounded bg-[#6961ff]">
                <span className="material-symbols-outlined text-lg">auto_stories</span>
              </div>
              <h2 className="text-xl font-black">EduFlow</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Edukacja przyszłości dostępna już dziś. Dołącz do nas i twórz swoją ścieżkę sukcesu.
            </p>
            <div className="flex gap-4">
              {["public", "alternate_email", "video_library"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-[#6961ff]"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-6 font-bold text-white">Produkty</h5>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Wszystkie kursy</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Dla firm</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Zostań mentorem</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Ceny</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 font-bold text-white">Firma</h5>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">O nas</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Kariera</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-[#6961ff]">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 font-bold text-white">Newsletter</h5>
            <p className="mb-6 text-sm text-slate-400">
              Zapisz się, aby otrzymywać informacje o nowych kursach.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-none bg-slate-800 px-4 py-2 text-sm focus:ring-2 focus:ring-[#6961ff]"
              />
              <button
                className="rounded-lg bg-[#6961ff] px-4 py-2 text-white transition-colors hover:bg-[#6961ff]/90"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-slate-800 px-6 pt-8 text-[10px] font-bold uppercase tracking-widest md:flex-row">
          <p>© 2026 EDUFLOW. WSZYSTKIE PRAWA ZASTRZEŻONE.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">POLITYKA PRYWATNOŚCI</a>
            <a href="#" className="transition-colors hover:text-white">REGULAMIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
