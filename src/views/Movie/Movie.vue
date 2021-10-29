<template>
  p123
  <!-- 轮播图 -->
  <Swipe></Swipe>
  <!-- 标签页 -->
  <Tab></Tab>
</template>

<script>
import { getMovie } from '@/api/api.js'
import Tab from '@/components/Tab/Tab.vue'
import Swipe from '@/components/Swipe/Swipe.vue'

export default {
  name: 'Movie',
  components: {
    Tab,
    Swipe,
  },
  created() {
    this.initMovies()
  },
  methods: {
    async initMovies() {
      const { data: res } = await getMovie(130800, 1, 10)

      console.log(res)
    },
  },
}
</script>

<style lang="less" scoped></style>
