/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',  // this means dark mode will be activated using a class (we'll use 'dark')
  theme: {
    extend: {
      backgroundColor: {
        'cbeef3': '#CBEEF3',
        ...require('tailwindcss/colors').rose,
      },
    },
  },
  plugins: [],
}
