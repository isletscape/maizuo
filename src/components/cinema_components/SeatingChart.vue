<template>
  <div class="container" ref="containerRef">
    <!-- 索引条 -->
    <div class="index-bar" :style="[indexBarStyle, indexBarAnimation]">
      <div class="index-cell" v-for="rowCount in numbersOfRows" :key="rowCount">
        {{ rowCount }}
      </div>
    </div>
    <!-- 座位区域 -->
    <div class="seats" ref="seatsRef">
      <!-- 行 -->
      <div
        class="row"
        v-for="rowIndex in numbersOfRows"
        :key="rowIndex"
        :style="[rowStyle]"
      >
        <!-- 格 -->
        <div
          class="cell"
          v-for="cellIndex in maxNumbersOfCells"
          :key="cellIndex"
          :style="[cellStyle]"
        >
          <!-- 座位 -->
          <Seat
            v-if="
              seatingChart.seats.some((item) => {
                return (
                  String(item.rowNum) === String(rowIndex) &&
                  String(item.columnNum) === String(cellIndex)
                )
              })
            "
            :info="
              seatingChart.seats.filter((item) => {
                return (
                  String(item.rowNum) === String(rowIndex) &&
                  String(item.columnNum) === String(cellIndex)
                )
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { hammerIt, hammerObj } from '@/utils/gestuter.js'
import Seat from '@/components/cinema_components/Seat.vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  seatingChart: Object,
})

const seatsRef = ref(null)
const containerRef = ref(null)
// const indexBarRef = ref(null)

// 横排的总数量（矩阵高度）
const numbersOfRows = ref(props.seatingChart.height)
// 所有横排中格子数量最多的单元格格数（矩阵宽度）
const maxNumbersOfCells = ref(props.seatingChart.width)

// 横排样式
const rowStyle = ref(null)
// 每个格子的样式
const cellStyle = ref(null)
// 索引栏样式
const indexBarStyle = ref(null)
// 单元格尺寸
const cellSize = ref(null)
// 索引条宽度
const indexBarWidth = ref(20)

watch(seatsRef, (seatsRef) => {
  cellSize.value =
    document.documentElement.clientWidth / maxNumbersOfCells.value - 4
  // 添加手势
  hammerIt(seatsRef)

  rowStyle.value = {
    width: cellSize.value * maxNumbersOfCells.value + 'pX',
    height: cellSize.value + 4 + 'pX',
  }
  cellStyle.value = {
    width: cellSize.value + 'pX',
    height: cellSize.value + 'pX',
  }
  indexBarStyle.value = {
    width: indexBarWidth.value + 'pX',
    height: (cellSize.value + 4) * numbersOfRows.value + 'pX',
  }
})

const indexBarAnimation = computed(() => {
  return `transform: translate(${
    (indexBarWidth.value / 2) * hammerObj.value[3]
  }pX, ${hammerObj.value[5]}pX) scale(${hammerObj.value[3]})`
})
</script>

<style lang="less" scoped>

.container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  z-index: 9;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.index-bar {
  position:absolute;
  // left: 5pX;
  background-color: rgba(141, 141, 141, 0.493);
  z-index: 99;
  border-radius: 10pX;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.index-cell{
  height: 20pX;
  width: 100%;
  text-align: center;
  font-size: 5pX;
  
}

.seats { 
  position: absolute;          
  display: block;       
}
.row {
  box-sizing: border-box;
  white-space: nowrap;
}
.cell {
  // float: left;
  display: inline-block;
  vertical-align: top;
  margin: 2pX;
  
}
</style>