import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 改回使用原来的路由配置
import './assets/styles/global.scss'

const app = createApp(App)
app.use(router)
app.mount('#app') 