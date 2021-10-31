<template>
  <TitleBar></TitleBar>
  <Swipe :height="swipeHeight"></Swipe>
  <Tab></Tab>
</template>

<script>
// import { getMovie } from '@/api/api.js'
// import { handleRequest } from '@/utils/handleRequest.js'
import Tab from '@/components/Tab/Tab.vue'
import Swipe from '@/components/Swipe/Swipe.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
// import { provide } from '@vue/runtime-core'
import { swipeHeight } from '@/utils/styles/style.js'
// import { ref } from '@vue/runtime-core'

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
