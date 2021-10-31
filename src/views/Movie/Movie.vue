<template>
  <Swipe></Swipe>
  <Tab></Tab>
</template>

<script>
// import { getMovie } from '@/api/api.js'
// import { handleRequest } from '@/utils/handleRequest.js'
import Tab from '@/components/Tab/Tab.vue'
import Swipe from '@/components/Swipe/Swipe.vue'
// import { reactive, toRefs } from '@vue/runtime-core'

export default {
  name: 'Movie',
  components: {
    Tab,
    Swipe,
  },
  // setup() {
  //   let list = reactive({
  //     movies: [],
  //   })

  //   ;(async function () {
  //     const data = await getMovie(110100, 1, 10)
  //     if (!handleRequest(data)) return
  //     const {
  //       data: {
  //         data: { films },
  //       },
  //     } = data
  //     list.movies = films
  //     console.log(list.movies)
  //   })()

  //   return {
  //     ...toRefs(list),
  //   }
  // },
}
</script>

<style lang="less" scoped>
#ddd {
  height: 10px;
  background-color: red;
}
</style>
