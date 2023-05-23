/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#050816",
          gradient: "linear-gradient(90deg, rgba(0,0,100,1) 0%, rgba(0,100,100,1) 50%, rgba(100,0,100,1) 100%)"
        },
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.png')",
      },
    },
  },
  plugins: [],
};