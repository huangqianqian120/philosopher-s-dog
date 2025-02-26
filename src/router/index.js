import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: () => import('@/views/Loading.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/basics',
    name: 'Basics',
    component: () => import('@/views/Basics.vue')
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('@/views/Daily.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/philosophersdog/'),
  routes
})

export default router 