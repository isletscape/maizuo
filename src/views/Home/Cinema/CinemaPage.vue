<template>
  <div class="cinema-page">
    <van-nav-bar title="影院">
      <template #left>
        <van-icon name="arrow-left" @click="closepage" />
      </template>
    </van-nav-bar>
  </div>

  <div class="swiper">
    <Swiper></Swiper>
  </div>

  <div class="movie-cell">
    <p class="movie-name">
      无暇赴死
      <span class="movie-grade">4.9</span>
    </p>
    <p class="movie-info">
      动作冒险|123分钟|阿水淀粉即可领取父啊；到健身房··阿萨德快乐；父
    </p>
  </div>

  <div class="tabs">
    <van-tabs>
      <van-tab title="标签 1">
        <van-list class="session-list" finished-text="没有更多了">
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
          <SessionCell />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import Swiper from '@/components/cinema_components/Swiper.vue'
import Router from '@/router/index.js'
import SessionCell from '@/components/cinema_components/SessionCell.vue'
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
  }
}
</style>