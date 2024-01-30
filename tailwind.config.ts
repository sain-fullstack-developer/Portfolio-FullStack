import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xxs: "220px",
			xs: "360px",
			sm: "660px",
			md: "900px",
			lg: "1024px",
		},
		extend: {
			backgroundColor: {
				primary: "#F0DBAF",
				secondary: "#557C55",
				alternate: "#B06161",
			},
		},
	},
	plugins: [],
};
export default config;
