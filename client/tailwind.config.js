/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        deca: ['"Lexend Deca"', 'sans-serif'],
      },
      colors: {
        'theme-black': '#1c1d1c',
        'theme-light-black': '#292d32',
        'theme-light-blue': '#618ef6',
        'theme-ice-blue': '#e1eafd',
      },
      screens: {
        xxs: '320px',
        xs: '640px',
        sm: '768px',
        md: '1199px',
        lg: '1380px',
        xl: '1540px',
        xxl: '1940px',
      },
    },
  },
  plugins: [],
};
