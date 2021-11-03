<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
}
.fade-enter-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
