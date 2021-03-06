/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-optimize",
  ],
  devOptions: {},
  buildOptions: {},
  alias: {
    "@": "./src",
    "@components": "./src/components",
    "@js": "./src/assets/js",
  },
};
