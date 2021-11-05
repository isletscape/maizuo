<template>
  <p>cinema</p>

  <button @click="see">查看</button>
  <button @click="add">加1</button>
</template>

<script setup>
import { store } from '@/utils/store.js'

const see = () => {
  console.log(store.state)
}
const add = () => {
  store.commit('increment', { name: '上海', cityId: 1234, isHot: true })
}
</script>
