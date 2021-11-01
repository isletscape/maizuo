<template>
  <TitleBar></TitleBar>
  <Swipe :height="swipeHeight"></Swipe>
  <Tab></Tab>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Swipe from '@/components/Swipe/Swipe.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { swipeHeight } from '@/utils/styles/style.js'

export default {
  name: 'Movie',
  components: {
    Tab,
    Swipe,
    TitleBar,
  },
  setup() {
    return {
      swipeHeight,
    }
  },
}
</script>

<style lang="less" scoped></style>
