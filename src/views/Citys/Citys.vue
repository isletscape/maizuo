<template>
  <div id="citys">
    <!-- 固定头部区域 -->
    <header :style="{ height: `${offsettop}px` }">
      <div class="title">
        <div class="icon" @click="closepage">
          <van-icon name="cross" size="20px" />
        </div>
        当前城市
      </div>
      <van-search v-model="keyword" placeholder="请输入搜索关键词" />
    </header>

    <!-- 热门城市 -->
    <div class="hot-citys">
      <p>热门城市</p>
      <ul>
        <li>北京</li>
        <li>上海</li>
        <li>广州</li>
        <li>深圳</li>
      </ul>
    </div>

    <!-- 城市列表 -->
    <van-index-bar :sticky-offset-top="offsettop">
      <ul v-for="item in citys" :key="item.type">
        <van-index-anchor :index="item.type" />
        <li
          class="city-name"
          v-for="cityObj in item.list"
          :key="cityObj.cityId"
          @click="selectCity(cityObj)"
        >
          {{ cityObj.name }}
        </li>
      </ul>
    </van-index-bar>
  </div>
</template>

<script setup>
import Router from '@/router/index.js'
import { ref } from '@vue/reactivity'
import initCitys from '@/composables/initCitys.js'
import { watch } from '@vue/runtime-core'
import EventBus from '@/utils/EventBus/EventBus.js'

const k = ref(3782949)
const citys = ref([])
//顶部固定区域的高度
const offsettop = 100

//请求并处理城市列表数据
initCitys(citys, k)

// //创建A-Z的锚点列表
// const anchors = ref([])
// for (var i = 0; i < 26; i++) {
//   anchors.value.push(String.fromCharCode(65 + i))
// }

//搜索
const keyword = ref('')
watch(keyword, (keyword) => {
  console.log(keyword)
})

//选择某个城市
const selectCity = (currentCityObj) => {
  EventBus.emit('currentCityObj', currentCityObj)
  closepage()
}

//关闭页面
const closepage = () => {
  Router.push('/home')
}
</script>

<style lang="less" scoped>
header {
  z-index: 99;
  position: sticky;
  top: 0;
  height: 100px;
  background: #fff;

  .title {
    height: 44px;
    line-height: 44px;
    font-size: 17px;
    text-align: center;
    overflow: hidden;
    .icon {
      float: left;
      height: 100%;
      width: calc(height);
    }
  }
}

.hot-citys {
  p {
    font-size: 13px;
    color: #797d82;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    list-style: none;
    li {
      float: left;
      width: 30%;
      margin: 1.666665%;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      background-color: #f4f4f4;
      border-radius: 2px;
    }
  }
}
#citys {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.5);
}
.city-name {
  list-style: none;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  border-bottom: 1px solid #f4f4f4;
}
</style>
