/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "310px",
        xs: "500px",
        lgg: "1230px",
        blt: "930px",
        bll: "600px",
        exx: "1700px",
      },
    },
  },
  plugins: [],
};
