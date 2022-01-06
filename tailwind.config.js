module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "520px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
