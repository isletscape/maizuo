<template>
  <ul class="type-0" v-if="type === 0">
    <li v-for="(item, index) in region" :key="index">
      <div class="city-name">{{ item }}</div>
    </li>
  </ul>
  <ul class="type-1 costom" v-if="type === 1">
    <li>APP订票</li>
    <li>前台兑换</li>
  </ul>
  <ul class="type-2 costom" v-if="type === 2">
    <li>最近去过</li>
    <li>离我最近</li>
  </ul>
</template>

<script setup>
// import { useAttrs } from '@vue/runtime-core'

// eslint-disable-next-line no-undef
const props = defineProps({
  type: Number,
  region: Array,
})
props
</script>

<style lang="less" scoped>
.type-0{
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  li {
    display: block;
    box-sizing: border-box;
    width: 25%;
    font-size: 12pX;
    padding: 5pX;
    .city-name{
      margin: 0;
      height: 30pX;
      line-height: 30pX;
      text-align: center;
      color: #797d82;
      border: 1px solid #797d82;
      border-radius: 2pX;
    }
  }
}
.costom{
  li {
    height: 30pX;
    line-height: 30pX;
    font-size: 16pX;
    text-indent: 1em;
  }
}
</style>