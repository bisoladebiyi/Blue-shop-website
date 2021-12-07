module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {  
    extend: {
      colors: {
        lightBlue: '#D3E0EA',
        skyBlue: '#A2D2FF',
        darkBlue: '#1687A7',
        darker: '#12708a',
        white: '#fff',
        black: '#000'
      },
      fontSize: {
        large: '1.2rem'
      },
      screens: {
        'mobile': '500px',
        'bigger': '1030px',
        'med': '750px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
