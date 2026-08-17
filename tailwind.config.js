/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FEF2F2",
        card: "#FFFFFF",
        primary: "#450A0A",
        muted: "#64748B",
        bgMuted: "#F0EDF1",
        border: "#FECACA",
        accent: "#DC2626",
        gold: "#A16207",
      },
      fontFamily: {
        heading: ["Calistoga", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "96px",
      },
      borderRadius: {
        none: "0px",
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-1.5px" }],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0, 0, 1)",
      },
      transitionDuration: {
        200: "200ms",
      },
    },
  },
  plugins: [],
};
