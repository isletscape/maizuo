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
// import { toRefs } from '@vue/reactivity'
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
  const mySwiper = new Swiper('.swiper-container', {
    //循环
    loop: false,
    spaceBetween: 60,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
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
      slideChangeTransitionEnd: function (swiper) {
        props.getCurrentMovie(props.movies[swiper.activeIndex])
      },
    },
  })
  console.log(mySwiper.progress)
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
