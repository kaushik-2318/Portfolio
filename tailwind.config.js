/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Vonique: ["var(--font-vonique)"],
      Decomart: ["var(--font-Decomart)"],
      Varino: ["var(--font-Varino)"],
      Syne: ["var(--font-Syne)"],
      MonaSans: ["var(--font-MonaSansExpandedBold)"],
      Montserrat: ["var(--font-Montserrat)"],
      Lora: ["var(--font-Lora)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
