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
        navBackGround: "#0a192fd9",
      },
      animation: {
        "scale-in-hor-right":
          "scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "scale-in-hor-right": {
          "0%": {
            transform: "scaleX(0)",
            "transform-origin": "100% 100%",
            opacity: "1",
          },

          "100%": {
            transform: "scaleX(1)",
            "transform-origin": "100% 100%",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};