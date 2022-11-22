/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "monospace", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        bodyBackGroundColor: "#0A192F",
        orange: "#FF8C32",
        textColor: "#8892B0",
        headerColor: "#CCD6F6",
        projectDetailsBackground: "#112240",
      },
    },
  },
  plugins: [],
};
