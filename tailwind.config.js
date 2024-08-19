/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myColor:"#176B87",
        blackColor:"#222222",
      },
      fontFamily:{
        "koulen": ["Koulen", "sans-serif"],
        "kumbh" : ["Koulen", "sans-serif"]
      },
    },
  },
  plugins: [],
}

