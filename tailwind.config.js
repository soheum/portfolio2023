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
             'lightblue': '#4B5A88',
             'darkblue': '#0E204F',
             'blue': '#1E5CFF',
           }
    // extend: {},
  },
  plugins: [],
}

