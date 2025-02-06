// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|checkbox|date-picker|image|input|select|skeleton|popover|ripple|spinner|form|calendar|date-input|listbox|divider|scroll-shadow).js",
  ],
  theme: {
    extend: {
      // screens: {
      //   xs: { max: "480px" },
      // },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
