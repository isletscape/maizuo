<template>
  <div
    id="titlebar"
    :style="[heightStyleObject, titleBarOffset]"
    ref="titlebar"
  >
    标题
  </div>
</template>

<script setup>
import { titleBarHeight } from '@/utils/styles/style.js'
import EventBus from '@/utils/EventBus/EventBus.js'
import { computed, ref } from 'vue'

var offset = ref(0)
//监听tabScrollTop变化
EventBus.on('scrollPercentage', (val) => {
  val = val >= 1 ? 1 : val
  offset.value = val * titleBarHeight
})

//动态样式绑定
const titleBarOffset = computed(() => {
  return { top: offset.value + 'px' }
})
//固定样式绑定
var heightStyleObject = {
  height: titleBarHeight + 'px',
  lineHeight: titleBarHeight + 'px',
  transform: `translateY(${-titleBarHeight}px)`,
}
</script>

<style lang="less" scoped>
#titlebar {
  position: fixed;
  background-color: skyblue;
  width: 100%;
  z-index: 10;
  font-size: 18px;
  text-align: center;
  transform: translateZ(0);
}
</style>
