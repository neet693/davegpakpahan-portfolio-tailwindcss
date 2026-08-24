/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        1320: "1320px",
      },
    },
    extend: {
      colors: {
        // existing brand tokens — kept as-is, still used across the site
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        // new tokens for the record/registry redesign
        paper: "#F4F6F5",
        muted: "#5B6B74",
        line: "#DADFE0",
        signal: "#2F7D6B",
        flag: "#C98A2C",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
