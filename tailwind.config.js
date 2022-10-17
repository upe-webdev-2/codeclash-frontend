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
