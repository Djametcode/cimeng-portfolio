/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#ffffff",
          dark: "#0a0a0a",
        },
        surface: {
          DEFAULT: "#f8f9fa",
          dark: "#111111",
        },
        border: {
          DEFAULT: "#e5e7eb",
          dark: "#222222",
        },
        ink: {
          DEFAULT: "#111827",
          dark: "#e5e5e5",
        },
        muted: {
          DEFAULT: "#6b7280",
          dark: "#888888",
        },
        accent: {
          DEFAULT: "#2563eb",
          dark: "#60a5fa",
        },
        accent2: {
          DEFAULT: "#7c3aed",
          dark: "#a78bfa",
        },
        accent3: {
          DEFAULT: "#059669",
          dark: "#34d399",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
