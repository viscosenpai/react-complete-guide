module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // "prettier/@typescript-eslint",
    "prettier/react",
  ],
  "env": {
    "browser": true,
    "jquery" : true
  },
  plugins: ["react"], //"@typescript-eslint"
  parserOptions: {
     sourceType: "module",
     ecmaVersion: 2015,
  },
  rules: {
    "react/no-this-in-sfc": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0
  },
}