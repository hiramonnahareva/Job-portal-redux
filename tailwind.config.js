/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9b2e58",
        secondary: "#efa0aa",
        footer: "#250c16",
        footerb: "#1e0a12",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};