module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'airbnb-base',
    // 'prettier',
    'plugin:prettier/recommended',
    '.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [{ files: ['*.html'], processor: 'vue/.vue' }],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  // globals: {
  //   defineProps: true,
  //   defineEmits: true,
  //   defineExpose: true,
  //   withDefaults: true,
  // },
  // settings: {
  //   'import/resolver': {
  //     typescript: { project: './' },
  //   },
  // },
  rules: {
    'no-console': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
    // 'import/no-unresolved': [2, { ignore: ['^virtual:'] }],
    // 'import/extensions': [
    //   2,
    //   'always',
    //   {
    //     js: 'never',
    //     ts: 'never',
    //     // jsx: 'never',
    //     // tsx: 'never',
    //   },
    // ],
  },
}
