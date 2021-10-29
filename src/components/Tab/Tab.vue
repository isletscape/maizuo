<template>
  <van-tabs v-model:active="active">
    <van-tab title="正在热映">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <movie-cell></movie-cell>
        <movie-cell></movie-cell>
        <movie-cell></movie-cell>
        <movie-cell></movie-cell>
      </van-list>
    </van-tab>
    <van-tab title="即将上映">内容 2</van-tab>
  </van-tabs>
</template>

<script>
import MovieCell from '@/components/MovieCell/MovieCell.vue'
export default {
  name: 'Tab',
  components: {
    MovieCell,
  },
}
</script>
