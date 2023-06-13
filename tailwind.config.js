/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './test.html',
    './contact.html',
  './src/input.css',
  './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
      fontFamily: {
        'russo': ['"Lato"', 'sans-serif'],
        'russo2':['Work Sans', 'sans-serif']
      
      },
    },
  },
  plugins: [require("daisyui")],
  


}

