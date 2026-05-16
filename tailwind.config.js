/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#05070f',
          800: '#0a0e1f',
          700: '#0f1530',
          600: '#141d42',
        },
        glow: {
          DEFAULT: '#4f8cff',
          soft: '#6ea8ff',
          deep: '#2563eb',
        },
        silver: '#c7ccd9',
      },
      fontFamily: {
        // Distinctive display + refined body pairing
        display: ['"Sora"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(79,140,255,0.55)',
        'glow-lg': '0 0 80px -15px rgba(79,140,255,0.6)',
        card: '0 20px 60px -20px rgba(0,0,0,0.7)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
