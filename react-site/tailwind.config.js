/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-light": "#0a0a0a",
        "background-lighter": "#141414",
        "text-dark": "#ffffff",
        "text-light": "#cccccc",
        "text-lighter": "#999999",
        primary: "#ffd700",
        secondary: "#6b4de6",
        accent: "#4ecdc4",
        warning: "#ff6b6b",
        success: "#00b894",
        info: "#4a90e2",
        "primary-accent": "#ffa502",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        nav: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
