import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#4ECDC4',
        accent: '#FF6B9D',
        neutral: {
          900: '#2D3748',
          700: '#4A5568',
          500: '#A0AEC0',
          300: '#CBD5E0',
          100: '#EDF2F7',
        },
        status: {
          success: '#48BB78',
          warning: '#ECC94B',
          error: '#F56565',
          info: '#4299E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      spacing: {
        'xs': '0.25rem',  // 4px
        'sm': '0.5rem',   // 8px
        'md': '1rem',     // 16px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
      },
      borderRadius: {
        'sm': '0.375rem',  // 6px
        'md': '0.75rem',   // 12px
        'lg': '1rem',      // 16px
        'xl': '1.5rem',    // 24px
      },
      boxShadow: {
        'hover': '0 2px 8px rgba(108, 99, 255, 0.1)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'modal': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'floating': '0 12px 48px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
export default config
