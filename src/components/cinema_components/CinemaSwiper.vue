<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in movies" :key="item.filmId">
        <img :src="item.poster" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper'
Swiper.use([Autoplay, EffectCoverflow, Pagination, Navigation])
import 'swiper/swiper.less'

// eslint-disable-next-line no-undef
const props = defineProps({
  movies: Array,
  getCurrentMovie: Function,
})

onMounted(() => {
  // eslint-disable-next-line no-unused-vars
  const mySwiper = new Swiper('.swiper-container', {
    loop: false,
    //间隔距离
    spaceBetween: 60,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    //显示个数
    slidesPerView: 2.2,
    observer: true,
    observeParents: true,
    // observer: true,
    // observeParents: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    // watchSlidesProgress: true,
    on: {
      //动画结束的回调
      slideChangeTransitionEnd: function (swiper) {
        props.getCurrentMovie(props.movies[swiper.activeIndex])
      },
    },
  })
})
</script>
<style lang="less" scoped>
.swiper-wrapper {
  height: 200pX;
}
.swiper-slide {
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
}
</style>
