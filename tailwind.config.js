/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["content/**/*.md", "layouts/**/*.html"],
    theme: {
        fontFamily: {
            "logo": ["Logo Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
            "body": ["Body Font", "Helvetica Neue", "Helvetica, Arial", "Lucida Grande", "sans - serif"],
        },
        extend: {
            gridTemplateColumns: {
                footer: "1fr auto"
            },

        },
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
                    secondary: "#90b0d0",
                    accent: "#ff9d28",
                    neutral: "#0c182d",
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
