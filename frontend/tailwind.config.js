const daisyUI = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#047857",
        "primary-light": "#6ee7b7",
        "secondary-dark": "#0369a1",
        "secondary-light": "#7dd3fc",
      },
    },
  },
  plugins: [daisyUI],
};
