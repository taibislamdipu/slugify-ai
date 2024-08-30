/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#00E5A4",
        pink: "#D835A7",

        // for dark theme
        primary: "#fff",
        secondary: "#d3d8e8",
        theme: "#0D1224",
      },
    },
  },
  plugins: [],
};
