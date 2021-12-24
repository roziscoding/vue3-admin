<template>
  <page-center fullheight>
    <div class="form">
      <h1 class="title">Login</h1>
      <form @submit.prevent="doLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <text-input type="email" id="email" v-model="login" color="purple" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <text-input type="password" id="password" v-model="password" color="purple" />
        </div>
        <button type="submit" class="btn btn-primary submit" :disabled="!valid">Login</button>
      </form>
    </div>
  </page-center>
</template>

<script lang="ts" setup>
import PageCenter from '@/components/PageCenter.vue'
import TextInput from '@/components/TextInput.vue'

import { useAuthStore } from '@/store/auth'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const authStore = useAuthStore()

const performRedirection = () => {
  const redirect = route.query.redirect

  if (redirect && typeof redirect === 'string') {
    router.push(decodeURIComponent(redirect))
  }
}

onMounted(() => {
  if (authStore.isAuthenticated) performRedirection()
})

const login = ref('')
const password = ref('')
const valid = computed(() => login.value.length > 0 && password.value.length > 0)
const router = useRouter()

function doLogin () {
  if (!valid.value) return

  authStore.login({
    name: 'John Doe',
    email: 'john.doe@email.com',
    picture: 'https://thispersondoesnotexist.com/image'
  })

  performRedirection()
}
</script>

<style lang="scss" scoped>
.submit {
  margin-top: 10px;
}
</style>