import { createDiscreteApi } from 'naive-ui'

const { message, dialog } = createDiscreteApi(['message', 'dialog'])

export function showToast(title: string, type: 'info' | 'success' | 'loading' | 'error' | 'warning' = 'info') {
  if (!title) return Promise.resolve()
  return new Promise<void>(resolve => message[type](title, { onAfterLeave: resolve }))
}

export const promiseErr = (s: string) => Promise.reject(new Error(s))
type AlertFunc = 'info' | 'success' | 'error' | 'warning'
export function showAlert(content: string, title: string, func: AlertFunc = 'info') {
  return new Promise<boolean>(resolve =>
    dialog[func]({
      content,
      title,
      positiveText: '确认',
      negativeText: '取消',
      maskClosable: false,
      onPositiveClick: () => resolve(true),
      onNegativeClick: () => resolve(false),
    })
  )
}
