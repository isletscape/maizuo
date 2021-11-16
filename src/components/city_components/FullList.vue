<template>
  <!-- 全部城市列表 -->
  <div class="show-list">
    <IndexBar>
      <ul v-for="item in citys" :key="item.type">
        <IndexAnchor :index="item.type" />
        <li
          class="city-name"
          v-for="city in item.list"
          :key="city.cityId"
          @click="choseCity(city)"
        >
          {{ city.name }}
        </li>
      </ul>
    </IndexBar>
  </div>
</template>

<script setup>
import { useAttrs, onBeforeMount } from '@vue/runtime-core'
import { IndexBar, IndexAnchor } from 'vant'
const { citys, selectCity } = useAttrs()

const choseCity = (city) => {
  selectCity(city)
}

onBeforeMount(() => {
  document.getElementById('app').scrollIntoView()
})
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
