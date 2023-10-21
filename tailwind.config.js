/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        main: ["Allerta", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem",
        base: ["1rem", "1.6rem"],
        lg: "1.25rem",
        xl: "2.5rem",
      },
      colors: {
        blue: "#2639ED",
        "grey-100": "#E7F0FC",
        "grey-200": "#565656",
        "grey-300": "#757575",
      },
      maxWidth: {
        large: "1400px",
      },
    },
  },
  plugins: [],
}
