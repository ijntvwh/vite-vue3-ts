import { Api } from '@/api'

type QiniuRes = { key: string; hash: string; persistentId: string }
type QiniuToken = {
  key: string
  keySm: string
  domainName: string
  smUrl: string
  upToken: string
  noKeyUpToken: string
}
export const qiniuUpload = (function () {
  const bucketType = 3
  return (file: File) =>
    Api.post<QiniuToken>('/b/resource/qiniu/access/token', {
      fileName: file.name,
      bucketType,
    }).then(({ key, upToken, domainName }) => {
      const formData = new FormData()
      formData.append('key', key)
      formData.append('token', upToken)
      formData.append('file', file)
      const headers = { 'Content-Type': 'multipart/form-data' }
      return Api.post<QiniuRes>('https://up.qiniu.com', formData, { headers, custom: ['complete'] }).then(
        () => `${domainName}/${key}`
      )
    })
})()
