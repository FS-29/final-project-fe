/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
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
        color6:{
          DEFAULT: '#E6F7FF'
        },
        color7:{
          DEFAULT: '#FAFAFA'
        },
        color8:{
          DEFAULT: '#BAE7FF'
        },
        color9:{
          DEFAULT: '#D6E4FF'
        }
      },
      width:{
        '640':'48rem',
        '860':'54rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode:'false'
}

