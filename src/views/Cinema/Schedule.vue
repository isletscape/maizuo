<template>
  <div id="schedule">
    <!-- nav -->
    <div class="nav">
      <van-nav-bar :title="schedules.cinema.name">
        <template #left>
          <van-icon name="arrow-left" color="#323233" @click="goBack" />
        </template>
      </van-nav-bar>
    </div>
    <NoticeBar left-icon="volume-o" speed="30" :text="schedules.noticeMsg" />
    <!-- 座位表 -->
    <div class="SeatingChart" v-if="seatingChart">
      <SeatingChart :seatingChart="seatingChart" :navHeight="navHeight" />
    </div>
    <!-- 底部区域 -->
    <div class="bottom">
      <div class="movie-hall-box">
        <div class="movie-info">
          <div class="content">
            <div class="name">{{ schedules.film.name }}</div>
            <div class="detail">
              {{ timestampToFullTime(schedules.showAt) }}
              |
              {{ schedules.imagery }}
            </div>
          </div>

          <div class="switcher" @click="switcherStatus = !switcherStatus">
            {{ switcherStatus ? '收起场次' : '显示场次' }}
          </div>
        </div>
        <div class="hall-list" v-if="switcherStatus">
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
          <div class="hall-cell">
            <div class="time">11:12</div>
            <div class="type">国语2D</div>
            <div class="price">¥21</div>
          </div>
        </div>
      </div>
      <div class="confirm-button">请先选座</div>
    </div>
  </div>
</template>


<script setup>
import { initSeatingChart, initSchedule } from '@/composables/initSchedule.js'
import { ref } from 'vue'
import { NoticeBar } from 'vant'
import SeatingChart from '@/components/cinema_components/SeatingChart.vue'
import { timestampToFullTime } from '@/utils/time.js'
// import SeatMap from '@/components/cinema_components/SeatMap.vue'
// import SeatSelect from '@/components/cinema_components/SeatSelect.vue'
// import store from '@/utils/store.js'
import { useRoute } from 'vue-router'
import router from '@/router'

const seatingChart = ref(null)
const schedules = ref(null)
const scheduleId = useRoute().params.id
const k = 9983952
//默认不显示影厅列表
const switcherStatus = ref(false)

//座次信息
initSeatingChart(seatingChart, scheduleId, k)
//票务信息
initSchedule(schedules, scheduleId, k)

const navHeight = ref(60)

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
  border: 1px solid cadetblue;
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
  .hall-list {
    
    white-space: nowrap;
    margin-bottom: 10pX;
    overflow: scroll;
 
    .hall-cell {
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
 
}
</style>