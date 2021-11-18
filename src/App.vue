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
      <van-icon class="icon" name="gem-o" :size="iconSize" />
      <div class="name">电影</div>
    </router-link>
    <router-link to="/cinemas" class="link">
      <van-icon class="icon" name="shop-o" :size="iconSize" />
      <div class="name">影院</div>
    </router-link>
    <router-link to="/mine" class="link">
      <van-icon class="icon" name="manager-o" :size="iconSize" />
      <div class="name">我的</div>
    </router-link>
  </nav>
</template>
<script setup>
import router from '@/router'

const iconSize = '22pX'
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
  min-width: 280pX;
  height: 40pX;
  line-height: 44pX;
  padding: 5pX 0;
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
.icon{
  height: v-bind('iconSize');
}
.name {
  height: 15pX;
  line-height: 15pX;
  font-size: 10pX;
}
</style>


<style lang="less" scoped>
@import url('/src/style/root.css');

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

:root {
  // 导航栏高度
  --van-nav-bar-icon-color: #555;
  --van-nav-bar-height: 46pX !important;
  --van-tab-font-size:15pX !important;
  --van-tab-line-height:15pX  !important;
}
// van-tabs 设置高度
.van-tabs__wrap,
.van-tabs__wrap scroll-view,
.van-tabs__nav,
.van-tab {
  height: 44pX !important;   
  background-color: #fff;
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