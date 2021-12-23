<template>
  <h1>Hello, {{ username }}!</h1>
  <button @click="logout">Logout</button>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const username = computed(() => authStore.user.name || 'there')

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>