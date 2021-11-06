<template>
  <div id="tickets" v-if="cinemas">
    <van-nav-bar title="标题" s left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <van-tabs sticky>
      <template #nav-bottom>
        <div id="cinema-type">
          <div class="cinema-type-child" @click="choseCinemaType">
            全部影院
            <van-icon name="arrow-down" />
          </div>
          <div class="cinema-type-child" @click="choseCinemaType">
            去过的影院
            <van-icon name="arrow-down" />
          </div>
        </div>
      </template>
      <van-tab title="今天">
        <van-list finished-text="没有更多了">
          <CinemaCell
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
            :key="item"
          />
          <!-- <CinemaCell />
          <CinemaCell /> -->
        </van-list>
      </van-tab>
      <van-tab title="明天">
        <van-list finished-text="没有更多了">
          <div>s123</div>
          <div>s123</div>
        </van-list>
      </van-tab>
      <van-tab title="明天">
        <van-list finished-text="没有更多了">
          <div>s123</div>
          <div>s123</div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>

  <!-- :style="{ top: '30px' }" -->
  <van-popup
    v-model:show="show"
    position="top"
    close-on-click-overlay
    teleport="#cinema-type"
    @click-overlay="closePopup"
  >
    <template #default>
      <ul class="choseCity">
        <li>
          <div class="city-name">123</div>
        </li>
        <li>
          <div class="city-name">123</div>
        </li>
        <li>
          <div class="city-name">123</div>
        </li>
        <li>
          <div class="city-name">123</div>
        </li>
        <li>
          <div class="city-name">123</div>
        </li>
      </ul>
    </template>
  </van-popup>
</template>

<script setup>
import CinemaCell from '@/components/cinema_components/CinemaCell.vue'
import { ref } from '@vue/reactivity'
import initCinemas from '@/composables/initCinemas.js'

const show = ref(false)
const cinemas = ref([])
initCinemas(cinemas, 5725, 110100, 1621169)

const choseCinemaType = () => {
  show.value = true
}
const closePopup = () => {
  show.value = false
}
</script>

<style lang="less" scoped>
#cinema-type {
  display: flex;
  height: 49pX;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
  .cinema-type-child {
    flex: 1;
    text-align: center;
    height: 49pX;
    line-height: 49pX;
    font-size: 14pX;
  }
}

.choseCity{
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  li {
    display: block;
    box-sizing: border-box;
    width: 25%;
    font-size: 12pX;
    padding: 5pX;
    .city-name{
      margin: 0;
      height: 30pX;
      line-height: 30px;
      text-align: center;
      color: #797d82;
      border: 1px solid #797d82;
      border-radius: 2pX;
    }
  
  }
}

 
</style>
<style lang="less">
  :root {
  --van-nav-bar-icon-color: #555;
 }
</style>