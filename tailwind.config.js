/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: ["poppins-light", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        poppinsMedium: ["poppins-medium", "sans-serif"],
        poppinsBold: ["poppins-bold", "sans-serif"],
        unica: ["unica-one, san-serif"],
      },
      colors: {
        dark: "#0F0F0F",
        black: "#000000",
        red: "#E50000",
        yellow: "#ffff00",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
