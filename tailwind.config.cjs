/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          paler: '#FFCC21',
          main: '#FF963C',
          darker: '#EA6C00',
        },
        secondary: {
          main: '#8FE9D0',
        },
        text: {
          main: '#414141',
        },
        line: {
          main: '#777777',
        },
        background: {
          darkest: '#2E2E2E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
