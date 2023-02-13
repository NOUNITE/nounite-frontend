/* eslint-disable no-undef */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": "error",
    "quotes": "error",
    "camelcase": "error",
    "jsx-quotes": "error",
    "semi": "error",
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off"
  }
};
