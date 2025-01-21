// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|image|input|popover|ripple|spinner|form).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
