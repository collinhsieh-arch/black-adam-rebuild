/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-adam': {
          'dark': '#0a0a0a',
          'surface': '#1a1a1a',
          'border': '#2d2d2d',
          'gold': '#d4af37',
          'gold-light': '#e8c547',
          'gray': '#404040',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
      }
    },
  },
  plugins: [],
}
