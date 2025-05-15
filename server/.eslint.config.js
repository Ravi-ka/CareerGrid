export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    env: {
      browser: false,
      node: true,
      es2021: true,
    },
    plugins: {
      import: require("eslint-plugin-import"),
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
