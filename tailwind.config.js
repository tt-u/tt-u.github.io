/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "blue-black": "#000c14",
      "bright-blue": "rgb(var(--accent-rgb) / <alpha-value>)",
      "bright-gray": "#e2e8f0",
      "dark-gray": "#64748b",
      "blue-white": "hsl(220, 30%, 90%)",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto Slab", "sans"],
        mono: ["Neue Montreal", "monospace"],
      },
    },
  },
  plugins: [],
};
