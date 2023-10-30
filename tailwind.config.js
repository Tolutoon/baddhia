/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'baddhia-orange': '#fc5000',
        'B-writeup': '#FFD9C8',
      },
      height: {
        'img-h':"500px",
        'h-max': "500px"
      },
    },
    keyframes: {
      "slide-in": {
        "0%": {
          "-webkit-transform": "translateX(120%)",
          transform: "translateX(120%)",
        },
        "100%": {
          "-webkit-transform": "translateX(0%)",
          transform: "translateX(0%)",
        },
      },
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-out",
    },
  },
  plugins: [require('flowbite/plugin')],
  
}
