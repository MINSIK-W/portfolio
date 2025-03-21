/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '',
        foreground: 'rgb(255, 215, 213)',
        test: 'rgb(255, 215, 213)',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"]
}