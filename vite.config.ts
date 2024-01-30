import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import Inspect from 'vite-plugin-inspect'
import viteStylelint from 'vite-plugin-stylelint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import svgLoader from 'vite-svg-loader'
import { viteBuildInfo } from './build/buildInfo'
import { pkgInfo } from './build/pkg'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    server: { port: 3000 },
    resolve: { alias: { '@': '/src/' } },
    define: { __APP_INFO__: pkgInfo },
    esbuild: {
      pure: ['console.log'],
      drop: ['debugger'],
      legalComments: 'none',
    },
    build: {
      // sourcemap: true,
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      rollupOptions: {
        output: { manualChunks: { vue: ['vue', 'vue-router', 'pinia'], naive: ['naive-ui'] } },
      },
    },
    plugins: [
      // VueRouter必须在vue插件之前
      VueRouter({ dts: 'types/typed-router.d.ts' }),
      vue(),
      UnoCSS(),
      vueSetupExtend(),
      Components({ resolvers: [NaiveUiResolver()], dts: 'types/components.d.ts' }),
      viteEslint(),
      viteStylelint({ fix: true }),
      Inspect(),
      visualizer(),
      AutoImport({
        imports: ['vue', VueRouterAutoImports, 'pinia'],
        resolvers: [NaiveUiResolver()],
        dts: 'types/autoImports.d.ts',
        eslintrc: { enabled: true },
      }),
      svgLoader(),
      Icons({ autoInstall: true }),
      createHtmlPlugin({
        minify: true,
        inject: { data: { title: env.VITE_APP_TITLE } },
      }),
      viteBuildInfo(),
    ],
  }
})
