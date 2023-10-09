/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baddhia-orange': '#fc5000',
        'B-writeup': "#FFD9C8"
      }
    },
  },
  plugins: [],
}
