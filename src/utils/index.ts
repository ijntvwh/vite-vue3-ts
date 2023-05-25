import { message } from 'ant-design-vue'
import { Modal } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/modal/style/css'

export const showToast = (title: string, type: 'info' | 'success' | 'loading' | 'error' | 'warning' = 'info') => {
  if (!title) return Promise.resolve()
  return new Promise<void>(resolve => message[type](title, 2, resolve))
}

type AlertFunc = 'info' | 'success' | 'error' | 'warning'
export const showAlert = (title: string, func: AlertFunc = 'info') =>
  new Promise<void>(resolve => Modal[func]({ title, onOk: () => resolve() }))
