/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('./assets/bg1.jpg')",
        bg2: "url('./assets/bg2.png')"
      }
    }
  },
  plugins: []
}
