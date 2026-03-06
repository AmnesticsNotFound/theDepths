// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    
  },
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {},
    plugins: [plugin(function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),],
  };