<template>
  <!-- 全部城市列表 -->
  <div class="show-list">
    <!-- <div class="hot-citys">
        <p>热门城市</p>
        <ul>
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>深圳</li>
        </ul>
      </div> -->
    <!-- :sticky-offset-top="offsettop" -->
    <van-index-bar>
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
import EventBus from '@/utils/EventBus/EventBus.js'
import Router from '@/router/index.js'
import { toRefs } from '@vue/reactivity'

// eslint-disable-next-line no-undef
const props = defineProps({
  citys: Array,
  keyword: String,
})
//直接使用es6解构props会导致失去响应，使用toRefs保留响应
const { citys } = toRefs(props)

//选择某个城市
const selectCity = (currentCityObj) => {
  EventBus.emit('currentCityObj', currentCityObj)
  closepage()
}

// 关闭页面
const closepage = () => {
  Router.push('/home')
}
</script>

<style lang="less" scoped>
.show-list {
  padding: 0 15px 0 15px;
}
.hot-citys {
  p {
    font-size: 13px;
    color: #797d82;
  }
  ul {
    overflow: hidden;
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
.city-name {
  list-style: none;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  border-bottom: 1px solid #f4f4f4;
}
</style>
