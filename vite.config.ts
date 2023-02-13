/* eslint-disable */
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import Inspect from 'vite-plugin-inspect'
import viteStylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint(),
    viteStylelint({ fix: true }),
    Inspect(),
    AutoImport({
      imports: ['vue', 'pinia'],
      // dts: false,
      dts: 'types/autoImports.d.ts',
      eslintrc: { enabled: false },
    }),
  ],
})
