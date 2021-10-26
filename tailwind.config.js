module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      colors: {
        "bg-pf": "#101010",
        "fg-pf": "#FFFFFF",
        "cl-contact": "#007bff",
        "cl-linkedin": "#0976b4",
        "cl-github": "#55acee",
      },
    },
  },
  variants: {
    extend: {},
  },
};
