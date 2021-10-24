module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
  plugins: [],
};
