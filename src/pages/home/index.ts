import { createApp } from 'vue'
import App from './index.vue'
// 全局组件
import { componentsUse } from '@/common/page-setting/d'

const app = createApp(App)
componentsUse(app)
app.mount('#app')
