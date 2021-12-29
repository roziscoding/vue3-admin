<template>
  <input type="text" :class="classes" @input="updateModelValue" :value="modelValue" />
</template>

<script lang="ts" setup>
import { DracColors } from '@/types/drac'
import { computed } from 'vue'

const emit = defineEmits([ 'update:modelValue' ])

const updateModelValue = (e: any) => {
  emit('update:modelValue', e.target.value)
}

type Props = {
  color?: DracColors,
  size?: 'lg' | 'md' | 'sm',
  outline?: boolean,
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  size: 'md',
  outline: false,
  modelValue: ''
})

const classes = computed(() => ({
  'drac-input': true,
  [ `drac-input-${props.color}` ]: true,
  [ `drac-input-${props.size}` ]: props.size !== 'md',
  [ `drac-input-outline` ]: props.outline,
  [ `drac-text-${props.color}` ]: true
}))
</script>