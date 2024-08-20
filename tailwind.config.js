/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noisy' : "url(https://grainy-gradients.vercel.app/noise.svg)",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'abril': ['Abril Fatface', 'serif'],
      }
    },
  },
  plugins: [],
}

