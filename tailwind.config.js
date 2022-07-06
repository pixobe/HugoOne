/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#91CEE2",
        100: "#ADDAE9",
        200: "#143C4A"
      },
      accent: {
        DEFAULT: "#B93622"
      },
      complimentary: {
        DEFAULT: "#e2ac91"
      },
      white: "#ffffff",
      font: {
        DEFAULT: "#1D2753",
        100: "#F2F2F2",
        200: "#F3FAFC"
      }
    },
    fontFamily: {
      "logo": ["Logo Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
      "body": ["Body Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
    },
    extend: {
    },
  },
  plugins: [],
}
