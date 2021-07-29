module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/**/*.jsx", "./components/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        background: "url('../public/bg.png')",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
        darken: "#E6BF00",
      }),
      textColor: {
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
      }),
    },
    fontFamily: {
      Quicksand: ["Quicksand"],
    },

  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
