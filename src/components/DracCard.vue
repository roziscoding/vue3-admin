<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { DracColors } from '@/types/drac'
import { computed } from 'vue'

type Props = {
  color?: DracColors,
  margin?: 'lg' | 'md' | 'sm',
  padding?: 'lg' | 'md' | 'sm',
  subtle?: boolean,
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  margin: 'md',
  padding: 'md',
  subtle: false,
  modelValue: ''
})

const classes = computed(() => ({
  'drac-box': true,
  'drac-card': true,
  [ `drac-bg-${props.color}` ]: true,
  [ `drac-p-${props.padding}` ]: true,
  [ `drac-m-${props.margin}` ]: true,
  [ `drac-border-${props.color}` ]: true,
  'drac-card-subtle': props.subtle
}))

</script>