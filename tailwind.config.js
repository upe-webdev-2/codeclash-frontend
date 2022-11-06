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
        primary: "#0F1021",
        secondary: "#6cffed",
        tertiary: "#6b44d9",
        quaternary: "#1D1E3F"
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      backgroundSize: {
        "size-200": "200% 200%"
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
