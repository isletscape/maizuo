<template>
  <button id="citySelector" :style="[ bindStyle,dynamicStyle]" @click="onClick">
    {{ currentCityName }}
  </button>
</template>

<script setup>
import EventBus from '@/utils/EventBus/EventBus.js'
import router from '@/router/index.js'
import { computed, ref } from 'vue'
import { titleBarHeight } from '@/global_styles/GlobalStyles.js'
import { useStore } from 'vuex'

const store = useStore()

const currentCityName = store.state.currentCity.name
const val = ref(0)
const height = 25

//接收监听到的滚动状态
EventBus.on('scrollPercentage', (percentage) => {
  val.value = percentage
})
//监听点城市列表点击事件
// const currentCityName = ref('xxx')
// EventBus.on('currentCity', (city) => {
//   currentCityName.value = city.name
//   console.log('on', currentCityName.value)
// })

//绑定样式
const bindStyle = {
  height: `${height}px`,
  top: `${titleBarHeight / 2 - height / 2}px`,
}
//动态样式
const dynamicStyle = computed(() => {
  if (val.value < 1) {
    return {
      opacity: (1 - val.value) * 0.9,
      color: '#000',
      backgroundColor: '#fff',
    }
  } else {
    // return { color: '#000', backgroundColor: '#fff' }
    return { color: '#fff', backgroundColor: '#111' }
  }
})

const onClick = () => {
  router.push({ name: 'city' })
}
</script>

<style lang="less" scoped>
#citySelector {
  position: fixed;
  left: 7px;
  color: #fff;
  min-width: 40px;
  padding: 0 5px 0 5px;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  text-align: center;
  border: none;
  outline-style: none;
  z-index: 20;
}
</style>
