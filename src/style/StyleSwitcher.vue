<template>
  <div id="styleSwitcher">
    <!-- 颜色盒子 -->
    <div class="color-box-container" @click="showColorBox = !showColorBox">
      <transition name="stretch-out">
        <div class="color-box" v-show="showColorBox">
          <div
            v-for="(color, index) in colorArray"
            :key="index"
            :style="{ backgroundColor: color }"
            @click="changeThemeColor(color)"
          ></div>
        </div>
      </transition>
    </div>
    <!-- 路由动画开关 -->
    <div
      v-for="(item, index) in ['none', 'fade-only', 'slide-fade']"
      :key="index"
      :style="{
        backgroundColor: index === selectedIndex ? currentColor : '',
      }"
      @click="changeTransitionName(item), getIndex(index)"
    >
      {{ item }}
    </div>
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
  '#DC143C',
  '#800080',
  '#2E8B57',
  '#FF8C00',
  '#20B2AA',
])

const selectedIndex = ref(0)
const getIndex = (index) => {
  selectedIndex.value = index
}

// 路由选择按钮样式
const currentColor = ref('')
const temp = colorArray.value

const changeThemeColor = (color) => {
  // 获取当前颜色
  currentColor.value = color
  // 将选中的颜色从数组中去掉，获取当前颜色变量
  colorArray.value = temp.filter((item) => {
    return item !== color
  })
  // 设置全局css变量
  document.body.style.setProperty('--themeColor', color)
  // 更新sotre
  store.commit('changeThemeColor', color)
}
// 默认颜色
changeThemeColor(colorArray.value[0])
</script>

<style lang="less" scoped>
@color-box-size:30pX;
#styleSwitcher {
  position: fixed;
  bottom: 100pX;
  right: 10pX;
  color: #fff;
  &>div{
    text-align: center;
    height: 15pX;
    line-height: 15pX;
    font-size: 12pX;
    margin:2pX 0;
    padding: 2pX;
    border-radius: 3pX;
    background-color: rgba(34, 34, 34, 0.726);
 }
 .color-box-container{
   background-color: var(--themeColor);
   padding: 0;
   margin: 0;
   border-radius: 0;
   position: absolute;
   right: 0;
   top: -@color-box-size;
   width: 100%;
   height: @color-box-size;
 }
}

.color-box{
  position: absolute;
  right: 0;  
  bottom: @color-box-size;
  width: 100%;
  height:@color-box-size*5;
  overflow: hidden;
  &>div{
    height: @color-box-size;
  }
}
// stretch-out
.stretch-out-enter-active, 
.stretch-out-leave-active {
  transition: all .4s ease;
}
.stretch-out-enter-from, 
.stretch-out-leave-to {
  height: 0;
  opacity: 0;
}
</style>