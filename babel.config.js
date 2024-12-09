module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // For modern JS
    "@babel/preset-react", // For JSX
  ],
};
