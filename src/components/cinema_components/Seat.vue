<template>
  <div class="seat" @click="selectSeat">
    <Icon :name="iconName" />
  </div>
  <!-- <div class="seat">1</div> -->
</template>

<script setup>
import Icon from '@/icon/icon.vue'
import { computed, toRefs, ref } from '@vue/reactivity'
import { inject } from '@vue/runtime-core'
import { Toast } from 'vant'

// eslint-disable-next-line no-undef
const props = defineProps({
  info: Array,
})
const { info } = toRefs(props)

// 座位信息
const seatInfo = computed(() => {
  return info.value[0]
})
// 座位状态
const checked = ref(false)

const selectSeat = () => {
  if (!seatInfo.value.isBroken && !seatInfo.value.isOccupied) {
    // 改变座位状态
    checked.value = !checked.value
    // 让schedule处理业务
    scheduleHandleSelectSeat(seatInfo.value, checked.value)
  } else {
    Toast('不可选')
  }
}

// 座位样式
const iconName = computed(() => {
  return seatInfo.value.isBroken
    ? 'broken'
    : seatInfo.value.isOccupied
    ? 'occupied'
    : checked.value
    ? 'checked'
    : 'danrenzuoweikexuan'
})

const scheduleHandleSelectSeat = inject('selectSeatEvent')
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
