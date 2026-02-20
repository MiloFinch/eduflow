'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type PasswordStrength = 'weak' | 'medium' | 'strong' | 'very-strong';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('weak');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Calculate password strength
  useEffect(() => {
    if (password.length === 0) {
      setPasswordStrength('weak');
      return;
    }
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 1) setPasswordStrength('weak');
    else if (strength === 2) setPasswordStrength('medium');
    else if (strength === 3) setPasswordStrength('strong');
    else setPasswordStrength('very-strong');
  }, [password]);

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 1;
      case 'medium': return 2;
      case 'strong': return 3;
      case 'very-strong': return 4;
    }
  };

  const getStrengthLabel = () => {
    switch (passwordStrength) {
      case 'weak': return 'Słabe';
      case 'medium': return 'Średnie';
      case 'strong': return 'Silne';
      case 'very-strong': return 'Bardzo silne';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Musisz zaakceptować regulamin i politykę prywatności');
      return;
    }
    // TODO: Implement registration logic
    console.log('Register submitted');
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`Register with ${provider}`);
  };

  const strengthBars = getStrengthColor();

  return (
    <div className="font-display bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6961ff]/20 rounded-full blur-3xl" />

      <div className="w-full max-w-[480px] animate-fade-in relative z-10">
        {/* Glassmorphic Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#6961ff] text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h1 className="text-slate-900 text-2xl font-bold tracking-tight">EduFlow</h1>
          </div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-slate-900 text-3xl font-bold leading-tight">Utwórz konto</h2>
            <p className="text-slate-600 mt-2 text-sm">Dołącz do społeczności uczących się</p>
          </div>

          {/* Form */}
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-1.5 ml-1" htmlFor="name">
                Imię i nazwisko
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#6961ff] focus:border-[#6961ff] transition-all outline-none text-slate-900 placeholder:text-slate-400"
                  id="name"
                  placeholder="Jan Kowalski"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-1.5 ml-1" htmlFor="email">
                Adres e-mail
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#6961ff] focus:border-[#6961ff] transition-all outline-none text-slate-900 placeholder:text-slate-400"
                  id="email"
                  placeholder="nazwa@poczta.pl"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-1.5 ml-1" htmlFor="password">
                Hasło
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                <input
                  className="w-full pl-10 pr-10 py-3 bg-white/50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#6961ff] focus:border-[#6961ff] transition-all outline-none text-slate-900 placeholder:text-slate-400"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#6961ff] transition-colors focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                >
                  <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              {/* Password Strength Meter */}
              <div className="mt-2 px-1">
                <div className="flex gap-1 h-1.5 w-full">
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`flex-1 rounded-full transition-colors ${
                        bar <= strengthBars ? 'bg-[#6961ff]' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 mt-1 font-medium uppercase tracking-wider">
                  Hasło: {getStrengthLabel()}
                </p>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-1.5 ml-1" htmlFor="confirmPassword">
                Powtórz hasło
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock_reset</span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#6961ff] focus:border-[#6961ff] transition-all outline-none text-slate-900 placeholder:text-slate-400"
                  id="confirmPassword"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 py-2">
              <input
                className="mt-1 w-4 h-4 text-[#6961ff] bg-white/50 border-slate-300 rounded focus:ring-[#6961ff] cursor-pointer"
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label className="text-xs text-slate-600 leading-tight cursor-pointer" htmlFor="terms">
                Akceptuję{' '}
                <Link href="/terms" className="text-[#6961ff] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-0.5">
                  Regulamin
                </Link>{' '}
                i{' '}
                <Link href="/privacy" className="text-[#6961ff] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#6961ff] rounded px-0.5">
                  Politykę prywatności
                </Link>{' '}
                EduFlow (RODO).
              </label>
            </div>

            {/* Register Button */}
            <button
              className="w-full bg-[#6961ff] hover:bg-[#6961ff]/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-[#6961ff]/30 transition-all active:scale-[0.98] mt-2 focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:ring-offset-2"
              type="submit"
            >
              Utwórz konto
            </button>
          </form>

          {/* Divider */}
          <div className="relative w-full flex items-center py-6">
            <div className="flex-grow border-t border-slate-300" />
            <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">lub kontynuuj przez</span>
            <div className="flex-grow border-t border-slate-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 w-full">
            <button
              className="flex-1 flex items-center justify-center py-2.5 bg-white/50 border border-slate-300 rounded-lg hover:bg-white transition-all group focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
              onClick={() => handleSocialLogin('Google')}
              type="button"
              aria-label="Zarejestruj przez Google"
            >
              <img
                className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                alt="Google"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzB1qNRn8SA1XF4sPQVYgCXSIdPZdhJtzmia-jx9fapwgoJp6f1Tle78y2cE6wkh3m6O7TrYvVyaiAZdYga6nBo4STe0ndwF4L3QYPRGguUUQG5M1xT5_KwmSwCTYJeDDtXNnjmmGgvHnlVtkdbSv7IWbX3rSQxxOpMuFVjlLFTn1y-ef96-j8d-IRqIE8iuRqwzYJIFGjnAHyv7ueipPBmPwuuAWAOAgWCl4T4If8HFOOtLW4KXVzj0Uowd4MzyE6Cz4EcnPKtT0b"
              />
            </button>
            <button
              className="flex-1 flex items-center justify-center py-2.5 bg-white/50 border border-slate-300 rounded-lg hover:bg-white transition-all group focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
              onClick={() => handleSocialLogin('Facebook')}
              type="button"
              aria-label="Zarejestruj przez Facebook"
            >
              <span className="material-symbols-outlined text-[#1877F2] text-2xl">social_leaderboard</span>
            </button>
            <button
              className="flex-1 flex items-center justify-center py-2.5 bg-white/50 border border-slate-300 rounded-lg hover:bg-white transition-all group focus:outline-none focus:ring-2 focus:ring-[#6961ff]"
              onClick={() => handleSocialLogin('LinkedIn')}
              type="button"
              aria-label="Zarejestruj przez LinkedIn"
            >
              <span className="material-symbols-outlined text-[#0A66C2] text-2xl">work</span>
            </button>
          </div>

          {/* Footer Link */}
          <div className="mt-8 text-sm text-slate-600">
            Masz już konto?{' '}
            <Link href="/login" className="text-[#6961ff] font-bold hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-[#6961ff] focus:ring-offset-2 rounded px-1">
              Zaloguj się
            </Link>
          </div>
        </div>

        {/* Extra Footer Decoration */}
        <p className="text-white/60 text-xs text-center mt-6">
          © 2024 EduFlow Platforma E-learningowa. Wszystkie prawa zastrzeżone.
        </p>
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
