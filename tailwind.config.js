/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
'Orange': 'hsl(26, 100%, 55%)',
'Paleorange': 'hsl(25, 100%, 94%)',
'Verydark-blue': 'hsl(220, 13%, 13%)',
'Darkgrayish-blue': 'hsl(219, 9%, 45%)',
'Grayishblue': 'hsl(220, 14%, 75%)',
'Lightgrayish-blue': 'hsl(223, 64%, 98%)',
'White': 'hsl(0, 0%, 100%)',
'Black' : 'hsl(0, 0%, 0%)'
},
fontFamily:{
  'Kumbh-Sans': 'Kumbh Sans, sans-serif'
}
  },
  plugins: [],
}


