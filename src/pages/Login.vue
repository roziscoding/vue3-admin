<template>
  <page-center fullheight>
    <div class="form drac-text-black">
      <drac-card color="animated">
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
          <drac-button
            color="black"
            outline
            type="submit"
            class="btn btn-primary submit"
            :disabled="!valid"
            @click="doLogin"
          >Login</drac-button>
        </form>
      </drac-card>
    </div>
  </page-center>
</template>

<script lang="ts" setup>
import PageCenter from '@/components/layout/PageCenter.vue'
import TextInput from '@/components/TextInput.vue'
import DracCard from '@/components/DracCard.vue'
import DracButton from '@/components/DracButton.vue'

import { useAuthStore } from '@/store/auth'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const authStore = useAuthStore()

const login = ref('')
const password = ref('')
const valid = computed(() => login.value.length > 0 && password.value.length > 0)
const router = useRouter()

onMounted(() => {
  if (authStore.isAuthenticated) performRedirection()
})

const performRedirection = () => {
  const redirect = route.query.redirect

  if (redirect && typeof redirect === 'string') {
    return router.push(decodeURIComponent(redirect))
  }

  router.push('/')
}

function doLogin () {
  console.log('doLogin', valid.value)
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