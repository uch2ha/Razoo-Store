/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-bg': "url('./assets/homePageBg.jpg')",
        'home-page-bg-test': "url('./assets/bg-test.webp')"
      }
    }
  },
  plugins: []
}
