<template>
  <van-tabs>
    <van-tab title="正在热映">
      <van-list>
        <movie-cell
          v-for="item in movies"
          :key="item.flimID"
          :movie="item"
        ></movie-cell>
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
  props: {
    movies: Array,
  },
}
</script>
