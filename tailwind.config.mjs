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
        "card-most-popular": "url('/public/pattern.svg')",
        "text-gradient":
          "linear-gradient(90deg, #7CACFF 0%, #5280D1 36%, #88B3FD 66%)",
      },
      animation: {
        spotlight: "spotlight 2s ease 0.25s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
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
        ".btn-active": {
          "@apply w-[300px] transition-all duration-200 px-10 py-2 border border-[#FFFFFF]/40 text-[#FFFFFF] text-lg font-medium bg-gradient-to-b from-[#0A308B] to-[#1E6EFB] rounded-lg":
            {},
        },
        ".btn-inactive": {
          "@apply w-[300px] hover:scale-105 transition-all duration-200 px-10 py-2 border border-[#FFFFFF]/40 text-[#FFFFFF] text-lg font-medium bg-transparent rounded-lg":
            {},
        },
        ".btn": {
          "@apply w-full text-center hover:scale-105 transition-all duration-200 py-2 bg-gradient-to-b from-[#0A308B] to-[#1E6EFB] border border-[#FFFFFF]/80 text-[#FFFFFF] rounded-lg":
            {},
        },
        ".btn-ghost": {
          "@apply w-full text-center hover:scale-105 transition-all duration-200 py-2 border border-[#FFFFFF]/80 text-[#FFFFFF] bg-transparent rounded-lg":
            {},
        },
        ".card": {
          "@apply h-fit min-w-[350px] border border-[#E7EBFF] text-[#FFFFFF] rounded-2xl p-8 bg-gradient-to-t from-[#031953] to-[#1770F7] animate-fade-up animate-once animate-ease-linear":
            {},
        },
        ".card-most-popular": {
          "@apply border border-[#E7EBFF] text-[#FFFFFF] rounded-2xl p-8 bg-card-most-popular bg-cover bg-[#A3D7FD] animate-fade-down animate-once animate-ease-linear":
            {},
        },
      });
      addUtilities({});
    }),
    require("tailwindcss-animated"),
  ],
};
