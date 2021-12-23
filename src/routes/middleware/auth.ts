import { Router } from 'vue-router'
import { useAuthStore } from '../../store/auth'

export default function applyAuthMiddleware(router: Router) {
  router.beforeEach((to, from) => {
    const authStore = useAuthStore()

    if (!authStore.isAuthenticated) {
      return to.path === '/login'
        ? true
        : {
            path: '/login',
            query: { redirect: encodeURIComponent(to.fullPath) }
          }
    }

    return true
  })
}
