/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        primary: "#0F1021",
        secondary: "#6cffed",
        tertiary: "#6b44d9",
        quaternary: "#1D1E3F",
        // insert colors for regular mode
        dark: {
          // insert colors for dark mode
        }
        // if we have more themes then we can have more colors
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      gilroy: ["sans-serif"], // TODO: get gilroy font
      jetBrains: ["JetBrains Mono", "sans-serif"]

    }
  },
  plugins: []
};
