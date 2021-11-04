<template>
  <!-- 搜索结果列表 -->
  <ul class="result-list">
    <li v-for="item in citys" :key="item.cityID">
      {{ item.name }}
    </li>
  </ul>
</template>
<script setup>
import { toRefs } from 'vue'
// eslint-disable-next-line no-undef
const props = defineProps({
  citys: Array,
})
const { citys } = toRefs(props)

// //创建A-Z的锚点列表
// const anchors = ref([])
// for (var i = 0; i < 26; i++) {
//   anchors.value.push(String.fromCharCode(65 + i))
// }
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
