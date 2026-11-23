/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
    extend: {
      colors: {
        brand: {
          orange: "#E43F1A",
          "orange-peak": "#DD2D26",
          amber: "#C45B2B",
          glow: "rgba(228, 63, 26, 0.25)",
        },
        obsidian: {
          DEFAULT: "#0D0D0D",
          light: "#141414",
          card: "#181818",
          border: "#262626",
        },
        chalk: {
          DEFAULT: "#F7F7F7",
          darker: "#EFEFEF",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
