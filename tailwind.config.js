/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "375px",
      md: "767px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary : "#68d9ce",
        secondary: "#192c3b",
        hoverBTN: "#57b7ae",
        bgSection: "#e9e9e6",
        linkColor: "#98a0a7",
        textColor: "#5b6872",
        bgCard: "#162432"
      },
      fontFamily: {
        Questrial: "Questrial, sans-serif"
      },
    },
  },
  plugins: [],
};
