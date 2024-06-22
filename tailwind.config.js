/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'l100': 100,
        'l200': 200,
        'l300': 300,
        'l400': 400,
        'l700': 700,
        'l500': 600,
        'l600': 600,
        'l800': 800,
        'l900': 900,
      },
      lineHeight: {
        '28': '28px'
      }
    }
  },
  plugins: [],
}
