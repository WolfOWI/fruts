/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Quicksand"],
        body: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
