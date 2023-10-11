import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono Variable", "JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme("borderRadius[2xl]"),
            },
            pre: {
              borderRadius: theme("borderRadius[2xl]"),
            },
          },
        },
      }),
    },
  },
  plugins: [animate, typography],
};

export default config;
