/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{mdx,astro,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: [
      {
        sngrstudio: {
          primary: '#417AFF',
          secondary: '#B72FFF',
          accent: '#FF00FF',
          neutral: '#0A0612',
          'base-100': '#F5F6F3',
          info: '#0a0512',
          success: '#489e7e',
          warning: '#c68e46',
          error: '#f44336',
        },
      },
      {
        madanians: {
          primary: '#3388cb',
          secondary: '#3cb7cc',
          accent: '#fbb82c',
          neutral: '#2f343c',
          'base-100': '#ffffff',
          info: '#3187ca',
          success: '#44a375',
          warning: '#c1933d',
          error: '#f44336',
        },
      },
      {
        'jingga-keadilan': {
          primary: '#a03200',
          secondary: '#ff9a6b',
          accent: '#FF5000',
          neutral: '#19201f',
          'base-100': '#faf9f8',
          info: '#241c25',
          success: '#7d9340',
          warning: '#fa8208',
          error: '#f44336',
        },
      },
    ],
  },
}
