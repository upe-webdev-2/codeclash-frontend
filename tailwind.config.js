/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/**.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // insert colors for regular mode
        dark: {
          // insert colors for dark mode
        },
        // if we have more themes then we can have more colors
      },
    },
  },
  plugins: [],
};
