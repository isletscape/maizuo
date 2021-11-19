<template>
  <Swipe
    class="my-swipe"
    :autoplay="3000"
    lazy-render
    indicator-color="white"
    :height="swipeHeight"
  >
    <SwipeItem v-for="item in bannerList" :key="item.bannerId">
      <img class="banner-image" :src="item.imgUrl" />
    </SwipeItem>
  </Swipe>
</template>

<script setup>
import { Swipe, SwipeItem } from 'vant'
import { swipeHeight } from '@/style/globalStyle.js'
import { initBannerList } from '@/composables/initMovies.js'
import store from '@/store/index.js'
import { ref } from '@vue/reactivity'

const { cityId } = store.state.currentCity
const bannerList = ref([])
const type = 2
const k = 6446113
initBannerList(bannerList, type, cityId, k)
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.banner-image{
  max-width: 100%;
}
</style>
