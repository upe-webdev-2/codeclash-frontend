/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F1031",
        secondary: "#1D1E3F"
      }
    },
    fontFamily: {
      gilroy: ["sans-serif"], // TODO: get gilroy font
      jetBrains: ["JetBrains Mono", "sans-serif"]
    }
  },
  plugins: []
};
