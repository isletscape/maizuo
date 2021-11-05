<template>
  <h1>mine</h1>
  <button @click="see">查看</button>
  <button @click="add">加1</button>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const see = () => {
  console.log(store.state)
}
const add = () => {
  store.commit('increment')
}
</script>
