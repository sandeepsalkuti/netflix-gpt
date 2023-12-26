/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#A3A3A3",
        "text-color": "#8c8c8c",
        "signin-bg": "#000000bf",
      },
    },
  },
  plugins: [],
};
