import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2.5rem",
      },
      screens: {
        sm: "768px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans, sans-serif)"],
      },
    },
  },
  plugins: [typography],
};
export default config;
