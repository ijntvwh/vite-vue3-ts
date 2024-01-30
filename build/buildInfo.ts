import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { filesize } from 'filesize'
import getFolderSize from 'get-folder-size'
import type { Plugin } from 'vite'
dayjs.extend(duration)

export function viteBuildInfo(): Plugin {
  let config: { command: string }
  let startTime: Dayjs
  let endTime: Dayjs
  let outDir: string
  return {
    name: 'vite:buildInfo',
    configResolved(resolvedConfig) {
      config = resolvedConfig
      outDir = resolvedConfig.build?.outDir ?? 'dist'
    },
    buildStart() {
      console.log(config.command)
      if (config.command === 'build') {
        startTime = dayjs(new Date())
      }
    },
    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date())
        getFolderSize.loose(outDir).then(s => {
          const duration = dayjs.duration(endTime.diff(startTime)).format('mm分ss秒')
          const size = filesize(s as number)
          console.log(`打包完成, 用时${duration}，大小为${size}`)
        })
      }
    },
  }
}
