/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'abril': ['Abril Fatface', 'serif'],
        'jost' : ['Jost', 'sans-serif'],
        'syne' : ['Syne', 'sans-serif'],
        'playfair' : ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

