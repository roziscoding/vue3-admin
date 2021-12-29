<template>
  <navbar-layout>
    <main class="drac-text-white">
      <h1>Hello, {{ username }}!</h1>
      <drac-button @click="logout">Logout</drac-button>
    </main>
  </navbar-layout>
</template>

<script lang="ts" setup>
import DracButton from '@/components/DracButton.vue'
import NavbarLayout from '@/components/layout/NavbarLayout.vue'
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