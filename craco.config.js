const path = require("path");
const CracoLessPlugin = require("craco-less");
const CracoCSSModules = require("craco-css-modules");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }, { plugin: CracoCSSModules }],
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
