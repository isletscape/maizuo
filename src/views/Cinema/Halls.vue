<template>
  <!-- tab分页 -->
  <van-tabs class="hall-tabs" @click-tab="changeTab" v-model:active="active">
    <van-tab
      class="hall-tab"
      v-for="(showDate, index) in showDates"
      :key="index"
      :source="showDate"
      :title="String(timestampToDate(showDate))"
    >
      <!-- 影厅列表 -->
      <van-list v-if="hallList" finished-text="没有更多了">
        <HallCell
          v-for="hall in hallList"
          :key="hall.scheduleId"
          :hall="hall"
          :selectHall="handleSelectHall"
        />
      </van-list>
      <div class="no-data" v-else>暂无数据</div>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Tab as VanTab, Tabs as VanTabs } from 'vant'
import { timestampToDate } from '@/utils/time.js'
import { initMovieHallList } from '@/composables/initCinemas.js'
import { onMounted, onUnmounted, watch } from '@vue/runtime-core'
import HallCell from '@/components/cinema_components/HallCell.vue'
import router from '@/router/index.js'

const route = useRoute()
const store = useStore()
const hallList = ref([])
const active = ref(0)

//当前电影Id
const movieId = computed(() => {
  return Number(route.params.movieId)
})
//当前影院Id
const cinemaId = computed(() => {
  return Number(route.params.cinemaId)
})
//上映日期数组
const showDates = computed(() => {
  return store.state.currentMovie.showDate
})

// 切换电影时刷新数据
watch(movieId, (val) => {
  if (isNaN(val) || val === null) {
    return
  }
  // 回到第一个标签页
  active.value = 0
  initMovieHallList(
    hallList,
    movieId.value,
    cinemaId.value,
    showDates.value[0],
    8767641
  )
})

// 点击切换标签页刷新数据
const changeTab = () => {
  initMovieHallList(
    hallList,
    movieId.value,
    cinemaId.value,
    showDates.value[0],
    8767641
  )
}
const handleSelectHall = (scheduleId) => {
  router.push(`/schedule/${scheduleId}`)
}
// 刷新页面重新请求数据
onMounted(() => {
  if (sessionStorage.getItem('hall_params')) {
    const status = JSON.parse(sessionStorage.getItem('hall_params'))
    initMovieHallList(
      hallList,
      status.movieId,
      status.cinemaId,
      status.showDate,
      8767641
    )
  } else {
    initMovieHallList(
      hallList,
      movieId.value,
      cinemaId.value,
      showDates.value[0],
      8767641
    )
  }
})
onUnmounted(() => {
  sessionStorage.removeItem('hall_params')
}),
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(
      'hall_params',
      JSON.stringify({
        cinemaId: cinemaId.value,
        movieId: movieId.value,
        showDate: showDates.value[0],
      })
    )
  })
</script>

<style lang="less" scoped>

 .no-data {
   text-align: center;
   font-size: 14pX;
   color: gainsboro;
   margin-top: 100pX;
   
 } 
</style>