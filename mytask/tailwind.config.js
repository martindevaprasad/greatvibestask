/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      famcam:["Poppins","sans-serif"]
    },
    borderRadius:{
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '10px',
    },
    extend: {
      width:{
         '128': '32rem',
      },
      height:{
        '128':''
      },
      margin: {
        '32px': '32px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')

  ],
}

