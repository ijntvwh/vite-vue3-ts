import dayjs from 'dayjs'
import pkg from '../package.json'

const { dependencies, devDependencies, name, version } = pkg
export const pkgInfo = JSON.stringify({
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
})
