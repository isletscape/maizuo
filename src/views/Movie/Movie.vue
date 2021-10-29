<template>
  <!-- 轮播图 -->
  <Swipe></Swipe>
  <!-- 标签页 -->
  <Tab :movies="movieList"></Tab>
</template>

<script>
import { getMovie } from '@/api/api.js'
import { handleRequest } from '@/utils/handleRequest.js'
import Tab from '@/components/Tab/Tab.vue'
import Swipe from '@/components/Swipe/Swipe.vue'

export default {
  name: 'Movie',
  components: {
    Tab,
    Swipe,
  },
  data() {
    return {
      movieList: [],
    }
  },
  created() {
    this.initMovies()
  },
  methods: {
    async initMovies() {
      const data = await getMovie(110100, 1, 10)
      if (!handleRequest(data)) return
      console.log('继续执行')
      const {
        data: {
          data: { films },
        },
      } = data
      this.movieList = [...films]
      console.log(this.movieList)
    },
  },
}
</script>

<style lang="less" scoped></style>
