/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'france': "url('/assets/img.freance.svg')",
      }
    },
  },
  plugins: [],
}

