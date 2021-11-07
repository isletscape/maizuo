<template>
  <div class="swiper-container swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/img/007.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="@/img/007.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="@/img/007.jpg" alt="" />
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

// swiper-bundle.min.css 决定了小圆点和左右翻页标签，如果不需要可以不引用
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.less'
onMounted(() => {
  const aa = new Swiper('.swiper', {
    //循环
    loop: true,
    spaceBetween: 50,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    // autoplay: {
    //   delay: 4000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false,
    // },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // watchSlidesProgress: true,
    on: {
      slideChangeTransitionEnd: function (swiper) {
        console.log(swiper.activeIndex)
      },
    },
  })
  console.log(aa.progress)
})
</script>
<style lang="less" scoped>
.swiper-wrapper {
  height: 200pX;
}
.swiper-slide {
  img {
    height: 100%;
  }
}
</style>
