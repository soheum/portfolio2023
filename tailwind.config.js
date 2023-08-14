/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    textColor: {
             'grey': '#798597',
             'secondary': '#ffed4a',
             'danger': '#e3342f',
             'darkblue': '#0E204F',
           }
    // extend: {},
  },
  plugins: [],
}

