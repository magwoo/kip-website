import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, ui-sans-serif, system-ui, sans-serif",
      },
    },
  },
  plugins: [],
};

export default config;
