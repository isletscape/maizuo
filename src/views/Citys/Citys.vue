<template>
  <transition name="fade">
    <div>
      <p>123</p>
      <button @click="onClick">button</button>
    </div>
  </transition>
</template>

<script>
import Router from '@/router/index.js'
export default {
  setup() {
    const onClick = () => {
      Router.push('home')
    }
    return {
      onClick,
    }
  },
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
