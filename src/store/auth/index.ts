import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: '',
      email: '',
      picture: ''
    }
  }),
  actions: {
    login({ name, email, picture }: Record<string, string>) {
      this.$patch(() => {
        this.isAuthenticated = true
        this.user = { name, email, picture }
      })
    },
    logout() {
      this.$reset()
    }
  }
})
