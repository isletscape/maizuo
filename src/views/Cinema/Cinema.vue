<template>
  <div id="cinema">
    <!-- 标题栏 -->
    <div class="nav">
      <van-nav-bar v-if="cinema" :title="cinema.name" fixed placeholder>
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
import { ref } from '@vue/reactivity'
import { initCinemaMovieList, initCinema } from '@/composables/initCinemas.js'
import { useRoute } from 'vue-router'
import { tomorrowStamp } from '@/utils/time.js'
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const cinema = ref(null)
const cinemaMovieList = ref([])
const { cinemaId } = useRoute().params
const showDate = ref(tomorrowStamp)
const k = 3819095
const currentMovie = ref(null)

initCinema(cinema, cinemaId, k)
initCinemaMovieList(cinemaMovieList, cinemaId, showDate.value, k)

// 更新放映厅数据
watch(cinemaMovieList, (cinemaMovieList) => {
  currentMovie.value = cinemaMovieList[0]
  // showDate.value = String(cinemaMovieList[0].showDate[0])
  store.commit('updateCurrentMovie', currentMovie.value)
  router.push(`/cinema/${cinemaId}/movies/${currentMovie.value.filmId}`)
})

// 轮播图切换电影的处理函数
const getCurrentMovie = (movie) => {
  currentMovie.value = movie
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
.nav{
  z-index: 99999;
}
.swiper {
  background-color: skyblue;
  padding-bottom: 10pX;
  z-index: 1;
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