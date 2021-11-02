<template>
  <div id="citys">
    <!-- <transition name="fade"> -->
    <button @click="onClick">button</button>
    <!-- </transition> -->
  </div>
</template>

<script>
import Router from '@/router/index.js'
export default {
  setup() {
    const onClick = () => {
      Router.push('/home')
    }
    return {
      onClick,
    }
  },
}
</script>

<style lang="less" scoped>
#citys {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
