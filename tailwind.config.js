/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(196 181 253);',
        secondary: 'rgb(15 23 42);',
        happy: 'rgb(249 115 22);'
      }
    },
  },
  plugins: [],
}
