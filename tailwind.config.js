/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['./*.html',
    './*.{js,jsx,ts,tsx,vue}',],
  theme: {
    backgroundImage :{
      'circle' : 'url(../img/Ellipse-2.png)'
    },

    extend: {},
  },
  plugins: [],
}
