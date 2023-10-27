/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#1e40af",
      secondary: "grey",
      mediumgrey: "#64748b",
      litegrey: "#9ca3af",
      skyBlue: "#38bdf8",
    },
    extend: {},
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
