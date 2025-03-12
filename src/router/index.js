import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../views/Loading.vue'
import Index from '../views/Index.vue'
import Chat from '../views/Chat.vue'
import Basics from '../views/Basics.vue'
import Daily from '../views/Daily.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/basics',
    name: 'Basics',
    component: Basics
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory('/philosophersdog/'),
  routes
})

export default router 