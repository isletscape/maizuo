<template>
  <div v-if="cinemaMovieList">
    <!-- 标题栏 -->
    <div class="cinema-page">
      <van-nav-bar title="影院">
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
    <div class="movie-cell" v-if="cinemaMovieList.length > 0">
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
    <!-- 场次列表 -->
    <div class="tabs">
      <van-tabs v-if="movieHallList.length > 0">
        <van-tab :title="date">
          <van-list class="session-list" finished-text="没有更多了">
            <HallCell
              v-for="item in movieHallList"
              :key="item.scheduleId"
              :hall="item"
              @click="selectHall(item.scheduleId)"
            />
          </van-list>
        </van-tab>
      </van-tabs>
      <div class="no-hall" v-else>暂无场次信息</div>
    </div>
  </div>
</template>

<script setup>
import CinemaSwiper from '@/components/cinema_components/CinemaSwiper.vue'
import Router from '@/router/index.js'
import HallCell from '@/components/cinema_components/HallCell.vue'
import { ref } from '@vue/reactivity'
import {
  initCinemaMovieList,
  initMovieHallList,
} from '@/composables/initCinemas.js'
import { useRoute } from 'vue-router'
import { date, tomorrowStamp } from '@/utils/time.js'
import { watch } from '@vue/runtime-core'

const cinemaMovieList = ref([])
const cinemaId = useRoute().params.id
const showDate = ref(tomorrowStamp)
const k = 3819095
const movieHallList = ref([])
const currentMovie = ref(null)
//请求当前影院放映的电影列表
initCinemaMovieList(cinemaMovieList, cinemaId, showDate.value, k)
//电影列表初始化完成后更新数据
watch(cinemaMovieList, () => {
  // currentMovieId.value = newValue[0].filmId
  currentMovie.value = cinemaMovieList.value[0]
  showDate.value = String(cinemaMovieList.value[0].showDate[0])
  updataMovieHallList()
})
//swipe切换电影更新数据
const getCurrentMovie = (movie) => {
  // currentMovieId.value = movie.filmId
  currentMovie.value = movie
  showDate.value = String(movie.premiereAt)
  updataMovieHallList()
}
const updataMovieHallList = () => {
  initMovieHallList(
    movieHallList,
    currentMovie.value.filmId,
    cinemaId,
    showDate.value,
    k
  )
}
const selectHall = (scheduleId) => {
  Router.push(`/schedule/${scheduleId}`)
}

const closepage = () => {
  Router.go(-1)
}
</script>

<style lang="less" scoped>
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