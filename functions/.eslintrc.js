module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: [
    'lib/**/*', 
    '.eslintrc.js' 
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "no-trailing-spaces": ["error"],
    "max-len": ["error", {"code": 120}],
  },
};
