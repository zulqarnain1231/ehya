/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "325px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        brand: {
          main: "#1565D8",
        },
        white: {
          main: "#FFFFFF",
          off: "#f1f2f4",
          cool: "#929299",
        },
        black: {
          main: "#000000",
          secondary: "#5A7184",
          off: "#0D2436",
        },
        gray: {
          main: "#EFEFEF",
          cool: "#e4e6eb",
          lightGray: "#f8f8f8",
        },
        red: {
          main: "#FF0000",
          secondary: "#FC5A5A",
        },
      },
    },
  },
  plugins: [],
};
