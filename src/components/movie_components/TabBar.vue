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
import Router from '@/router/index.js'

const store = useStore()
const { cityId } = store.state.currentCity

//初始化不同Tab页面的参数
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

//list初始化之后默认触发load事件，用于加载第一屏的数据
const onLoadWith = (params) => {
  initMovieList(params)
}
const onScroll = (swipe) => {
  //注册监听滚动距离
  EventBus.emit(
    'scrollPercentage',
    swipe.scrollTop / (swipeHeight - titleBarHeight)
  )
}
const handleSelectMovie = (type, filmId) => {
  if (type === '电影详情') {
    Router.push(`/detail/${filmId}`)
  } else if (type === '购票') {
    Router.push({
      name: 'tickets',
      params: { filmId: filmId },
    })
  }
}
</script>
