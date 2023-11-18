# React + Vite

library terinstall:
-tailwind
-axios
-react-redux

jika mau menambahkan warna custom baru, boxshadow baru dll
pergi ke file 'tailwind.config.js' tambah dengan format seperit berikut:

```
colors: {
        transparent: 'transparent',
        current: 'currentColor',
        color1:{
          DEFAULT: '#8386f5'
        },
      },
      boxShadow: {
          'custom': '0 20px 80px -20px #083e12',
        }
```
pada bagian extend, sehingga akan berbentuk seperti ini:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        color1:{
          DEFAULT: '#8386f5'
        }
      },
      boxShadow: {
          'custom': '0 20px 80px -20px #083e12',
        }
    },
  },
  plugins: [],
}


```