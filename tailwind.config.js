module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#024138',
          hover: '#333333',
          nav: '#003366',
        },
      },
    },
    fontFamily: {
      prompt: ['Prompt'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
