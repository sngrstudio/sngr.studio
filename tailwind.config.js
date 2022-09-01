/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography', require('@tailwindcss/aspect-ratio')),
  ],
  daisyui: {
    themes: ['cmyk'],
  },
}
