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
        brand: {
          primary: "#122631",
          secondary: "#266573",
          accent: "#6BB0BF",
          card: "#6EBCBF",
          bg: "#EEF4F3",
          border: "#CAD7D0",
          dark: "#122631",
          teal: "#266573",
          cyan: "#6BB0BF",
          soft: "#EEF4F3",
          sage: "#CAD7D0",
        },
        navy: {
          DEFAULT: "#06366F",
          50: "#EEF5FC",
          100: "#DCE9F9",
          200: "#BBD5F3",
          300: "#91BAEB",
          400: "#5D9CE2",
          500: "#0D6EFD",
          600: "#06366F",
          700: "#052C5C",
          800: "#042247",
          900: "#031730",
          950: "#020D1C",
        },
        blue: {
          accent: "#0D6EFD",
          hover: "#0B5ED7",
          glow: "#38BDF8",
        },
        cyan: {
          accent: "#1EA7FF",
        },
        ink: {
          DEFAULT: "#10233F",
          light: "#253B5A",
          dark: "#081324",
        },
        muted: {
          DEFAULT: "#62748A",
          light: "#8497AD",
          dark: "#475569",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F4F8FC",
          subtle: "#EBF2F9",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.85)",
          glassDark: "rgba(6, 54, 111, 0.9)",
        },
        border: {
          subtle: "#E2EBF5",
          DEFAULT: "#DFE8F2",
          dark: "#CBD5E1",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(6, 54, 111, 0.08)",
        card: "0 16px 45px rgba(18, 54, 91, 0.07)",
        cardHover: "0 24px 60px -12px rgba(6, 54, 111, 0.16)",
        glow: "0 0 25px rgba(30, 167, 255, 0.35)",
        nav: "0 16px 40px -14px rgba(0, 8, 27, 0.12), 0 2px 8px rgba(0, 8, 27, 0.04)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #F7FBFF 0%, #FFFFFF 48%, #EAF5FF 100%)',
        'navy-gradient': 'linear-gradient(135deg, #06366F 0%, #082347 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0D6EFD 0%, #1EA7FF 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
