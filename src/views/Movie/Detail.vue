<template>
  <div v-if="movie">
    <!-- 头部 -->
    <div class="navbar">
      <!-- <van-icon class="backword" name="arrow-left" @click="backword" /> -->
      <van-icon class="backword" name="cross" size="27" @click="backword" />
    </div>
    <!-- 头图 -->
    <div class="poster">
      <img :src="movie.poster" alt="" />
    </div>
    <!-- 电影信息 -->
    <article class="content">
      <div class="title">
        <span class="name">{{ movie.name }}</span>
        <span class="formate">{{ movie.filmType.name }}</span>
        <span class="grade">{{ movie.grade }}</span>
      </div>
      <span class="type">{{ movie.category }}</span>
      <span class="data">{{ movie.premiereAt }}</span>
      <span class="county">{{ movie.nation }} {{ movie.runtime }}分钟</span>
      <p>
        {{ movie.synopsis }}
      </p>
    </article>
    <!-- 演职人员 -->
    <div class="actors">
      <header>演职人员</header>
      <ul v-if="movie.actors && movie.actors.length >= 1">
        <li v-for="(item, index) in movie.actors" :key="index">
          <img :src="item.avatarAddress" alt="" />
          <div>{{ item.name }}</div>
          <div>{{ item.role }}</div>
          <div>{{ item.role.sp }}</div>
        </li>
      </ul>
      <div v-else class="no-data">暂无演员信息</div>
    </div>
    <!-- 剧照 -->
    <div class="pictures">
      <header>剧照</header>
      <ul v-if="movie.photos && movie.photos.length >= 1">
        <li v-for="(item, index) in movie.photos" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
      <div v-else class="no-data">暂无剧照</div>
    </div>
    <div class="buy" @click="buy">选座购票</div>
  </div>
</template>

<script setup>
import router from '@/router/index.js'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { initSingleMovie } from '@/composables/initMovies.js'

const { id } = useRoute().params
const movie = ref()

initSingleMovie(movie, id)

const backword = () => {
  router.go(-1)
}
const buy = () => {
  router.push({
    name: 'tickets',
    params: { filmId: id },
  })
}
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 44pX;
  background-color: rgba(1, 1, 1, 0);
  .backword{
    float: left;
    position: absolute;
    top: 50%;
    left: 10pX;
    transform: translateY(-50%);
    background-color: rgba(121, 115, 115, 0.233);
    border-radius: 50%;
    color: white;
  }
}
.poster {
  height: 210px;
  overflow: hidden;
  img {
   width:100%;
    height: 100%;
    object-fit:cover;
  }
}
.content {
  color: #979a9d;
  font-size: 13px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  span {
    margin-bottom: 2pX;
  }
  .title {
    font-size: 18px;
    color: #333;
    height: 24px;
    // display: flex;
    // align-items: center;
    .formate {
      font-size: 9px;
      background-color: lightgray;
      border-radius: 2pX;
      margin: 4px;
      color: #fff;
    }
    .grade {
      color: #f6b436;
      font-style: italic;
      float:right;
    }
  }
}
.actors{
    margin-top: 5pX;
  header{
    font-size: 16px;
    padding: 15px;
    text-align: left;
  }
  ul {
     overflow:scroll;
     list-style: none;
     white-space:nowrap;
     padding-right: 10pX;
    li{
      display: inline-block;
      margin-left: 10pX;
      width: 85px;
      min-width: 85pX;
      font-size: 10pX;
      color: #979a9d;
      text-align: center;
      img {
        max-width: 100%;
      }
      :nth-child(2) {
        font-size: 12pX;
        color: #333;
      }
    }
  }
  ul::-webkit-scrollbar {
        display: none !important;
        width: 0px;
        height: 0px;
  }
}
.pictures{
  header {
    font-size: 16px;
    padding: 15px;
    text-align: left;
  }
  ul {
     overflow:scroll;
     list-style: none;
     white-space:nowrap;
     padding-right: 10pX;
    li{
      display: inline-block;
      margin-left: 10pX;
      width: 100px;
      min-width: 150pX;
      height: 150pX;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
    }
  }
  ul::-webkit-scrollbar {
    display: none !important;
    width: 0px;
    height: 0px;
  }
  
}
.buy{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 49pX;
  background-color: #ff5f16;
  color: #fff;
  text-align: center;
  line-height: 49pX;
  font-size: 16px;
}
@no-data-height:40pX;
.no-data{
  text-align: center;
  height: @no-data-height;
  line-height: calc(@no-data-height);
  font-size: 16pX;
  color: lightgray;
  margin-bottom: 10pX;
}
</style>