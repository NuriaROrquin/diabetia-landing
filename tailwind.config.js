/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "blue-primary": "#648ECA",
        "blue-secondary": "#5D89C8"
      },
      textColor: {
        "blue-primary": "#648ECA",
        "blue-secondary": "#5D89C8",
        "orange-primary": "#E6B663",
        "orange-secondary": "#dc961b",
      },
      minHeight: {
        "80": "80vh"
      },
      height: {
        "600": "600px",
        "400": "400px",
      }
    },
  },
  plugins: [],
};
