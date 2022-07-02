/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      light: {
        DEFAULT: "#E7E3E6",
        100: '#DBD9DA',
      },
      dark: {
        DEFAULT: "#414042",
        100: "#1b191a",
        200: "#1a1819"
      },
      primary: {
        DEFAULT: "#d9593e",
        300: "#e48b78",
        800: "#c35038"
      },
      white: "#ffffff",
      gray: {
        900: "#111827",
        800: "#1f2937",
        700: "#374151",
        500: "#6b7280",
        400: "#9ca3af",
        300: "#d1d5db",
        200: "#e5e7eb",
        100: "#f3f4f6"
      },
      slate: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1"
      }
    },
    fontFamily: {
      "logo": ["Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
      "body": ["Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
    },
    extend: {
    },
  },
  plugins: [],
}
