import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
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
        dark: {
          900: "#04090a",
          800: "#0A191D",
          700: "#1A262C",
          600: "#1F2226",
        },
        turquoise: {
          900: "#134E4A",
          800: "#115E59",
          700: "#0F766E",
          600: "#0D9488",
          500: "#14B8A6",
          400: "#2DD4BF",
          300: "#5EEAD4",
          200: "#99F6E4",
          100: "#CCFBF1",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 20px 5px rgba(20, 184, 166, 0.2)",
            "border-color": "rgba(20, 184, 166, 0.4)",
          },
          "50%": {
            "box-shadow": "0 0 25px 10px rgba(20, 184, 166, 0.4)",
            "border-color": "rgba(20, 184, 166, 0.6)",
          },
        },
        "scroll-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "scroll-up": "scroll-up 40s linear infinite",
        "scroll-down": "scroll-down 40s linear infinite",
        "horizontal-scroll": "horizontal-scroll 60s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "turquoise-glow":
          "linear-gradient(135deg, rgba(20, 184, 166, 0.4) 0%, rgba(45, 212, 191, 0.1) 100%)",
        "turquoise-black": "linear-gradient(135deg, #051519 0%, #14B8A6 100%)",
      },
      boxShadow: {
        "turquoise-glow-sm": "0 0 10px 1px rgba(20, 184, 166, 0.3)",
        "turquoise-glow": "0 0 20px 5px rgba(20, 184, 166, 0.2)",
        "turquoise-glow-lg": "0 0 30px 10px rgba(20, 184, 166, 0.2)",
        glow: "0 0 20px 5px rgba(20, 184, 166, 0.3), 0 0 25px 5px rgba(45, 212, 191, 0.3)",
      
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
