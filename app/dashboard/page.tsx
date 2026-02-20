'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search:', searchQuery);
  };

  const handleContinueCourse = (courseId: string) => {
    // TODO: Navigate to course player
    console.log('Continue course:', courseId);
  };

  const handleViewCourse = (courseId: string) => {
    // TODO: Navigate to course detail
    console.log('View course:', courseId);
  };

  const handleUpgradeToPro = () => {
    // TODO: Navigate to pricing/checkout
    console.log('Upgrade to Pro');
  };

  return (
    <div className="bg-[#f6f5f8] dark:bg-[#100f23] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#100f23]/80 backdrop-blur-md border-b border-[#6b61ff]/10 px-4 md:px-8 lg:px-12 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 text-[#6b61ff] focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded">
              <span className="material-symbols-outlined text-3xl font-bold">school</span>
              <h2 className="text-xl font-black tracking-tight">EduFlow</h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              <Link href="/dashboard" className="text-sm font-semibold text-[#6b61ff] focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded px-2 py-1">
                Dashboard
              </Link>
              <Link href="/courses" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#6b61ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded px-2 py-1">
                Courses
              </Link>
              <Link href="/community" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#6b61ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded px-2 py-1">
                Community
              </Link>
              <Link href="/resources" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#6b61ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded px-2 py-1">
                Resources
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md hidden md:block">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#6b61ff] transition-colors pointer-events-none">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#6b61ff]/50 transition-all outline-none"
                placeholder="Search courses, lessons, topics..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search courses"
              />
            </div>
          </form>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button
              className="p-2 text-slate-500 hover:bg-[#6b61ff]/10 hover:text-[#6b61ff] rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
              aria-label="3 nowe powiadomienia"
              onClick={() => {
                // TODO: Open notifications panel
                console.log('Open notifications');
              }}
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-tight">Jan Kowalski</p>
                <p className="text-xs text-slate-500">Student Pro</p>
              </div>
              <img
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#6b61ff]/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeAeGGqx-bvOeLqRJk4nhtbbBGDyIYutRO_2_A9747kRjTQF9qMNio8oS84eQJ2jnTmKGU7B40Wv8_jiIhWLbYL4vpxB1rYYD3YttY8-EpKWsdvVtdJjM779X8CpHIOXX1vfbXHK-5dBWdC7DgRerO2tFTfwnClGojwlJWho8u8HgwRFBdxsdB2SU7R41tv1Ct2jswPY3sSmL3kcVZWAH27rKBxwqCwRa5utS3NyC-XRjIj3whHWbaLwQ3GK5enJZ0ecR8mWHFZayd"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Main Content */}
        <div className="lg:col-span-9 space-y-8">
          {/* Hero Welcome Section */}
          <section className="bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] rounded-xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-[#6b61ff]/20">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-md">
                <h1 className="text-3xl md:text-4xl font-black mb-3">Witaj z powrotem, Jan!</h1>
                <p className="text-white/80 font-medium">Masz świetne tempo. Kontynuuj naukę tam, gdzie skończyłeś, aby osiągnąć swój tygodniowy cel.</p>
                <button
                  className="mt-6 bg-white text-[#6b61ff] font-bold px-6 py-3 rounded-lg hover:bg-slate-50 transition-all shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6b61ff]"
                  onClick={() => handleContinueCourse('last-active')}
                >
                  <span>Kontynuuj naukę</span>
                  <span className="material-symbols-outlined">play_circle</span>
                </button>
              </div>

              {/* Glassmorphic Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-2xl font-black">12</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Ukończone</span>
                </div>
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-2xl font-black">145h</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Nauka</span>
                </div>
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-2xl font-black">2,450</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Punkty</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </section>

          {/* Continue Learning Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6b61ff]">pending_actions</span>
                Kontynuuj naukę
              </h2>
              <Link href="/courses/my-courses" className="text-[#6b61ff] text-sm font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-[#6b61ff] rounded px-2 py-1">
                Wszystkie kursy
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Course Card 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600">anchor</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">75%</span>
                </div>
                <h3 className="font-bold text-base mb-1">React Hooks Masterclass</h3>
                <p className="text-xs text-slate-500 mb-4">Lekcja 12 z 16: Custom Hooks</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#6b61ff] h-full rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600">code</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">30%</span>
                </div>
                <h3 className="font-bold text-base mb-1">Advanced Node.js</h3>
                <p className="text-xs text-slate-500 mb-4">Lekcja 4 z 12: Event Loop</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#6b61ff] h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-600">grid_view</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">90%</span>
                </div>
                <h3 className="font-bold text-base mb-1">CSS Grid Layouts</h3>
                <p className="text-xs text-slate-500 mb-4">Lekcja 9 z 10: Responsive Grids</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#6b61ff] h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4ECDC4]">verified</span>
                Polecane dla Ciebie
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Recommended Card 1 */}
              <button
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
                onClick={() => handleViewCourse('typescript-fundamentals')}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    alt="TypeScript Course"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr2yrPxAgvl8TiEcNJ7pN14Hf8ij_jnEORC7J49vzC9DP4AHbP7t3NG2sd-NIsR2tq9Jta4LuEaQ4AcVphydQW8yvsX2uGuyIZo-tRcjZfp5kp_2d31kU7VjU17zkL6ZVowdnn4nFXZ45SqPYt5kNaFlcSc4eiQ5iWKJEW8pZH4TI7ngBCeRQY-rsGM9VwS3Ibk7F2fKeOIpx4B5Wr2yqsjnpw-ZsDfhZ9j9vUMxCSJup0lbRE3y0l7lKEIFFlGEu-PJLG4Fxg1O9U"
                  />
                  <span className="absolute top-2 left-2 bg-[#6b61ff] text-white text-[10px] font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[#6b61ff] text-[10px] font-bold uppercase mb-1">Development</p>
                  <h4 className="font-bold text-sm mb-2 line-clamp-1">TypeScript Fundamentals</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <img
                      alt="Alex Rivera"
                      className="w-5 h-5 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuALsqNXAtZmRoHwv15vHZ4QttcclyjXhUtUB9KWo7CpIL53wz_K5d27A_iB6XJ1UOUhlKWrkksxRl1ZbtQKhroGGAWQTvRc3uEOWd9P-a-JOn1gW__wFR4Oyt6Tn5RWwIiALBETu5v8IGd-hHb8Yd3Ff2iHUp1Mg4BpbWl5O2VtXOkCxyHROmcvXGbfejGN1CAYn6Arl82FUemVOB2ykvACYp0F2Xliz8zs2hXby7g7ddn4SIkDb-kv85vhBQaymCHwdx_9ushpRmBU"
                    />
                    <span>Alex Rivera</span>
                  </div>
                </div>
              </button>

              {/* Recommended Card 2 */}
              <button
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
                onClick={() => handleViewCourse('nextjs-14')}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    alt="Next.js 14 Course"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfzSK7m8N8Gbd002jmUdyexE5mtkrmBl57pWk0lEQcOMYRSmNLlM0rJATPDmgPGP5g2ThlUbv6DD7LYFQS6RllWE3fSm9L7-VOTboolKziM9GVL0Gb_OlirSJCzult0ndjxIQmxcGYrPoILCml_Sh9kUULu1hTAx3gWUBJm5IHkZgW7JmpHrMLoB-ouJYvMrk06sruT9bQA9stQCTvmFpC09sm1Y43-48ariwzxKlQqrEwD0hsc97o-H4z0_-fJ5K-H6BXEwCNDbyJ"
                  />
                  <span className="absolute top-2 left-2 bg-[#4ECDC4] text-white text-[10px] font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[#6b61ff] text-[10px] font-bold uppercase mb-1">Frontend</p>
                  <h4 className="font-bold text-sm mb-2 line-clamp-1">Next.js 14 Deep Dive</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <img
                      alt="Sarah Chen"
                      className="w-5 h-5 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACCMLdYPKG5IZzscOKCl2sJLFfZ9f9na2qZGuftJXy5gVRnzO7ejHbhfX8YPWTNjkhasBmC1RMEc8EqmNgngq4FAOtdLGnLJriQ_pRPblv2aws3bzX0aEY0ZXqkn8hGqpmYmXWjk5spFmQkS31cnOJBHr-T1IilwKn9FhnTjtcX6K2o-fXqYcCdPSwq1JJs7YjjfvQTYSyl1bZxBWABeCJMVgGwEMBm8AY0T9Sn0q1MtLdEXHllLjK616Kl_EhAiwD7whI346eHH2h"
                    />
                    <span>Sarah Chen</span>
                  </div>
                </div>
              </button>

              {/* Recommended Card 3 */}
              <button
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
                onClick={() => handleViewCourse('tailwind-pro')}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    alt="Tailwind CSS Pro Course"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGJyy3ZcyzgnAY11LbiqsF7YIb486aDl1SbAsXn8-gWBHhBWL7lLiesxELlO6C24ocMRd8cR-wE6I56-Q6S29jjW5Urvm763kryGmfAqI5a9tUF1GBBJs2qXYBO3BRDk710_0xFjihxiZbGsCgRBEtfFdLjsQv2SvmQcM1zE62bYfxmCerhOqrNUsdDLEDCFmvf_pL5pTkDxDdFmWWJ1BGYyqQ9DKLTldD4BUVZKoAzuO3bsMh3lAyudau1cpYUB0LGxQvxvL5P9YI"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#6b61ff] text-[10px] font-bold uppercase mb-1">Design</p>
                  <h4 className="font-bold text-sm mb-2 line-clamp-1">Tailwind CSS Pro</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <img
                      alt="Marco Vieri"
                      className="w-5 h-5 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqUBy4xz_L1NZUrmU2PzGvw9oQfYN1SWmSWgjG8FjwMsjAv7-o0q_PQf2cSgnbpjYY8phPWLArdZnEwdMO4umBzUATrMkm8A57tTLvmbHFO20yhDRYpeyipq8GpomTaKwzEqhODvhHBd3chiQc0yDqjLDjLFSBtxYYvw98CvQnDq749DwSVLLGqbtlC_JiLXcoz0Azd64mSk3GLmZhI4ZNwHNFZoIJvRDX-Fkzhm1ZXE-naspEIfK5ogQZvD8YZ4dbuOx71_a7gFKY"
                    />
                    <span>Marco Vieri</span>
                  </div>
                </div>
              </button>

              {/* Recommended Card 4 */}
              <button
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
                onClick={() => handleViewCourse('graphql-apis')}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    alt="GraphQL APIs Course"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2PP1YIMpeYSbUmkAP_iUGX8TNfGAVTsLHF29cgPu7sTblq8LaaT4Kv7Iw4Q5fB95p7ZzuWNVIBbEvKbMzDa9bmmAdNuJ5aoZhvecR_Ony6Se78K6tlFILZlPlz5s1ki6l9Tdb7B0jMNmitCQ8OhzsqZCwNFVfQMpRwPAouhBlMbtLjYtg45-VmKXy2GwvHvmzfF-V03hEl1cbeCdnRTYxmaVGdUbkOAoh6jDh2kAbozyyX4QtcB57wL90KPlFlqLufSZ7XroQZLy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#6b61ff] text-[10px] font-bold uppercase mb-1">Backend</p>
                  <h4 className="font-bold text-sm mb-2 line-clamp-1">GraphQL APIs</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <img
                      alt="Elena Gomez"
                      className="w-5 h-5 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_HPjaE5yhBHU-zpCAzvbmRaJXeIyKswNIeKLyLMYofIW_m96hkqkeE0JJCdvCUTEdU7faNrP4bYMIpDUYaBA9FB7JKrZC_yLRBkSbSANGTaIjbkPvr1U9wCX1rga-J-aPWZfZKdmkqPW5CxtL6aJteso-rMJScxfq7hjp9VcpOiQegJLxI0tW80HnGRqcoQFZYg-M-bm6CDCfTc67G2wJUuu4NvMCVFjU5m7HOro-i_N8co7SQtFqg-7h7qShUgVO5FtV5wr2RaLG"
                    />
                    <span>Elena Gomez</span>
                  </div>
                </div>
              </button>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Activity Feed */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg mb-6 flex items-center justify-between">
              <span>Twoja aktywność</span>
              <span className="material-symbols-outlined text-slate-400">history</span>
            </h3>
            <div className="space-y-6 relative">
              {/* Timeline vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-700" />

              {/* Milestone 1 */}
              <div className="relative flex gap-4">
                <div className="z-10 w-6 h-6 rounded-full bg-[#6b61ff] flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xs">workspace_premium</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Odznaka: &quot;Szybki uczeń&quot;</p>
                  <p className="text-xs text-slate-500">Właśnie zdobyłeś odznakę za ukończenie 5 lekcji w 24h!</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Przed chwilą</p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex gap-4">
                <div className="z-10 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Ukończono: Lesson 4</p>
                  <p className="text-xs text-slate-500">Ukończyłeś lekcję &quot;Event Loop&quot; w kursie Node.js.</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">2 godziny temu</p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex gap-4">
                <div className="z-10 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xs">group</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Dołączono do grupy</p>
                  <p className="text-xs text-slate-500">Jesteś teraz członkiem &quot;Frontend Masters Community&quot;.</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Wczoraj</p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex gap-4">
                <div className="z-10 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xs">comment</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Nowa odpowiedź</p>
                  <p className="text-xs text-slate-500">Instruktor Alex Rivera odpowiedział na Twoje pytanie.</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">2 dni temu</p>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-8 py-3 text-xs font-bold text-slate-500 hover:text-[#6b61ff] transition-colors uppercase tracking-widest border border-dashed border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b61ff]"
              onClick={() => {
                // TODO: Navigate to activity page
                console.log('Show all activity');
              }}
            >
              Pokaż wszystko
            </button>
          </div>

          {/* Promotion / Ad Card */}
          <div className="bg-slate-900 rounded-lg p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[#6b61ff] font-bold text-xs uppercase mb-2">EduFlow Premium</p>
              <h4 className="font-bold text-lg mb-4 leading-tight">Zdobądź dostęp do wszystkich certyfikatów</h4>
              <button
                className="w-full bg-[#6b61ff] py-3 rounded-lg font-bold hover:bg-[#6b61ff]/90 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                onClick={handleUpgradeToPro}
              >
                Przejdź na Pro
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6b61ff]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
          </div>
        </aside>
      </main>

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
