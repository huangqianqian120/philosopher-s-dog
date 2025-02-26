import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/styles/global.scss'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory('/philosophersdog/'),
})
app.use(router)
app.mount('#app') 