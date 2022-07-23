/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 50%": {
            transform: "translateY(0%)",
            "animation-timing-function": "ease-in",
          },
          "25%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "ease-out",
          },
        },
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(to right, #f97316, #e11d48)",
      },
      fontFamily: {
        mono: [
          "'Fira Code'",
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@tailwindcss/line-clamp")],
  // daisyUI config (optional)
  daisyui: {
    theme: ["cmyk", "night"],
    darkTheme: "night",
  },
  darkMode: ["class", '[data-theme="night"]'],
};
