import { defineConfig, presetAttributify, presetMini } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetMini()],
  rules: [],
  shortcuts: {
    'flex-c': 'flex justify-center items-center',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center',
  },
})
