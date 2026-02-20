'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: {
    name: string;
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  studentCount: number;
  duration: string;
  price: number | 'free';
  badge?: 'bestseller' | 'new' | 'free';
  thumbnail: string;
}

const COURSES: Course[] = [
  {
    id: '1',
    title: 'React 18 & Next.js: Kompletny Przewodnik 2024',
    category: 'Frontend Development',
    instructor: {
      name: 'Adam Nowak',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNFzA4A-uOgYLuJEdsGI6IYhi5ZxDBe3W3QzdcIKq2lr0b_g2cVZtX5Ff-40xg8Ii-r0iu1PKgR7Nu4npvw-_bkOh0byXSiBj2kKilyTJdXT0bF8pnQRQxUjaI1yuwnCaabrVfmlxrc_iXEFzfM1DQ_ZhnSnkUfnrkHxlFvNnNVF60fanuQN3hVfioQQHP9R55iWgHao_TC3yIZQxxu84n73bprCi5GNLozOC7aGmm4LIk4S1UHEbDqvh6HfDrnamQ0Uqlf8lP16LX'
    },
    rating: 4.9,
    reviewCount: 2340,
    studentCount: 2400,
    duration: '24h',
    price: 149,
    badge: 'bestseller',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJC41CoKUc5zVojyB2VPOCu8S_mDGh-tXzN5iRUITjyPswEhF0wOMYWp2Om0mYAki-Jydq8OlIiTJPSm6wbKl1OjyjNV6TUpmqBTwX-8XIeuG9_WMwBRC_Wt_6DNrUeUC5NSjxKmz8xT2CS0w_dMQyTdDw7LrErdSrx7sgE4OWibo-f2bG0jFlHfwHFBpkCbBiQtOff1O95GH86kSl56gTC8iP-o5YSEcczV2kd7_B48UDv_235fSNHfBSBc1dfwioKeZAPwE2aLgL'
  },
  {
    id: '2',
    title: 'Projektowanie systemów designu w Figma',
    category: 'UI/UX Design',
    instructor: {
      name: 'Marta Kowalska',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtwK8PprXkmx21iuuXkVNTxPr9bY9onXCVrMWJ0Xkg1mnQ5F4cMlY53oOuHHmuZlcy9Ge42KjJKtfktXcPHHrTYqKYlzfydh_M09gD21U6i09wuRwlP4VsXZMoZQkEA5uaqIA6OeAZb3y0zeTirU5iAXmt0o4lTJjerl52vG_SkZ6aj1jgavLOGt6EAdhMqy_-RIifyj1pdnXMCu3sOoNI5QIHfbm8h50kv83RaOZbvxADzLZ_60-IboEgzxkFftk8mxR5dyW4-lf5'
    },
    rating: 4.8,
    reviewCount: 850,
    studentCount: 850,
    duration: '12h',
    price: 199,
    badge: 'new',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKqw2YpK0Q2FGA5BOwzVUYtxIDjryvneq5oCLbmvk2dcPo7N5XzXvUtyKufWUle7E6h1moNRTTBBdIhaChlBvaaaIcP9FGPO7BVkTPtyq9ExUReeEKRLqeZOBGYY_Ji8HUmVO9kumdM7ACGQZ78K97oD6AMwx-E0a1vuNiPT4LvR5W4z5gOYzYYrbrqP0P9b0SQbTboLOHYpcn7Joq0BU6GNa7K53SYVT1MCdJfK26HsGCcwAyDl8c8gXkqI8KCB8_miT7TJi2MAW-'
  },
  {
    id: '3',
    title: 'Wprowadzenie do JavaScript ES6+',
    category: 'Programowanie',
    instructor: {
      name: 'Piotr Zieliński',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwey9yYeoNCVANTPY2h6qn-Q7MtpbM3TYqZg2BLmFHvO5hxmW1sGYas2xuf1OA1HNuwHFJcSsiyMBP-UsgwHQ8brtH8NxHXdALXLuGDqfDefDgsBVdg3RwPU_qIzC6Cx5UiWrNpxknH4QIaqwvPvXYZrYvF_8RLawHCuGCSMuxs6ZM9e86PsvPZgGz6iXGDBCR29JjaBVNZxfkU5yeT-LSOHCIos3z-CqF6J092GwTvo7e-ng3CSMnYAOxX_DAUylT1ynqPXrGfB56'
    },
    rating: 4.7,
    reviewCount: 2450,
    studentCount: 15000,
    duration: '4h',
    price: 'free',
    badge: 'free',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOefk5qtpGnv3msI3XNovwNvDI6eyJUkN_eNAtqcQzTx6jhxb0R0V7MhBovmr9OskeMyFRHpi4syjMm_b-0xMu7PyYkVBAgyOhkzXPVp7ocFAEUFvLYKUyGvmHBYsOv1wFs5wfWj5z3lA3mSpKjKXbw9XAr9J-0wfBMz25CXm6xoBMImchbjZXxxlDgj12erxMxIHPf8IHRTLlMbCYE9BY_CCgeTaarOsNWTo2TqUe8vBfqlBGuckjbQ-X1W9Yt5WJBvBjaeQoMzON'
  },
  {
    id: '4',
    title: 'Python dla Analizy Danych od Podstaw',
    category: 'Data Science',
    instructor: {
      name: 'Krzysztof Król',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbjXPBIouUPj5maF5VrHOu-fw68XOpFFkpjMcy6SJ4OXvfXlA788-Fyv6nc3BVxDxuiCkHh_esax5T2oMu8ih2U7fZ0r-vAJcjwNMsoHfeilaVOTE9hEGlOQ5qe5jM42H7xvhWmxzLxJuquDktuBNTMfmGPuPHwKJLSJS1_fhMrN3M85PK3B1rjq5rssZirLjA945mLRU1WACYf--web7l_mCBPSo9bszlBLOU5PVAmh_Gl60fH_Ls8SS9OSqATiCwsNnkzDxxIXPY'
    },
    rating: 4.9,
    reviewCount: 1780,
    studentCount: 5200,
    duration: '30h',
    price: 129,
    badge: 'bestseller',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbY2u2znb_8x7OknFgPsVhuTi7ZCfFafMap4c7L3ZMkNDpPd3SmH-zK3EPFonSh1_EgEXFjj55uccBkAQU5Qi5Is8UmK-NpyWhkP4O4Cy50H76JdlsKchxgJLwJ4apKUA4j9Icsflb4W3OMgaHGbPdYkWjMLKXaYkKlw4vVXgY0VN5nC9zVIIGPiXLcxkqG4ZvM1TcKLb6wRfOkJFmTv4ZLjeV1emauzXI2oKplml_R1M8dEeIQ37hccXKuxDkvhoqP0Bbq9-uFdUW'
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewCourse = (courseId: string) => {
    // TODO: Navigate to course detail page
    console.log('View course:', courseId);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setGlobalSearchQuery('');
    setSortBy('popular');
    setCurrentPage(1);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log('Search:', searchQuery);
  };

  const handleGlobalSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement global search logic
    console.log('Global search:', globalSearchQuery);
  };

  const formatStudentCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="bg-[#f5f5f8] dark:bg-[#100f23] text-slate-900 dark:text-slate-100 font-display min-h-screen">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#100f23]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Search */}
            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-2 text-[#6961ff] focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded">
                <span className="material-symbols-outlined text-3xl font-bold">school</span>
                <h2 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">EduFlow</h2>
              </Link>
              <form onSubmit={handleGlobalSearch} className="hidden md:flex flex-1 max-w-md">
                <div className="relative w-full">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-[#6961ff] text-sm outline-none"
                    placeholder="Szukaj kursów, ścieżek..."
                    type="text"
                    value={globalSearchQuery}
                    onChange={(e) => setGlobalSearchQuery(e.target.value)}
                    aria-label="Szukaj kursów"
                  />
                </div>
              </form>
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/my-courses" className="text-sm font-semibold hover:text-[#6961ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-2 py-1">
                  Moje Kursy
                </Link>
                <Link href="/mentors" className="text-sm font-semibold hover:text-[#6961ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-2 py-1">
                  Mentorzy
                </Link>
                <Link href="/forum" className="text-sm font-semibold hover:text-[#6961ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-2 py-1">
                  Forum
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <button
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#6961ff] transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
                  aria-label="Powiadomienia"
                  onClick={() => console.log('Open notifications')}
                >
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#6961ff] rounded-full" />
                </button>
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-[#6961ff]/20"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs6SK76kdWmPZszRFGQJGZsViIcwGfUEvd1XiMZDwfDAyzOWwto5gIvIp0UuriUo6Y_QdSHwi8Dri5AThKjy1NVwTh8arLwja0emhQenS3d5SWQ1zjBW6uhoG8GrSvdHbbxxwGLydN7PHYLs6w1ksAkUoxTXRAB6u9XL8Hh-v1KWPY4LTKRXcqgwLYuwYayN-jV7WjNrzOnX32mNzUaPL2uhw7k9WxFzDJa9hu5RyaiHRDo-7B01d8yGquyv78f--hCPfYqR7vWfax')"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs & Hero */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6961ff] focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-1">
            Home
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-slate-900 dark:text-white font-medium">Katalog</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Katalog Kursów</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Znajdź idealny kurs — ponad 1,200 kursów od ekspertów</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#6961ff] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => console.log('Open category filter')}
            aria-label="Filtruj po kategorii"
          >
            <span className="text-sm font-semibold">Kategoria</span>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#6961ff] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => console.log('Open level filter')}
            aria-label="Filtruj po poziomie"
          >
            <span className="text-sm font-semibold">Poziom</span>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#6961ff] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => console.log('Open price filter')}
            aria-label="Filtruj po cenie"
          >
            <span className="text-sm font-semibold">Cena</span>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#6961ff] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => console.log('Open language filter')}
            aria-label="Filtruj po języku"
          >
            <span className="text-sm font-semibold">Język</span>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
          <button
            className="text-[#6961ff] text-sm font-bold ml-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-2 py-1"
            onClick={handleClearFilters}
          >
            Wyczyść filtry
          </button>
        </div>

        {/* Results Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#6961ff] text-sm outline-none"
                placeholder="Szukaj po nazwie..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Wyszukaj kursy po nazwie"
              />
            </form>
            <p className="text-sm text-slate-500 whitespace-nowrap">
              Znaleziono <span className="text-slate-900 dark:text-white font-bold">48 kursów</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sortuj:</span>
            <select
              className="bg-transparent border-none text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sortuj kursy"
            >
              <option value="popular">Najpopularniejsze</option>
              <option value="newest">Najnowsze</option>
              <option value="price-asc">Cena: rosnąco</option>
              <option value="rating">Ocena: najwyższa</option>
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COURSES.map((course) => (
            <button
              key={course.id}
              onClick={() => handleViewCourse(course.id)}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-10px_rgba(105,97,255,0.15)] text-left focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            >
              <div className="relative aspect-video">
                <img className="w-full h-full object-cover" alt={course.title} src={course.thumbnail} />
                {course.badge && (
                  <div
                    className={`absolute top-3 left-3 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider ${
                      course.badge === 'bestseller'
                        ? 'bg-orange-500'
                        : course.badge === 'new'
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}
                  >
                    {course.badge === 'bestseller' ? 'Bestseller' : course.badge === 'new' ? 'Nowy' : 'Darmowy'}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#6961ff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <span className="text-[#6961ff] text-[11px] font-bold uppercase tracking-widest mb-2 block">
                  {course.category}
                </span>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-3 line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-6 h-6 rounded-full bg-cover"
                    style={{ backgroundImage: `url('${course.instructor.avatar}')` }}
                  />
                  <span className="text-xs text-slate-500">{course.instructor.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                    <span className="font-bold text-slate-900 dark:text-white">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">group</span>
                    <span>{formatStudentCount(course.studentCount)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  {course.price === 'free' ? (
                    <span className="text-xl font-black text-[#6961ff] uppercase">Free</span>
                  ) : (
                    <span className="text-xl font-black text-slate-900 dark:text-white whitespace-nowrap">
                      {course.price} zł
                    </span>
                  )}
                  <span className="w-full py-2.5 bg-[#6961ff] text-white text-sm font-bold rounded-xl group-hover:bg-[#6961ff]/90 transition-colors text-center">
                    Zobacz kurs
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 pb-16">
          <button
            className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-500 hover:text-[#6961ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Poprzednia strona"
          >
            <span className="material-symbols-outlined">chevron_left</span>
            Wstecz
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff] ${
                  currentPage === page
                    ? 'bg-[#6961ff] text-white'
                    : 'hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Strona ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-slate-400">...</span>
            <button
              className="w-10 h-10 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
              onClick={() => setCurrentPage(10)}
              aria-label="Strona 10"
            >
              10
            </button>
          </div>
          <button
            className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-500 hover:text-[#6961ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded"
            onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
            disabled={currentPage === 10}
            aria-label="Następna strona"
          >
            Dalej
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#100f23] border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[#6961ff] mb-4">
            <span className="material-symbols-outlined text-2xl font-bold">school</span>
            <h2 className="text-slate-900 dark:text-white text-lg font-black tracking-tight">EduFlow</h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 EduFlow E-learning Platform. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>

      <style jsx global>{`
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
}
