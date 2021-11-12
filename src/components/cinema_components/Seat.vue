<template>
  <!-- <div :class="['seat']" @click="selectSeat">
    <svg class="icon" aria-hidden="true" v-if="info.isBroken">
      <use xlink:href="#icon-danrenzuoweixuanzuowei12"></use>
    </svg>
    <svg class="icon" aria-hidden="true" v-else-if="info.isOccupied">
      <use xlink:href="#icon-danrenzuoweixuanzuowei1-copy"></use>
    </svg>
    <svg class="icon" aria-hidden="true" v-else>
      <use xlink:href="#icon-danrenzuoweikexuan1"></use>
    </svg>
  </div> -->
  <div class="seat"></div>
</template>

<script setup>
import { useAttrs } from '@vue/runtime-core'
const info = useAttrs().info[0]
info

// const selectSeat = () => {
//   if (!info.isBroken && !info.isOccupied) {
//     info.isBroken = false
//     info.isOccupied = false
//   }
// }
</script>

<style lang="less" scoped>
.seat {
  width: 100%;
  height: 100%;
  background-color: red;
}
.locked{

}
.occupied{}
</style>
