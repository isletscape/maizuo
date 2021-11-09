<template>
  <div
    class="seat"
    :style="{ backgroundColor: info.isBroken ? 'red' : 'white' }"
  ></div>
</template>

<script setup>
// eslint-disable-next-line no-undef
// const props = defineProps({
//   info: Array,

import { useAttrs } from '@vue/runtime-core'
const info = useAttrs().info[0]
</script>

<style lang="less" scoped>
.seat {
  width: 100%;
  height: 100%;
  color: red;
  font-size: 5px;
}
  
</style>