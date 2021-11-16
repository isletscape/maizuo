<template>
  <Swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    :height="swipeHeight"
  >
    <SwipeItem>1</SwipeItem>
    <SwipeItem>2</SwipeItem>
    <SwipeItem>3</SwipeItem>
    <SwipeItem>4</SwipeItem>
  </Swipe>
</template>

<script setup>
import { Swipe, SwipeItem } from 'vant'
import { swipeHeight } from '@/style/'
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
