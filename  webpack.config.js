const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
};
