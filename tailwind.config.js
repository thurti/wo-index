/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./styles.css"],
  theme: {
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
    },
    extend: {
      screens: {
        "max-sm": { max: "639px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
