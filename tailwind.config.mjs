const defaultTheme = require("tailwindcss/defaultTheme");
import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #7CACFF 0%, #5280D1 36%, #88B3FD 66%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".link": {
          "@apply bg-gradient-to-b from-[#052B90] to-[#031953]": {},
        },
        ".btn": {
          "@apply border border-[#FFFFFF]/40 text-[#FFFFFF] text-lg font-bold bg-gradient-to-b from-[#0A308B] to-[#1E6EFB] w-[275px] h-[45px] rounded-lg":
            {},
        },
        ".btn-ghost": {
          "@apply border border-[#FFFFFF]/40 text-[#FFFFFF] text-lg font-bold bg-transparent w-[275px] h-[45px] rounded-lg":
            {},
        },
        ".card": {
          "@apply border border-[#E7EBFF] text-[#FFFFFF] rounded-lg p-[30px] bg-gradient-to-t from-[#031953] to-[#1770F7]":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
