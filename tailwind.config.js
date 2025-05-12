/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b2a58',       // Navy Blue
        'primary-dark': '#081d3f',
        secondary: '#f4c542',     // Gold
      },
    },
  },
  plugins: [],
}

