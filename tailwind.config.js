/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        peach: "#FFD8B1",
        blueAngel: "#B7CEEC",
        blackBlue: "#040720",
        nightBlue: "#151B54",
        roseQuartz: "#f0e1de",
        ivory: "#ebf5f7",
        midnightBlue: "#0C4160",
        darkBlue: "#071330",
        mistyBlue: "#C3CEDA",
        blueGray: "#738FA7",
        jetBlack: "#29000A",
        carafe: "#74584D",
        tan: "#B48B78",
        taupe: "#E2DAD4",
        cream: "#F0E1CA",
        khaki: "#A8907D",
        deepTeal: "#1B4B43",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
