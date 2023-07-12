/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(128, 225, 247);',
        secondary: 'rgb(0, 51, 102);',
        happy: 'rgb(255, 165, 0);',
        cyan: 'rgb(0, 255, 255);',
        midnightBlue: 'rgb(247, 231, 206);',
        aegeanBlue: 'rgb(19, 111, 99);',
        deepPurple: 'rgb(128, 0, 128);',
        serenity: 'rgb(146, 168, 209);',
        earthyBrown: 'rgb(160, 82, 45);',
        twilightPurple: 'rgb(34, 14, 59);',
        skyBlue: 'rgb(135, 206, 235);',
        sunsetOrange: 'rgb(255, 111, 97);',
        lighhtLime: 'rgb(236 252 203);',
        lightGreen: 'rgb(220 252 231);',
        lightTeal: 'rgb(204 251 241);',
        lightIndigo: 'rgb(224 231 255);',
      },
      fontFamily: {
        'sigmar': ['Sigmar One', 'cursive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      transform: ['hover', 'focus'],  // Add hover and focus variants for transform
      ringWidth: ['hover', 'active'], // Add hover and active variants for ringWidth (for focus:ring)
      opacity: ['group-hover'], // Add group-hover variant for opacity
    },
  },
}
