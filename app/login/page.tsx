'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login submitted');
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6961ff]/20 rounded-full blur-3xl" />

      {/* Login Container */}
      <div className="glass-card w-full max-w-[480px] rounded-2xl shadow-2xl p-8 md:p-12 relative z-10 bg-white/70 backdrop-blur-xl border border-white/30">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#6961ff] p-3 rounded-xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">Zaloguj się</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-center">Witaj z powrotem w EduFlow! Kontynuuj swoją naukę.</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-white/50 border border-[#CBD5E0] rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:border-transparent transition-all"
                id="email"
                placeholder="twoj@email.com"
                type="email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold mb-2" htmlFor="password">
              Hasło
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
              <input
                className="w-full pl-12 pr-12 py-4 bg-white/50 border border-[#CBD5E0] rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:border-transparent transition-all"
                id="password"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#6961ff] transition-colors focus:outline-none"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
              >
                <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  className="sr-only peer"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <div className="w-5 h-5 bg-white/50 border border-[#CBD5E0] rounded peer-checked:bg-[#6961ff] peer-checked:border-[#6961ff] transition-all" />
                <span className="material-symbols-outlined absolute inset-0 text-white text-[16px] flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
                  check
                </span>
              </div>
              <span className="ml-2 text-slate-600 dark:text-slate-300 font-medium">Zapamiętaj mnie</span>
            </label>
            <Link href="/forgot-password" className="text-[#6961ff] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:ring-offset-2 rounded px-1">
              Zapomniałeś hasła?
            </Link>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-[#6961ff] text-white font-bold py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(105,97,255,0.4)] shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:ring-offset-2"
            type="submit"
          >
            Zaloguj się
          </button>
        </form>

        {/* Social Login Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300/50" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white/20 backdrop-blur-sm text-slate-500 font-medium uppercase tracking-wider rounded-full">
              lub
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button
            aria-label="Zaloguj przez Google"
            className="flex items-center justify-center p-3 bg-white/50 border border-[#CBD5E0] rounded-xl hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(105,97,255,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => handleSocialLogin('Google')}
            type="button"
          >
            {/* Google Icon - keeping original src for now */}
            <img
              alt="Google"
              className="w-6 h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-yB6LCUn_Wjlo4FbclgwwVq0S4HMriB3S5CcLmaQGMr5GhWJncZyo2y1OEWuIXrhOh3MIt25BJc-docYcBwjmv4BHh0SqMWnh4Mx-H41PBsgdvEkNl5BysFayyTszU5uiUXj4lOzi0G3nsZSpWu0X7l4Kxi7ltKh6QvgKif3MVHzX0eR-AR8sijI46SV7NORdy53HJ6VupszrcGgB5WzKeQhFi5lXg29jUs7ODBmPDyXkRsgme-0EjVC-J1446HyQ9j24_zSiVRd4"
            />
          </button>
          <button
            aria-label="Zaloguj przez Facebook"
            className="flex items-center justify-center p-3 bg-white/50 border border-[#CBD5E0] rounded-xl hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(105,97,255,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => handleSocialLogin('Facebook')}
            type="button"
          >
            <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            aria-label="Zaloguj przez LinkedIn"
            className="flex items-center justify-center p-3 bg-white/50 border border-[#CBD5E0] rounded-xl hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(105,97,255,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
            onClick={() => handleSocialLogin('LinkedIn')}
            type="button"
          >
            <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
        </div>

        {/* Footer Section */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Nie masz jeszcze konta?
            <Link href="/register" className="text-[#6961ff] font-bold hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:ring-offset-2 rounded px-1">
              Zarejestruj się
            </Link>
          </p>
        </div>
      </div>

      {/* Background Image for depth (visual only) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
      </div>

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
