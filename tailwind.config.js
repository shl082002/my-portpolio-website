/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto Slab", "serif"],
      },
      colors: {
        "nav-grey":
          "linear-gradient(180deg, #FFF 0%, #DFDFDF 29.17%, #000 99.98%, #EF0690 99.99%, rgba(255, 0, 138, 0.00) 100%);",
      },
      backgroundColor: {
        "sky-b": "#20d1f5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
