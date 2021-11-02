<template>
  <button id="citySelector" :style="[dynamicStyle]" @click="onClick">
    button
  </button>
</template>

<script>
import EventBus from '@/utils/EventBus/EventBus.js'
import router from '@/router/index.js'
import { computed, ref } from '@vue/reactivity'
export default {
  setup() {
    const val = ref(0)
    //接收监听到的滚动状态
    EventBus.on('scrollPercentage', (percentage) => {
      val.value = percentage
    })
    //绑定按钮动态属性
    const dynamicStyle = computed(() => {
      if (val.value <= 1) {
        return { opacity: (1 - val.value) * 0.9 }
      } else {
        return { color: '#000', backgroundColor: '#fff' }
      }
    })
    //路由跳转
    const onClick = () => {
      router.push({ name: 'Citys' })
    }

    return {
      dynamicStyle,
      onClick,
    }
  },
}
</script>

<style lang="less" scoped>
#citySelector {
  position: fixed;
  top: 10px;
  left: 7px;
  color: #fff;
  // width: 38px;
  height: 30px;
  padding: 0 5px 0 5px;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: none;
  outline-style: none;
  z-index: 20;
}
</style>
