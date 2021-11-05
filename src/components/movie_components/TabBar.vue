<template>
  <van-tabs sticky :offset-top="titleBarHeight" @scroll="onScroll">
    <van-tab v-for="(item, index) in tabs" :key="index" :title="item.title">
      <van-list
        v-model:loading="item.loading"
        :finished="item.finished"
        finished-text="没有更多了"
        @load="onLoadWith(item)"
      >
        <movie-cell
          v-for="movie in item.movies"
          :key="movie.filmId"
          :movie="movie"
        ></movie-cell>
      </van-list>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import EventBus from '@/utils/EventBus/EventBus.js'
import { titleBarHeight, swipeHeight } from '@/global_styles/GlobalStyles.js'
import { reactive } from 'vue'
import MovieCell from '@/components/movie_components/MovieCell/MovieCell.vue'
import initMovies from '@/composables/initMovies.js'
import { useStore } from 'vuex'

const store = useStore()
const { cityId } = store.state.currentCity

const tabs = reactive([
  {
    title: '正在热映',
    movies: [],
    cityId: cityId,
    pageNum: 1,
    pageSize: 10,
    type: 1,
    loading: false,
    finished: false,
  },
  {
    title: '即将上映',
    movies: [],
    cityId: cityId,
    pageNum: 1,
    pageSize: 10,
    type: 2,
    loading: false,
    finished: false,
  },
])
const onLoadWith = (params) => {
  initMovies(params)
}
const onScroll = (swipe) => {
  //注册监听滚动距离
  EventBus.emit(
    'scrollPercentage',
    swipe.scrollTop / (swipeHeight - titleBarHeight)
  )
}
</script>
