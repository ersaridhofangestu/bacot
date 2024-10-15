/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFBF00",
        black: "#212121",
        white: "#FFFDF7",
        vanila: "#FFF2CC",
      },
    },
  },
  plugins: [],
};
