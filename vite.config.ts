/* eslint-disable */
import vue from '@vitejs/plugin-vue'
import Autoprefixer from 'autoprefixer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
import viteStylelint from 'vite-plugin-stylelint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  resolve: {
    alias: { '@': '/src/' },
  },
  plugins: [
    vue(),
    UnoCSS(),
    vueSetupExtend(),
    Pages(),
    viteEslint(),
    viteStylelint({ fix: true }),
    Inspect(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'types/autoImports.d.ts',
      eslintrc: { enabled: false },
    }),
  ],
  css: {
    postcss: {
      plugins: [Autoprefixer],
    },
  },
})
