<template>
  <svg :class="iconClass" aria-hidden="true" :style="{ color }">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
 
<script setup>
import { computed } from '@vue/reactivity'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: String,
})
const iconName = computed(() => {
  return `#icon-${props.name}`
})
const iconClass = computed(() => {
  return !props.name ? 'svg-icon' : `svg-icon icon-${props.name}`
})
</script>

<style lang="less">
.svg-icon {
  width: 100%;
  height: 100%;
  overflow: hidden;
  vertical-align: top;
  fill: currentColor;
}
  
</style>