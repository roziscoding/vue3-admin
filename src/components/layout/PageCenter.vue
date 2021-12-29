<template>
  <main class="container" :class="classes">
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  fullheight: {
    type: Boolean,
    default: false
  },
  fullwidth: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => ({
  fullwidth: props.fullwidth,
  fullheight: props.fullheight
}))
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullwith {
  width: 100vw;
}

.fullheight {
  height: 100vh;
}
</style>