/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#91CEE2",
        100: "#a7d7e7",
        200: "#143C4A",
      },
      secondary: {
        DEFAULT: "#1D2753",
        100: "#e2e8f0",
        200: "#F3FAFC"
      },
      accent: {
        DEFAULT: "#B93622"
      },
      complimentary: {
        DEFAULT: "#e2ac91"
      },
      white: "#ffffff",
      orange: {
        DEFAULT: "#fb923c"
      }
    },
    fontFamily: {
      "logo": ["Logo Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
      "body": ["Body Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
    },
    extend: {
      gridTemplateColumns: {
        footer: "1fr auto"
      }
    },
  },
  plugins: [],
}
