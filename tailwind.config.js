/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: {
          DEFAULT: "#121212",
          subtle: "#161616",
          elevated: "#1c1c1c",
        },
        border: {
          DEFAULT: "#222222",
          muted: "#1a1a1a",
          highlight: "#333333",
        },
        accent: {
          DEFAULT: "#e8ff6b",
          hover: "#d5eb56",
          dim: "rgba(232, 255, 107, 0.12)",
          border: "rgba(232, 255, 107, 0.25)",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
