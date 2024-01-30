import { createDiscreteApi } from 'naive-ui'

const { message, dialog } = createDiscreteApi(['message', 'dialog'])

export const showToast = (title: string, type: 'info' | 'success' | 'loading' | 'error' | 'warning' = 'info') => {
  if (!title) return Promise.resolve()
  return new Promise<void>(resolve => message[type](title, { onAfterLeave: resolve }))
}

type AlertFunc = 'info' | 'success' | 'error' | 'warning'
export const showAlert = (content: string, title: string, func: AlertFunc = 'info') =>
  new Promise<boolean>(resolve =>
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
