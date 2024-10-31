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
             'darkgreen': '#80BE06',
             'darkyellow': '#D0A61C',
             'kan': '#EB7100',
             'hype': '#4475F0',
             'boe': '#35BCC0',
           },
    extend: {
      // padding: {
      //   'no-padding' : '0',
      // },
    },
  },
  plugins: [],
  container: {
    padding: '0rem',
  }
}

