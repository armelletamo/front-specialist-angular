/** @type {import('tailwindcss').Config} */
module.exports = {
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

