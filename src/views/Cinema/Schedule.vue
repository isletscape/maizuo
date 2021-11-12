<template>
  <div id="schedule">
    <!-- nav -->
    <div class="nav" :style="[navStyle]">
      <van-nav-bar title="选座购票">
        <template #left>
          <van-icon name="arrow-left" color="#323233" @click="goBack" />
        </template>
      </van-nav-bar>
    </div>
    <!-- seats-box -->
    <div class="SeatingChart" v-if="seatingChart">
      <SeatingChart :seatingChart="seatingChart" :navHeight="navHeight" />
    </div>
    <!-- <SeatMap
      v-if="seatingChart"
      :seatingChart="seatingChart"
      height="300px"
    ></SeatMap> -->
    <!-- <SeatSelect
      v-if="seatingChart"
      :seatingChart="seatingChart"
      height="300px"
    ></SeatSelect> -->
  </div>
</template>


<script setup>
import { initSeatingChart, initSchedule } from '@/composables/initSchedule.js'
import { ref } from 'vue'
import SeatingChart from '@/components/cinema_components/SeatingChart.vue'
// import SeatMap from '@/components/cinema_components/SeatMap.vue'
// import SeatSelect from '@/components/cinema_components/SeatSelect.vue'

import { useRoute } from 'vue-router'
import Router from '@/router'

const seatingChart = ref(null)
const schedules = ref(null)
const scheduleId = useRoute().params.id
const k = 9983952
//座次信息
initSeatingChart(seatingChart, scheduleId, k)
//票务信息
initSchedule(schedules, scheduleId, k)

const navHeight = ref(60)

const navStyle = {
  height: navHeight.value + 'px',
}

const goBack = () => {
  Router.go(-1)
}
</script>

<style lang="less" scoped>
.SeatingChart {
  border: 1px solid cadetblue;
  width: 100vw;
  height: 60vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.schedule{
  overflow: hidden;
  box-shadow: #ebedf0 0 4px 12px;
  width: 100vw;
  height: 100vh;
}
.nav {
  height: 50px;
}
</style>