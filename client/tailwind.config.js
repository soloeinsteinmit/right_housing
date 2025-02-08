// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(autocomplete|avatar|button|checkbox|date-picker|divider|image|input|select|skeleton|popover|ripple|spinner|form|listbox|scroll-shadow|calendar|date-input).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
