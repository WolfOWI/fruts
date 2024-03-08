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
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        left_in: "left_in 2s ease-out",
        right_in: "right_in 2s ease-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        left_in: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        right_in: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
