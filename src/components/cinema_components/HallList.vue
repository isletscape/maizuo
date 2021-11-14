<template>
  <!-- 影厅列表 -->
  <van-list v-if="hallList.length > 0" finished-text="没有更多了">
    <HallCell v-for="hall in hallList" :key="hall.scheduleId" :hall="hall" />
  </van-list>
  <div class="no-data" v-else>暂无数据</div>
</template>

<script setup>
import { defineProps, ref, toRefs, watch } from 'vue'
import HallCell from '@/components/cinema_components/HallCell.vue'
import { initMovieHallList } from '@/composables/initCinemas.js'

// eslint-disable-next-line no-undef
const props = defineProps({
  movieId: Number,
  cinemaId: Number,
  showDate: Number,
})
const hallList = ref([])

const { movieId, cinemaId, showDate } = toRefs(props)

watch([movieId], ([movieId]) => {
  initMovieHallList(hallList, movieId, cinemaId.value, showDate.value, 8767641)
})
</script>


<style lang="less" scoped>
 .no-data {
   text-align: center;
   font-size: 14pX;
   color: gainsboro;
 } 
</style>