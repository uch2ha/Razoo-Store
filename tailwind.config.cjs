/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-bg': "url('./src/assets/homePageBg.jpg')"
      }
    }
  },
  plugins: []
}
