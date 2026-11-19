import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% Storm Grey — derived from Brelox brand mark (#6F7D84)
        storm: {
          50: "#F3F5F6",
          100: "#E5E9EC",
          200: "#D2D9DE",
          300: "#B4C0C7",
          400: "#8C9BA3",
          500: "#6F7D84",
          600: "#56636A",
          700: "#3F4A50",
          800: "#2B3338",
        },
        // 30% Matte Black — derived from Brelox brand mark (#202020)
        matte: {
          950: "#121315",
          900: "#1A1B1E",
          800: "#202020",
          700: "#2C2E32",
          600: "#3A3D42",
        },
        // 10% Safety Orange — derived from Brelox brand mark (#FF7014)
        safety: {
          50: "#FFF4EC",
          100: "#FFE5D2",
          400: "#FF8A3D",
          500: "#FF7014",
          600: "#E55D06",
          700: "#C24C04",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "storm-grid":
          "linear-gradient(to right, rgba(111, 125, 132, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(111, 125, 132, 0.14) 1px, transparent 1px)",
        "matte-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
