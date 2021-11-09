<template>
  <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view> -->
  <router-view></router-view>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  // overflow;
  // -webkit-overflow-scrolling: touch;
  min-width: 280pX;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
}

// 路由切换动画
.fade-enter-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
