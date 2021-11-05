<template>
  <!-- 搜索结果列表 -->
  <ul class="result-list">
    <li v-for="city in citys" :key="city.cityID" @click="onClickCity(city)">
      {{ city.name }}
    </li>
  </ul>
</template>
<script setup>
import { useAttrs } from '@vue/runtime-core'

const { citys, selectCity } = useAttrs()

//选择某个城市
const onClickCity = (city) => {
  selectCity(city)
}
</script>

<style lang="less" scoped>
ul {
  padding: 0 15px 0 15px;
}
li {
  list-style: none;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  border-bottom: 1px solid #f4f4f4;
}
</style>
