/* eslint-disable */
import vue from '@vitejs/plugin-vue'
import Autoprefixer from 'autoprefixer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import Inspect from 'vite-plugin-inspect'
import viteStylelint from 'vite-plugin-stylelint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    server: { port: 3000 },
    resolve: {
      alias: { '@': '/src/' },
    },
    plugins: [
      VueRouter({
        dts: 'types/typed-router.d.ts',
      }),
      vue(),
      UnoCSS(),
      vueSetupExtend(),
      Components({ resolvers: [AntDesignVueResolver()], dts: 'types/components.d.ts' }),
      viteEslint(),
      viteStylelint({ fix: true }),
      Inspect(),
      AutoImport({
        imports: ['vue', VueRouterAutoImports, 'pinia'],
        dts: 'types/autoImports.d.ts',
        eslintrc: { enabled: false },
      }),
      createHtmlPlugin({
        minify: true,
        inject: { data: { title: env.VITE_APP_TITLE } },
      }),
    ],
    css: {
      postcss: {
        plugins: [Autoprefixer],
      },
    },
  }
})
