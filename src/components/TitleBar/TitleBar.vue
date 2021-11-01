<template>
  <div
    id="titlebar"
    :style="[heightStyleObject, titleBarOffset]"
    ref="titlebar"
  >
    标题
  </div>
</template>

<script>
import { titleBarHeight, swipeHeight } from '@/utils/styles/style.js'
import EventBus from '@/utils/EventBus/EventBus.js'
import { computed, ref } from 'vue'
export default {
  setup() {
    var offset = ref(0)
    //监听tabScrollTop变化
    EventBus.on('tabScrollTop', (val) => {
      var per = val / (swipeHeight - titleBarHeight)
      per = per >= 1 ? 1 : per
      offset.value = per * titleBarHeight
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
    return {
      heightStyleObject,
      titleBarHeight,
      titleBarOffset,
      offset,
    }
  },
}
</script>

<style lang="less" scoped>
#titlebar {
  position: fixed;
  background-color: skyblue;
  width: 100%;
  z-index: 999;
  font-size: 18px;
  text-align: center;
}
</style>
