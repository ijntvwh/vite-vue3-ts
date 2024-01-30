module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
    '.eslintrc-auto-import.json',
  ],
  overrides: [{ files: ['*.html'], processor: 'vue/.vue' }],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: { jsx: true, tsx: true },
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-console': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
  },
}
