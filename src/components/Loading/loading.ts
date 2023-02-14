import { createApp, createVNode, render, createTextVNode } from 'vue'
import type { App } from 'vue'
import Loading from './Loading.vue'
const body = document.body
const Dom = document.createElement('div')

const Message: any = function (options: boolean) {
  Dom.className = 'loading_wrap'
  body.appendChild(Dom)

  // 创建虚拟节点
  const vm:any = createVNode(
    Loading,
    { class: 'loading' },
    () => options
  )
  // 渲染虚拟节点
  render(vm, Dom)

  if (!options) {
    Dom.remove()
    const vm:any = createTextVNode()
    // 渲染虚拟节点
    render(vm, Dom)
  }
}

export default {
  install (app: App):void {
    app.config.globalProperties.$loading = Message
  }
}
