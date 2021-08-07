module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/**/*.jsx", "./components/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        adopt_perfect_pet_header: "url('/images/bg.png')",
        background: "url('../public/bg.png')",
        paw: "url('../public/paw.png')",
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
        secondary: "#5EAAA8",
        highlight: "#FFD400",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#056676",
        secondary: "#A3D2CA",
        highlight: "#FFD400",
      }),

      outline: {
        primary: ["2px solid #056676", "-2px"],
      },
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
