import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				auto: "calc(4px + 2ex)",
			},
		},
	},
	plugins: [typography],
} satisfies Config;
