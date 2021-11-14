<template>
  <div class="seat" @click="checked = !checked">
    <icon :name="iconName"></icon>
  </div>
  <!-- <div class="seat"></div> -->
</template>

<script setup>
import { ref, useAttrs } from '@vue/runtime-core'
import icon from '@/icon/icon.vue'
const seatInfo = useAttrs().info[0]

const checked = ref(false)
const iconName = ref('')
iconName.value = seatInfo.isBroken
  ? 'broken'
  : seatInfo.isOccupied
  ? 'occupied'
  : checked.value
  ? 'checked'
  : 'danrenzuoweikexuan'
</script>

<style lang="less" scoped>
.seat {
  width: 100%;
  height: 100%;
  // background-color: red;
}
.icon {
  width: 100%;
  height: 100%;
  vertical-align: top;
  fill: currentColor;
  overflow: hidden;
}
.occupied{}
</style>
