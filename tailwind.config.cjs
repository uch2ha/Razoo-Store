/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mainPageBg: "url('./assets/mainPageBg.png')",
        bg3: "url('./assets/aboutPageImg.jpg)"
      }
    },
    colors: {
      bgColor: '#e9e7e2',
      white: '#f9f9f9',
      black: '#070707'
    },
    fontFamily: {
      garamond: ['Cormorant Garamond', 'serif'],
      manrope: ['Manrope', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sulfates: ['SULFATES', 'sans-serif']
    }
  },
  plugins: []
}
