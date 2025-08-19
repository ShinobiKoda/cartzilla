/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--light-dark-blue) / <alpha-value>)",
        'gradient-start': '#ACCBEE', // Corresponds to the 0% stop
        'gradient-end': '#E7F0FD',   // Corresponds to the 100% stop
        'button-primary': 'rgb(var(--button) / <alpha-value>)',
        'dark-gradient-start': '#1B273A',
        'dark-gradient-end': '#1F2632',
        'button-danger': '#F03D3D'

      }
    },
  },
  plugins: [],
}
