module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightBlue: '#D3E0EA',
      skyBlue: '#A2D2FF',
      darkBlue: '#1687A7',
      white: '#fff',
      black: '#000'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
