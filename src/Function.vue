<template>
  <div class="transSwitcher">
    <div class="theme-color" @click="showColorBox = !showColorBox">
      <transition name="stretch-out">
        <div class="color-box" v-if="showColorBox">
          <div
            v-for="(color, index) in colorArray"
            :key="index"
            :style="{ backgroundColor: color }"
            @click="getColor(color)"
          ></div>
        </div>
      </transition>
    </div>
    <div @click="changeTransitionName('')">关闭动画</div>
    <div @click="changeTransitionName('fade-only')">淡入淡出</div>
    <div @click="changeTransitionName('slide-fade')">滑入滑出</div>
  </div>
</template>

<script setup>
import { ref, toRefs } from '@vue/reactivity'
import store from '@/store/'
// eslint-disable-next-line no-undef
const props = defineProps({
  changeTransitionName: Function,
})
const { changeTransitionName } = toRefs(props)
const showColorBox = ref(false)
const colorArray = ref([
  '#1989fa',
  'rgba(214, 26, 26)',
  'rgba(51, 51, 192)',
  'royalblue',
  'rgba(42, 129, 42)',
  'orangered',
])
const getColor = (color) => {
  document.body.style.setProperty('--themeColor', color)
  store.commit('changeThemeColor', color)
}
// 默认主题颜色
getColor('#1989fa')
</script>

<style lang="less" scoped>

.transSwitcher {
  position: fixed;
  bottom: 100pX;
  right: 10pX;
  text-align: right;
  color: #fff;
  width: 60pX;
  &>div{
    text-align: center;
    height: 15pX;
    line-height: 15pX;
    font-size: 12pX;
    margin: 2pX;
    padding: 2pX;
    border-radius: 3pX;
    background-color: rgba(34, 34, 34, 0.726);
 }
 .theme-color{
   height: 20pX;
   border-radius: 0;
   background-color: var(--themeColor);
   position: relative;
 }
}

// stretch-out
.color-box{
  color: orangered;
  background-color:black;
  position: absolute;
  bottom: 20pX;
  right: 0;
  width:100%;
  height: 120pX;
  overflow: hidden;
  &>div{
    height: 20pX;
  }
}
.stretch-out-enter-active, 
.stretch-out-leave-active {
  transition: all 1s ease;
}
.stretch-out-enter-from, 
.stretch-out-leave-to {
  height: 0;
}
</style>