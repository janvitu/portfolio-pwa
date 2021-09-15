const colors = require("tailwindcss/colors");
const tailwindDefaults = require("tailwindcss/defaultTheme")
const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.svelte", "./public/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      ...tailwindDefaults.colors,
      main: "#1a1c33",
      maindark: "#252525",
      complement: "#f9dd57",
      second: "#d80032",
      darkgray: "#191919",
      creme: "#bbb",
    },
    zIndex: {
      ...tailwindDefaults.zIndex,
      /* custom negative z */
      "-10": "-10",
      "-1": "-1",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
      "0-auto": "0 0 auto",
    },
    /* flex-basis as a plugin */
    flexBasis: {
      320: "320px",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      /* Custom */
      "320px": "320px",
    },
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
      none: "none",
      /* Custom */
      auto: "repeat(auto-fit,minmax(320px,1fr))",
    },
    extend: {
      animation: {
        pop: "pop 150ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {
      rotate: ["active", "group-hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const flexBasis = _.map(theme("flexBasis"), (value, key) => {
        return {
          [`.${e(`flex-basis-${key}`)}`]: {
            flexBasis: value,
          },
        };
      });
      addUtilities(flexBasis);
    }),
  ],
};
