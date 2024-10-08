/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blurr-bg": "#9d73ad",
        "btn-primary": "#4e007a",
        "primary-green": "#8DC63E",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
