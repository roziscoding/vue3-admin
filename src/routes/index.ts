import { createRouter, createWebHashHistory } from 'vue-router'
import applyAuthMiddleware from './middleware/auth'

const routes = [
  { path: '/login', component: () => import('../pages/Login.vue') },
  { path: '/', component: () => import('../pages/Home.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

applyAuthMiddleware(router)
