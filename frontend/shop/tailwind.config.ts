import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: "#E5E7EB",
        accent: "#44403C",
        primary: "#3B82F6",
        white: "#FAFAF9",
        black: "#0C0A09",
      },
      fontFamily: {
        inter: "Inter, ui-sans-serif, system-ui, sans-serif",
      },
    },
  },
  plugins: [],
};

export default config;
