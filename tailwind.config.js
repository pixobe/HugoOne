/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "content/**/*.md", "layouts/**/*.html"
  ],
  darkMode: "media",
  safelist: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        hugotech: {
          primary: "#002e47",
          secondary: "#93B4D8",
          accent: "#ff9d28",
          neutral: "#363a41",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#22BAA1",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
}