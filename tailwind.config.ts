import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#052B12",
          light: "#084A16",
        },
        brand: {
          DEFAULT: "#136217",
          dark: "#0E4A11",
          rich: "#367617",
        },
        lime: {
          DEFAULT: "#6AAB1A",
          leaf: "#8CC322",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#D6B65A",
          soft: "#EBDCA8",
          deep: "#9A7518",
        },
        tint: {
          DEFAULT: "#EDF3E4",
          soft: "#F5F9F0",
        },
        sand: "#FFFFFF",
        ink: "#111812",
        muted: "#5B665E",
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        latin: ["var(--font-manrope)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1280px",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(5,43,18,0.04), 0 12px 32px -12px rgba(5,43,18,0.18)",
        lift: "0 2px 4px rgba(5,43,18,0.05), 0 24px 48px -16px rgba(5,43,18,0.22)",
        subtle: "0 1px 3px rgba(5,43,18,0.08)",
        gold: "0 12px 30px -10px rgba(201,162,39,0.4)",
      },
      borderRadius: {
        "4xl": "2rem 2rem 2rem 0.625rem",
        "3xl": "1.5rem 1.5rem 1.5rem 0.5rem",
        "2xl": "1.125rem 1.125rem 1.125rem 0.375rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.9s ease both",
        "slow-zoom": "slowZoom 12s ease-out both",
        "leaf-float": "leafFloat 2.2s ease-in-out infinite",
        "leaf-spin": "leafSpin 6s linear infinite",
        "bar-indeterminate": "barIndeterminate 1.4s ease-in-out infinite",
        "hero-zoom": "heroZoom 7s ease-out forwards",
        "hero-progress": "heroProgress 6.5s linear forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        leafFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        leafSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        barIndeterminate: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        heroZoom: {
          "0%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1.16)" },
        },
        heroProgress: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
