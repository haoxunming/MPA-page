import { createApp, createVNode, render, createTextVNode } from 'vue'
import type { App } from 'vue'
import Tost from './tostTemplate.vue'
const body = document.body

const Message: any = function (options: any) {
  const modelDom = body.querySelector('.tost')
  if (modelDom) return false

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 创建虚拟节点
  const vm:any = createVNode(
    Tost,
    { class: 'tost' },
    () => options.message
  )
  // 渲染虚拟节点
  render(vm, body)

  setTimeout(() => {
    const modelDom = body.querySelector('.tost')
    if (modelDom) {
      const vm:any = createTextVNode()
      // 渲染虚拟节点
      render(vm, body)
    }
  }, 3000)
}

export default {
  install (app: App):void {
    app.config.globalProperties.$tost = Message
  }
}
