/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakarta: ['Sometype Mono', 'monospace']
      },
      colors:{
        color1:{
          DEFAULT: '#F8E9A1'
        },
        color2:{
          DEFAULT: '#F76C6C'
        },
        color3:{
          DEFAULT: '#A8D0E6'
        },
        color4:{
          DEFAULT: '#374785'
        },
        color5:{
          DEFAULT: '#24305E'
        },
      }
    },
  },
  plugins: [],
}

