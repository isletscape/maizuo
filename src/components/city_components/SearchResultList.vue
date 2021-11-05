<template>
  <!-- 搜索结果列表 -->
  <ul class="result-list">
    <li v-for="city in citys" :key="city.cityID" @click="onClickCity(city)">
      {{ city.name }}
    </li>
  </ul>
</template>
<script setup>
import { toRefs } from 'vue'
import { useAttrs } from '@vue/runtime-core'

// eslint-disable-next-line no-undef
const props = defineProps({
  citys: Array,
})
const { citys } = toRefs(props)
const { selectCity } = useAttrs()

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
