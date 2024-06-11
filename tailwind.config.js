/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "principal": ['"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Bright-Red-Ligth": "hsl(12, 98%, 95%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
        "Very-Dark-Blue": "hsl(228, 20%, 15%)",
        "Dark-Grayish-Blue": "hsl(228, 39%, 70%)"
      },
      backgroundImage: {
        "close-menu": "url('../images/icon-close.svg')",
        "open-menu": "url('../images/icon-hamburger.svg')"
      }
    },
  },
  plugins: [],
}

