<template>
  <div class="xxx">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>

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
    <StyleSwitcher :changeTransitionName="changeTransitionName" />
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from '@vue/reactivity'
import StyleSwitcher from '@/style/StyleSwitcher.vue'

const iconSize = '22pX'
// 默认无过渡效果
const transitionName = ref('')
// 切换路由动画
const changeTransitionName = (transName) => {
  transitionName.value = transName
}
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
  color: var(--themeColor);
}
.icon{
  height: v-bind('iconSize');
  width: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.name {
  height: 15pX;
  line-height: 15pX;
  font-size: 10pX;
}

// fade-only
.fade-only-enter-active {
  transition: opacity .5s ease;
}
.fade-only-enter-from,
.fade-only-leave-to {
  opacity: 0;
}
// silde-fade
.slide-fade-enter-active {
  transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>


<style lang="less">
@import url('/src/style/root.css');
html,
body,
#app {
  min-width: 280pX;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
}
// vant样式
:root {
  --van-nav-bar-icon-color: #555;
  --van-nav-bar-height: 46pX !important;
  --van-tab-font-size:15pX !important;
  --van-tab-line-height:15pX  !important;  
}
.van-tabs__wrap,
.van-tabs__wrap scroll-view,
.van-tabs__nav,
.van-tab {
  height: 44pX !important;   
  background-color: #fff;
}
</style>