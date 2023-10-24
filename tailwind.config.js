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
        "grey-border": "#E4E4E4;",
        "grey-100": "#E7F0FC",
        "grey-200": "#565656",
        "grey-300": "#757575",
        "box-grey": "#F1F7FF",
        "form-grey": "#F4F9FF",
        "input-grey": "#959595",
        "wallet-yelow": "#FFF7E3",
        "chart-green": "#DEFFEE",
        "code-pink": "#FFF2F8",
      },
      maxWidth: {
        large: "1400px",
      },
    },
  },
  plugins: [],
}
