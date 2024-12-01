import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f1f1",
        midcolor: "#f4e2e2",
        button: "#F98585",
        footer: "#faf5f5",
        heading: "#21243D",
        imgShad: "#e1d8d8",
      },
      fontSize: {
        '2.5xl': '26px',
      },
      boxShadow: {
        buttonShad: "0px 4px 4px 0px #a29e9e"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
