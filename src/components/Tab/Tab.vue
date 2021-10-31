<template>
  <van-tabs>
    <van-tab title="正在热映">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <movie-cell
          v-for="item in movies"
          :key="item.flimID"
          :movie="item"
        ></movie-cell>
      </van-list>
    </van-tab>
    <van-tab title="即将上映">内容 2</van-tab>
  </van-tabs>
</template>

<script>
import MovieCell from '@/components/MovieCell/MovieCell.vue'
import { ref } from '@vue/runtime-core'
import initMovies from '@/composables/initMovies.js'

export default {
  name: 'Tab',
  components: {
    MovieCell,
  },
  setup() {
    var cityID = ref(110100)
    var pageNum = ref(1)
    var pageSize = ref(10)
    var loading = ref(false)
    var finished = ref(false)
    var movies = ref([])

    //上滑加载更多
    //默认加载页面触发一次
    const onLoad = () => {
      initMovies(movies, cityID, pageNum, pageSize, loading, finished)
    }

    return {
      movies,
      loading,
      finished,
      onLoad,
    }
  },
}
</script>
