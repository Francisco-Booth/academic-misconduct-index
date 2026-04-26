import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: "#0F0F0F",
        paper: "#F7F4EE",
        amber: {
          DEFAULT: "#C8832A",
          light: "#E8A84A",
          dark: "#9A5E18",
        },
        slate: {
          950: "#0A0E1A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
