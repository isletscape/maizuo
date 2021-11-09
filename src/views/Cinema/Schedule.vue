<template>
  <div id="schedule">
    <!-- nav -->
    <div class="nav">
      <van-nav-bar title="选座购票">
        <template #left>
          <van-icon name="arrow-left" color="#323233" @click="goBack" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 座次图 -->
    <div class="seats-container" v-if="seatingChart">
      <div class="screen-bar"></div>
      <div class="seats" :style="[seatsStyle]" ref="seatsRef">
        <div class="slide-bar" :style="[slideBarStyle]" ref="slideBarRef">
          123
        </div>
        <div class="row" v-for="rowIndex in rows" :key="rowIndex">
          <div
            class="column"
            v-for="columIndex in colums"
            :key="columIndex"
            :style="[columnStyle]"
          >
            <Seat
              v-if="
                seatingChart.seats.some((item) => {
                  return (
                    String(item.rowNum) === String(rowIndex) &&
                    String(item.columnNum) === String(columIndex)
                  )
                })
              "
              :info="
                seatingChart.seats.filter((item) => {
                  return (
                    String(item.rowNum) === String(rowIndex) &&
                    String(item.columnNum) === String(columIndex)
                  )
                })
              "
            ></Seat>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { initSeatingChart, initSchedule } from '@/composables/initSchedule.js'
import { computed, ref, watch } from 'vue'

import { useRoute } from 'vue-router'
import Seat from '@/components/cinema_components/Seat.vue'
import Router from '@/router'

import { zoomElement } from '@/utils/zoom.js'

const seatingChart = ref(null)
const schedules = ref(null)
const scheduleId = useRoute().params.id
const k = 9983952
const rows = ref([])
const colums = ref([])

//单个座位的尺寸
const seatSize = ref(20)

const seatsRef = ref(null)
const slideBarRef = ref(null)
// const sildeToLeft = ref(0)

// onUpdated(() => {
//   // sildeToLeft.value = slideBarRef.value.getBoundingClientRect().left
// })
watch(seatsRef, (seatsRef) => {
  console.log('watch seatsRef', seatsRef)
  zoomElement(seatsRef)
})

// const mousedown = (e) => {
//   console.log('mousedown', e.x)
// }
// const mousemove = (e) => {
//   console.log('mousemove', e.x)
// }
// const mouseup = (e) => {
//   console.log('mouseup', e.x)
// }
// const touchstart = (e) => {
//   console.log('mousedown', e)
// }
// const touchmove = (e) => {
//   console.log('mousemove', e)
// }
// const touchend = (e) => {
//   console.log('mouseup', e)
// }

const columnStyle = computed(() => {
  return {
    width: seatSize.value + 'px',
    height: seatSize.value + 'px',
  }
})
const seatsStyle = computed(() => {
  console.log(seatingChart.value.width, seatingChart.value.height)
  return {
    width: seatingChart.value.width * (seatSize.value + 4) + 'px',
    height: seatingChart.value.height * (seatSize.value + 4) + 'px',
    margin: 200 + 'px',
  }
})
const slideBarStyle = computed(() => {
  return {
    width: seatSize.value + 'px',
    height: rows.value.length * (seatSize.value + 4) + 'px',
  }
})
// watch(rows, (rows) => {
//   slideBarStyle.value = {
//     width: seatSize.value + 'px',
//     height: rows.length * seatSize.value + 'px',
//   }
// })

watch(seatingChart, (seatingChart) => {
  rows.value = Array.from(Array(seatingChart.height).keys()).map(
    (item) => item + 1
  )
  colums.value = Array.from(Array(seatingChart.width).keys()).map(
    (item) => item + 1
  )
})

//座次信息
initSeatingChart(seatingChart, scheduleId, k)
//票务信息
initSchedule(schedules, scheduleId, k)

const goBack = () => {
  Router.go(-1)
}
</script>

<style lang="less" scoped>
@column-size:16px;
@container-padding:150px;
.seats-container {
  border: 1px solid cadetblue;
  width: 100vw;
  height: 100vw;
  box-sizing: border-box;
  overflow: scroll;
  position: relative;
}
.slide-bar {
  position:absolute;

  // top: 30;
  background-color: sienna;
  float: left;

}
.seats {
  background-color: rgba(70, 131, 180, 0.377);
  
}
.row {
  box-sizing: border-box;
  height: 24px;
}
.column {
  // float: left;
  display: inline-block;
  vertical-align: top;
  margin: 2px;
}

</style>