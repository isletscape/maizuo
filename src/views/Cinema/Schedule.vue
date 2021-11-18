<template>
  <div id="schedule" v-if="schedules">
    <!-- 导航栏 -->
    <div class="nav">
      <van-nav-bar :title="schedules.cinema.name">
        <template #left>
          <van-icon name="arrow-left" color="#323233" @click="goBack" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 通知条 -->
    <NoticeBar left-icon="volume-o" speed="30" :text="schedules.noticeMsg" />
    <!-- 座位表 -->
    <div class="SeatingChart" v-if="seatingChart">
      <SeatingChart :seatingChart="seatingChart" />
    </div>
    <!-- 底部区域 -->
    <div class="bottom">
      <div class="movie-hall-box">
        <div class="movie-info">
          <!-- 电影信息 -->
          <div class="content">
            <div class="name">{{ schedules.film.name }}</div>
            <div class="detail">
              {{ timestampToFullTime(schedules.showAt) }}
              |
              {{ schedules.imagery }}
            </div>
          </div>
          <!-- 场次开关 -->
          <div class="switcher" @click="switcherStatus = !switcherStatus">
            {{ switcherStatus ? '收起场次' : '显示场次' }}
          </div>
        </div>
        <!-- 场次信息 -->
        <div class="hall-list hall-order-list" v-if="switcherStatus">
          <div class="hall-cell hall-order-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
        </div>
        <!-- 座位订单信息 -->
        <div class="order-list hall-order-list" v-if="selectedSeats.length > 0">
          <div
            class="order-cell hall-order-cell"
            v-for="item in selectedSeats"
            :key="item.offerSeatId"
          >
            <div class="seat-id">{{ item.rowId }}排{{ item.columnId }}座</div>
            <div class="seat-price">
              ¥{{ (schedules.price.sale / 100).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
      <!-- 确认按钮 -->
      <div
        class="confirm-button"
        :style="{ color: selectedSeats.length > 0 ? '#fff' : '#f58f5e' }"
        @click="confirmSchedule"
      >
        {{ selectedSeats.length > 0 ? '付款' : '请先选座' }}
        {{ selectedSeats.length > 0 ? amount : '' }}
      </div>
    </div>
    <VanDialog />
  </div>
</template>


<script setup>
import { initSeatingChart, initSchedule } from '@/composables/initSchedule.js'
import { initSingleMovie } from '@/composables/initMovies.js'
import { computed, provide, ref, watch } from 'vue'
import { NoticeBar, Dialog } from 'vant'
import SeatingChart from '@/components/cinema_components/SeatingChart.vue'
import { timestampToFullTime } from '@/utils/time.js'
import { useRoute } from 'vue-router'
import router from '@/router'
import store from '@/store'

const VanDialog = Dialog.Component
const seatingChart = ref(null)
const schedules = ref(null)
const scheduleId = useRoute().params.id
const k = 9983952
// 默认不显示影厅列表
const switcherStatus = ref(false)
const movie = ref()

// 票务信息
initSchedule(schedules, scheduleId, k)
// 座次信息
initSeatingChart(seatingChart, scheduleId, k)
watch(schedules, (schedules) => {
  initSingleMovie(movie, schedules.film.filmId)
})

// 用户选中的座位数组
const selectedSeats = ref([])

// 选中座位总金额
const amount = computed(() => {
  return (
    (selectedSeats.value.length * schedules.value.price.sale) /
    100
  ).toFixed(2)
})
// 处理选择座位业务
const handleSelectSeat = (seatInfo, checked) => {
  if (checked) {
    selectedSeats.value.push(seatInfo)
  } else {
    selectedSeats.value = selectedSeats.value.filter((item) => {
      return item.offerSeatId !== seatInfo.offerSeatId
    })
  }
}
provide('selectSeatEvent', handleSelectSeat)

const confirmSchedule = () => {
  if (store.state.userInfo) {
    store.commit('saveOrderInfo', {
      movieName: movie.value.name,
      poster: movie.value.poster,
      cinemaName: schedules.value.cinema.name,
      date: timestampToFullTime(schedules.value.showAt),
      user: { tel: '188 8888 8888' },
      hallName: schedules.value.hall.name,
      seats: selectedSeats.value,
      amount: amount.value,
    })
  }
  router.push('/order')
}

const goBack = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
#schedule{
  overflow: hidden;
  // box-shadow: #ebedf0 0 4px 12px;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f4f4f4;
}

.SeatingChart {
  width: 100vw;
  height: 60vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}


.bottom {
  font-size: 12px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.movie-hall-box{
  border-radius: 2px;
  background-color: #fff;
  width: 90vw;
  overflow: hidden;
  padding: 0 10pX;
  margin-bottom: 10pX;
  .movie-info {
    height: 40pX;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 10pX;
    background-color: #fff;
    .content {
      flex: 1;
      .name {
        font-size: 16pX;
      }
      .detail {
        font-size: 12pX;
        color: gainsboro;
      }
    }
    .switcher {
      width: 70pX;
      background-color: rgba(184, 184, 184, 0.438);
      text-align: center;
      border-radius: 2pX;
    }
  }
}
.hall-order-list {
  white-space: nowrap;
  margin-bottom: 10pX;
  overflow: scroll;
  .hall-order-cell {
    display: inline-block;
    width: 60pX;
    height: 60pX;
    white-space: nowrap;
    height: 60pX;
    width:60pX;
    margin:7pX 0 7pX 7pX;
    background-color: #f8f8f8;
    text-align: center;
    padding-top: 10pX;
  }
}
.hall-cell {
  .time {
    font-size: 12pX;
    color: #191a1b;
  }
  .type {
    font-size: 13pX;
    color: #c5c8cc;
  }
  .price {
    font-size: 12pX;
    color: #7a7d82;
  }
}
.order-cell {
  .seat-id{
    height: 15pX;
    line-height: 15pX;
    font-size: 12pX;
    margin: 5pX 0;
  }
  .seat-price{
    font-size: 14pX;
    color: #f35e25;
  }
}

.confirm-button{
  height: 46pX;
  width: 100vw;
  background-color: #f35e25;
  text-align: center;
  line-height: 46pX;
  font-size: 18pX;
  color: #fff;
  // position: absolute;
  // bottom: 0;
}
</style>