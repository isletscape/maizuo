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
      Router.push('/movie')
    }
    return {
      onClick,
    }
  },
}
</script>

<style lang="less" scoped>
#citys {
  // position: absolute;
  // top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
// .fade-enter-active {
//   animation: moveIn 0.15s;
// }
// .fade-leave-active {
//   animation: moveOut 0.15s;
// }

// @keyframes moveIn {
//   0% {
//     opacity: 0;
//     transform: translateX(200px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(0px);
//   }
// }

// @keyframes moveOut {
//   0% {
//     opacity: 1;
//     transform: translateX(0);
//   }
//   100% {
//     opacity: 0;
//     transform: translateX(-200px);
//   }
// }
</style>
