/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      xmd: "840px",
      lg: "1024px",
      xl: "1280px",
      _2k: "2000px"
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors : {
        textHover: "#0F0E0E",
        btnColor: "#0D4459",
        primary: "#36BEB0",
        paragraphColor: "#212121"
      }
    }
  },
  plugins: []
};
