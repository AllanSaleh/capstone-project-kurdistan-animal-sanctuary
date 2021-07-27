module.exports = {
  purge: { enabled: true, content: ["./pages/**/*.jsx"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
        darken: "#E6BF00",
      }),
      textColor: {
        primary: "#056676",
        secondary: "#5EAAA8",
        highlight: "#FFD400",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
      }),
      backgroundImage: {
        adopt_perfect_pet_header: "url('/images/bg.png')",
      },
      outline: {
        primary: ["2px solid #056676", "-2px"],
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
