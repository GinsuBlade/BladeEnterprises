import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blade: {
          black: "#0A0A0A",
          charcoal: "#1C1C1C",
          graphite: "#2E2E2E",
          steel: "#4A4A4A",
          silver: "#8C8C8C",
          mist: "#C8C8C8",
          white: "#F4F4F4",
          accent: "#B8A88A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;
