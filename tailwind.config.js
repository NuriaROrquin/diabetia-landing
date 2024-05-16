/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#648ECA",
        "blue-secondary": "#5D89C8",
        "blue-focus": "#80a8e1",
        "orange-primary": "#E6B663",
        "orange-secondary": "#dc961b",
        "orange-focus": "#e89f23",
        "gray-primary": "#333",
        "gray-secondary": "#b1b1b1",
        "green-primary": "#4CAF50",
        "red-primary": "#BE0A1F"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "blue-primary": "#648ECA",
        "blue-secondary": "#5D89C8",
        "blue-focus": "#80a8e1",
        "orange-primary": "#E6B663",
        "orange-secondary": "#dc961b",
        "gray-primary": "#333",
        "gray-secondary": "#b1b1b1",
        "green-primary": "#4CAF50",
        "red-primary": "#BE0A1F"
      },
      textColor: {
        "blue-primary": "#648ECA",
        "blue-secondary": "#5D89C8",
        "blue-focus": "#80a8e1",
        "orange-primary": "#E6B663",
        "orange-secondary": "#dc961b",
        "gray-primary": "#333",
        "gray-secondary": "#b1b1b1",
        "green-primary": "#4CAF50",
        "red-primary": "#BE0A1F"
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
