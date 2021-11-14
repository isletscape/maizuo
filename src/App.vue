<template>
  <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view> -->
  <router-view></router-view>

  <nav v-if="router.currentRoute.value.meta.showNav">
    <router-link to="/movie" class="link">
      <van-icon class="icon" name="gem-o" size="20pX" />
      <div class="name">电影</div>
    </router-link>
    <router-link to="/cinemas" class="link">
      <van-icon class="icon" name="shop-o" size="20pX" />
      <div class="name">影院</div>
    </router-link>
    <router-link to="/mine" class="link">
      <van-icon class="icon" name="manager-o" size="20pX" />
      <div class="name">我的</div>
    </router-link>
  </nav>
</template>
<script setup>
import router from '@/router'
// import { ref } from '@vue/reactivity'
// import { nextTick, provide } from '@vue/runtime-core'

// const isRouterAlive = ref(true)
// const reload = () => {
//   isRouterAlive.value = false
//   nextTick(() => {
//     isRouterAlive.value = true
//   })
// }
// provide('reload', reload)
</script>


<style lang="less" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 44pX;
  line-height: 44pX;
  text-align: center;
  background: #fff;
  border-top: 1px solid #ededed;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: stretch;
}

.link {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100%;
  width: 33.33vw;
  flex: 1;
  font-size: 12pX;
  color: #1989fa;
}
.icon {
  height: 20pX;;
}
.name {
  height: 15pX;
  line-height: 15pX;
  font-size: 10pX;
}
</style>


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
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>