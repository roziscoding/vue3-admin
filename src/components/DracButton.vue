<template>
  <button :class="classes" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { DracColors, DracSizes } from '@/types/drac'
import { computed } from 'vue'

type Props = {
  color?: DracColors,
  ghost?: boolean,
  outline?: boolean,
  disabled?: boolean,
  size?: DracSizes
}

const props = withDefaults(defineProps<Props>(), {
  color: 'purple',
  ghost: false,
  outline: false,
  disabled: false,
  size: 'md'
})

const classes = computed(() => ({
  'drac-btn': true,
  [ `drac-bg-${props.color}` ]: !props.ghost,
  [ `drac-bg-${props.color}-transparent` ]: props.ghost,
  [ `drac-text-${props.color}` ]: props.ghost || props.outline,
  [ `drac-btn-${props.size}` ]: props.size !== 'md',
  'drac-btn-outline': props.outline,
  'drac-btn-ghost': props.ghost
}))
</script>