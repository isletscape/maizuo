<template>
  <van-swipe
    class="my-swipe"
    :loop="false"
    :show-indicators="false"
    :width="200"
    :height="300"
    lazy-render
    @change="swipeChange"
    @click="onClickSwipe"
  >
    <!-- <van-swipe-item v-for="item in movies" :key="item.filmId">
      <img class="poster" :src="item.poster" alt="" />
    </van-swipe-item> -->
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  movies: Array,
})
props

const swipeChange = (index) => {
  console.log(index)
}
const onClickSwipe = (e) => {
  console.log(e)
}
</script>
<style lang="less" scoped>
.my-swipe {
  background-color: #39a9ed;
}
an-swipe-item {
  color: red;
  background-color: slateblue;
}
.poster {
  width: 200pX;
  display: block;
  margin: 0 auto;
}
</style>
