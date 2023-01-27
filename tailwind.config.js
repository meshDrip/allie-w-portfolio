/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "976px" },
    extend: {
      colors: {
        coolViolet: "hsl(242, 52%, 58%)",
        canvasPink: "hsl(336, 69%, 65%)",
        backdropSalmon: "hsl(348.1, 85.9%, 61%)",
      },
      backgroundImage: {
        mainBG: "url('../public/img/radiant-gradient.svg')",
      },
      fontFamily: {
        handwritten: ["Covered by Your Grace", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        128: "32rem",
        160: "40rem",
        180: "45rem",
        "80vh": "80vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
