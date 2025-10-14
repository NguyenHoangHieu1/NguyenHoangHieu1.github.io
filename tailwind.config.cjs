// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    variants: {
      animation: ["motion-safe"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%,-40%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-50%)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%,-50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-60%)",
          },
        },
      },
      animation: {
        appear: "fadeIn 2s ease-in-out forwards",
        disappear: "fadeOut 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}
