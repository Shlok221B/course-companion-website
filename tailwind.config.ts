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
        primary: {
          DEFAULT: "#1a1f3a",
          light: "#2a3550",
        },
        accent: {
          teal: "#00d4aa",
          blue: "#3b82f6",
          amber: "#f59e0b",
        },
        panel: {
          dark: "#0a0e1a",
          darker: "#1a1f3a",
        },
        neutral: {
          light: "#f8f9fa",
          border: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "IBM Plex Sans", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        body: ["16px", { lineHeight: "1.6" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px",
      },
    },
  },
  plugins: [],
};

export default config;

