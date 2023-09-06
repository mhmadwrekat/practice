/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      WHITE: "#FFFBF5",
      GRAY: "#F7EFE5",
      COLDPURPLE: "#C3ACD0",
      HOTPURPLE: "#674188",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Robot: ["robot"],
        Acme: ["acme"],
      },
    },
  },
  plugins: [],
};

// 1 #FFFBF5
// 2 #F7EFE5
// 3 #C3ACD0
// 4 #674188
