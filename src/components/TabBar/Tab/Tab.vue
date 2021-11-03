<template>
  <!-- <div ref="listDom"></div> -->
  <van-tab title="正在热映">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <movie-cell
        v-for="item in movies"
        :key="item.premiereAt"
        :movie="item"
      ></movie-cell>
    </van-list>
  </van-tab>
</template>

<script>
import { ref } from 'vue'
import MovieCell from '@/components/MovieCell/MovieCell.vue'

import initMovies from '@/composables/initMovies.js'

export default {
  components: {
    MovieCell,
  },
  props: {
    type: {
      type: Number,
      default: 1,
    },
    city: {
      default: 130100,
    },
  },
  setup(props) {
    var movies_x = ref([
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
    var movies = ref([])
    var cityID = ref(props.city)
    var pageNum = ref(1)
    var pageSize = ref(10)
    var type = ref(1)
    var loading = ref(false)
    var finished = ref(false)
    //默认加载页面触发一次,上滑到底部再次触发
    const onLoad = () => {
      initMovies(movies, cityID, pageNum, pageSize, type, loading, finished)
    }

    return {
      movies_x,
      movies,
      onLoad,
      loading,
      finished,
    }
  },
}
</script>
