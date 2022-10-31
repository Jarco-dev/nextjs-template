module.exports = {
  extends: ["./node_modules/gts/", "plugin:@next/next/recommended", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "prettier/prettier": ["error", { endOfLine: "lf" }]
  }
};
