/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        latin: ['Inter', 'sans-serif'],
      },
      colors: {
        // Premium Warm-Organic Palette
        'forest': '#468432',
        'leaf': '#9AD872',
        'cream': '#FFEF91',
        'ember': '#FFA02E',
        'deep-forest': '#2D5E1A',
        'light-leaf': '#C8F0A8',
        'pale-cream': '#FFF8DC',
        'soft-ember': '#FFB85C',
        'warm-white': '#FDFBF7',
        'charcoal': '#1C2421',
        'muted-grey': '#4A534E',
        'warm-grey': '#6B726B',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 8px 25px -8px rgba(70, 132, 50, 0.08)',
        'card-hover': '0 16px 35px -12px rgba(70, 132, 50, 0.15)',
        'premium-glow': '0 8px 25px rgba(70, 132, 50, 0.12)',
        'warm-glow': '0 8px 25px rgba(255, 160, 46, 0.15)',
        'apple': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 8px 40px rgba(0, 0, 0, 0.06)',
        'apple-xl': '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        "pulse-warm": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 160, 46, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255, 160, 46, 0)" }
        },
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-warm": "pulse-warm 2s ease-in-out infinite",
        "gradient-rotate": "gradient-rotate 4s ease infinite",
      },
      backgroundSize: {
        '200%': '200%',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}