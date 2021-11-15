<template>
  <div id="hall-cell" @click="onCilckHall">
    <div class="time">
      <div class="time-start top-line">{{ showAt }}</div>
      <div class="time-end bottom-line">{{ endAt }}散场</div>
    </div>
    <div class="hall">
      <div class="hall-type top-line">
        {{ hall.filmLanguage }}{{ hall.imagery }}
      </div>
      <div class="hall-id bottom-line">{{ hall.hallName }}</div>
    </div>
    <div class="price">
      <span>¥</span>
      {{ price }}
    </div>
    <div class="buy">购票</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { timestampToTime } from '@/utils/time.js'

// eslint-disable-next-line no-undef
const props = defineProps({
  hall: Object,
  selectHall: Function,
})
// const { hall } = toRefs(props)
// const spaceIndex = timestampToDate(hall.value.showAt).indexOf(' ')
const onCilckHall = () => {
  props.selectHall(props.hall.scheduleId)
}

const showAt = timestampToTime(props.hall.showAt)
const endAt = timestampToTime(props.hall.endAt)
// const b = props.hall.hallName.indexOf('（')
// const hallName = props.hall.hallName
const price = String(props.hall.salePrice).slice(0, 2)
</script>

<style lang="less" scoped>
  #hall-cell {
    display: flex;
    flex-flow: row nowrap;
    padding: 15pX;
    align-items: center;
  }
  .time {
    width: 84pX;
    margin-right: 10pX;
  }
  .hall{
    flex: 1;
  }
  .top-line {
      font-size: 14pX;
      height: 21pX;
      line-height: 21pX;
    }
  .bottom-line {
    margin-top: 2pX;
    font-size: 10pX;
    color: #797d82;
  }
  .price {
    width: 50pX;
    height: 25pX;
    line-height: 25pX;
    color: #ff5f16;
    font-size: 15pX;
    padding-right: 10pX;
    span {
      font-size: 10pX;
    }
  }
  .buy {
    width: 50pX;
    height: 25pX;
    border: 1px solid #ff5f16;
    border-radius: 2px;
    font-size: 14pX;
    line-height: 25pX;
    color: #ff5f16;
    text-align: center;
  }
</style>ian1