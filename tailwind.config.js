/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*'],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        darkCyanHover: 'hsl(158, 54%, 15%)',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        montse: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest2: '.25em',
      },
      fontSize: {
        '3xl': ['2rem', '32px'],
      },
    },
  },
  plugins: [],
}
