/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "content/**/*.md", "layouts/**/*.html"
  ],
  darkMode: "media",
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
          primary: "#5D35CA",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
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