/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      screens: {
        "smallLaptop": "1024px",
        "bigLaptop": "1280px"
      }
    },
  },
  plugins: [],
}