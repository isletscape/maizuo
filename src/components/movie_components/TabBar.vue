<template>
  <van-tabs sticky :offset-top="titleBarHeight" @scroll="onScroll">
    <van-tab v-for="item in tabs" :key="item.type" :title="item.title">
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
          :clickAction="handleSelectMovie"
        ></movie-cell>
      </van-list>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import EventBus from '@/utils/EventBus/EventBus.js'
import { titleBarHeight, swipeHeight } from '@/global_styles/GlobalStyles.js'
import { reactive } from 'vue'
import MovieCell from '@/components/movie_components/MovieCell.vue'
import { initMovieList } from '@/composables/initMovies.js'
import { useStore } from 'vuex'
import router from '@/router/index.js'

const store = useStore()
const { cityId } = store.state.currentCity

const tabs = reactive([
  { title: '正在热映', type: 1 },
  { title: '即将上映', type: 2 },
])
tabs.forEach((item) => {
  item['cityId'] = cityId
  item['movies'] = []
  item['pageNum'] = 1
  item['pageSize'] = 10
  item['loading'] = false
  item['finished'] = false
})

const onLoadWith = (params) => {
  initMovieList(params)
}

//注册监听滚动距离
const onScroll = (swipe) => {
  EventBus.emit(
    'scrollPercentage',
    swipe.scrollTop / (swipeHeight - titleBarHeight)
  )
}

//选择电影的回调
const handleSelectMovie = (type, filmId) => {
  if (type === '电影详情') {
    router.push(`/detail/${filmId}`)
  } else if (type === '购票') {
    router.push({
      name: 'tickets',
      params: { filmId: filmId },
    })
  }
}
</script>
