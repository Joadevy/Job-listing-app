module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 29%, 50%)",
        },
        neutral: {
          "cyan-100": "hsl(180, 52%, 96%)", // (Background)
          "cyan-200": "hsl(180, 31%, 95%)", // (Filter tablets)
          "cyan-300": "hsl(180, 8%, 52%)",
          "cyan-400": "hsl(180, 14%, 20%)",
        },
      },
      fontFamily: {
        spartan: ["League Spartan", "sans"],
      },
    },
  },
  plugins: [],
};
