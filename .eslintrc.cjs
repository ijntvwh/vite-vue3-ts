module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    '.eslintrc-auto-import.json',
  ],
  overrides: [{ files: ['*.html'], processor: 'vue/.vue' }],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-console': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
  },
}
