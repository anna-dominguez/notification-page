/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#0A327B",
      red: "#F65552",
      veryDarkGreyBlue: "#1C202B",
      darkGreyBlue: "#5E6778",
      greyBlue: "#939CAD",
      lightGreyBlue: "#E5EFFA",
      veryLightGreyBlue: "#DDE7EE",
      snow: "#F7FAFD",
      white: "#FFFFFF",
    },
    fontSize: {
      header: "24px",
      headerS: "20px",
      body: "16px",
      bodyS: "14px",
    },
    extend: {
      fontFamily: {
        sans: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
}
