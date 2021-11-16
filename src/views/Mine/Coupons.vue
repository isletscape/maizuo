<template>
  <van-nav-bar title="优惠券">
    <template #left>
      <van-icon name="arrow-left" color="#444" @click="closepage" />
    </template>
  </van-nav-bar>
  <ul>
    <li>红包</li>
    <li>红包</li>
    <li>红包</li>
    <li>红包</li>
    <li>红包</li>
  </ul>
</template>
<script setup>
import router from '@/router'

const closepage = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
  ul {
    padding: 15pX;
  }
  li {
    font-size: 16pX;
    height: 40pX;
    line-height: 40pX;
    color: #444;
    border-bottom: 1px solid #f4f4f4;
  }
</style>