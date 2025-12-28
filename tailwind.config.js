/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e27', // Deep background
          800: '#111835', // Card background
          700: '#1c2545', // Border/Hover
          600: '#243055', // Scrollbar hover
        },
        cyan: {
          400: '#00d9ff', // Primary accent
          500: '#00b8d9',
          900: 'rgba(0, 217, 255, 0.1)', // Glow background
        },
        purple: {
          400: '#a78bfa', // Secondary accent
          500: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1c2545 1px, transparent 1px), linear-gradient(to bottom, #1c2545 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}