/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope'", "Inter", "system-ui", "sans-serif"],
        display: ["'Manrope'", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "vo-black": "#07070A",
        "vo-black-soft": "#12121A",
        "vo-white": "#FFFFFF",
        "vo-muted": "#828A99",
        "vo-blue": "#4DA8FF",
        "vo-blue-soft": "#B7DDFF",
        "vo-border": "#E8EBF3",
      },
      borderRadius: {
        '3xl': '2.25rem',
        '4xl': '2.75rem',
      },
      boxShadow: {
        card: "0px 30px 80px -45px rgba(77, 168, 255, 0.55)",
        glow: "0 0 0 8px rgba(183, 221, 255, 0.35)",
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
