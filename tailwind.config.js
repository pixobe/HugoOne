/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      light: "#e5e3e6",
      dark: "#414042",
      darker: "#1b191a",
      primary: "#d9593e",
      white: "#ffffff",
      gray: {
        800: "#1f2937",
        700: "#374151",
        400: "#9ca3af",
        300: "#d1d5db"
      }
    },
    extend: {},
  },
  plugins: [],
}
