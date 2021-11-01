<template>
  <van-tabs sticky :offset-top="titleBarHeight" @scroll="onScroll">
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
import { ref } from 'vue'
import EventBus from '@/utils/EventBus/EventBus.js'
// import initMovies from '@/composables/initMovies.js'
import { titleBarHeight, swipeHeight } from '@/utils/styles/style.js'

export default {
  name: 'Tab',
  components: {
    MovieCell,
  },
  setup() {
    // var cityID = ref(110100)
    // var pageNum = ref(1)
    // var pageSize = ref(10)
    var loading = ref(false)
    var finished = ref(false)
    var movies = ref([
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
      {
        poster: 'asd',
        name: 'asd',
        filmType: {
          name: 'asd',
        },
        grade: 123,
        actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
        nation: 'asd',
        runtime: 123,
      },
    ])

    //默认加载页面触发一次,上滑到底部再次触发
    const onLoad = () => {
      // initMovies(movies, cityID, pageNum, pageSize, loading, finished)
    }

    var offsetPercentage = ref(0)

    const onScroll = (arg) => {
      // offsetPercentage.value = arg.scrollTop / (swipeHeight - titleBarHeight)
      EventBus.emit('tabScrollTop', arg.scrollTop)
    }

    return {
      movies,
      loading,
      finished,
      onLoad,
      onScroll,
      titleBarHeight,
      swipeHeight,
      offsetPercentage,
    }
  },
}
</script>
