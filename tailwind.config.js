/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Mono"', 'monospace'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        main: {
          DEFAULT: '#155DFC',
        },
      },
    },
  },
  plugins: [],
};
