module.exports = {
  content: ["./src/**/*.{htm,tsx,js}"],
  theme: {
    fontFamily: {
      'body': ['"Open Sans"'],
      'display': ['"Open Sans"']
    },
    screens: {
      'min': '510px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        min: '2rem',
        sm: '3rem',
        md: '3rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '7rem'
      }
    }
  },
  plugins: [],
}
