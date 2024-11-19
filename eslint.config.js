import antfu from '@antfu/eslint-config'
import eslintAutoImport from './.eslintrc-auto-import.cjs'

export default antfu({
  ignores: [
    // 忽略文件
    '.git/',
    '**/node_modules/',
    '.eslintrc-auto-import.*',
    '**/*.d.ts',
    'dist',
    'lib',
    'public',
    'static',
    'stats.html',
  ],
  typescript: true,
  vue: true,
  unocss: true,
  formatters: true,
  rules: {
    'n/prefer-global/process': 0,
    'no-console': 0,
    'antfu/if-newline': 0,
    'no-undef': 'error',
    'style/arrow-parens': [2, 'as-needed'],
    'style/comma-dangle': 0,
    'style/brace-style': [2, '1tbs', { allowSingleLine: true }],
    'vue/block-order': 0,
    'vue/singleline-html-element-content-newline': 0,
    // 'no-fallthrough': 'off',
    // 'prefer-promise-reject-errors': 'off',
  },
  // stylistic: {
  //   overrides: {
  //     'antfu/top-level-function': 'off',
  //   },
  // },
  languageOptions: {
    globals: eslintAutoImport.globals,
  },
})
