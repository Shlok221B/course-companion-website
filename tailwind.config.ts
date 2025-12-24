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
          DEFAULT: "#1F2A3A",
          light: "#2a3550",
        },
        accent: {
          gold: "#E3A63B",
          teal: "#4FB6B2",
          blue: "#4FB6B2",
          amber: "#D97706",
        },
        panel: {
          dark: "#1F2A3A",
          darker: "#1a1f2a",
        },
        neutral: {
          light: "#F9FAFB",
          border: "#E5E7EB",
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

