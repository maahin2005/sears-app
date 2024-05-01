/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        midNightBlue: "#003980",
        midiumBlue: "#0948bb",
      },
    },
  },
  plugins: [daisyui],
};
