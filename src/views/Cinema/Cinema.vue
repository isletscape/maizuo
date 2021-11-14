<template>
  <div id="cinema" v-if="cinemaMovieList">
    <!-- 标题栏 -->
    <div class="cinema-page">
      <van-nav-bar :title="cinemaName">
        <template #left>
          <van-icon name="arrow-left" color="#444" @click="closepage" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 轮播 -->
    <div class="swiper">
      <CinemaSwiper
        :movies="cinemaMovieList"
        :getCurrentMovie="getCurrentMovie"
        v-if="cinemaMovieList.length > 0"
      />
      <div class="no-movies" v-else>暂无电影信息</div>
    </div>
    <!-- 电影信息 -->
    <div class="movie-cell" v-if="currentMovie">
      <p class="movie-name">
        {{ currentMovie.name }}
        <span class="movie-grade">{{ currentMovie.grade }}</span>
      </p>
      <p class="movie-info">
        {{ currentMovie.category }}|{{ currentMovie.runtime }}分钟|{{
          currentMovie.nation
        }}|{{ currentMovie.director }}
      </p>
    </div>
    <!-- 场次分页列表 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import CinemaSwiper from '@/components/cinema_components/CinemaSwiper.vue'
import router from '@/router/index.js'
import { computed, ref } from '@vue/reactivity'
import { initCinemaMovieList } from '@/composables/initCinemas.js'
import { useRoute } from 'vue-router'
import { tomorrowStamp } from '@/utils/time.js'
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const cinemaMovieList = ref([])
const { cinemaId } = useRoute().params
const showDate = ref(tomorrowStamp)
const k = 3819095
const currentMovie = ref(null)

const cinemaName = computed(() => {
  return store.state.currentCinema.name
})

initCinemaMovieList(cinemaMovieList, cinemaId, showDate.value, k)
//更新放映厅数据
watch(cinemaMovieList, (cinemaMovieList) => {
  currentMovie.value = cinemaMovieList[0]
  showDate.value = String(cinemaMovieList[0].showDate[0])
  store.commit('updateCurrentMovie', currentMovie.value)
  router.push(`/cinema/${cinemaId}/movies/${currentMovie.value.filmId}`)
})

const getCurrentMovie = (movie) => {
  store.commit('updateCurrentMovie', movie)
  router.push(`/cinema/${cinemaId}/movies/${movie.filmId}`)
}

const closepage = () => {
  router.push('/cinemas')
  sessionStorage.removeItem('cinema_movie_date_status')
}
</script>

<style lang="less" scoped>
#cinema{
  height: 100vh;
}
.swiper {
  background-color: skyblue;
  padding-bottom: 10pX;
}
.movie-cell {
  .movie-name {
    text-align: center;
    font-size: 15pX;
    margin-bottom: 10pX;
  }
  .movie-grade {
    font-size: 16pX;
    color: #ffb232;
    font-style: italic;
  }
  .movie-info{
    font-size: 13pX;
    color: #797d82;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    text-overflow: ellipsis;
    text-align: center;
  }
}
.no-hall,
.no-movies{
  text-align: center;
  font-size: 14pX;
  color: gainsboro;
}
</style>