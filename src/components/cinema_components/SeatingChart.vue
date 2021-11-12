<template>
  <!-- 座次图 -->
  <div class="container" ref="containerRef">
    <div
      class="index-bar"
      :style="[indexBarStyle, indexBarTransStyle]"
      ref="indexBarRef"
    ></div>
    <div class="seats" ref="seatsRef">
      <div
        class="row"
        v-for="rowIndex in numbersOfRows"
        :key="rowIndex"
        :style="[rowStyle]"
      >
        <div
          class="cell"
          v-for="cellIndex in maxNumbersOfCells"
          :key="cellIndex"
          :style="[cellStyle]"
        >
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
          ></Seat>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
// import { useAttrs } from 'vue'
import Seat from '@/components/cinema_components/Seat.vue'
import { hammerIt, tMatrix } from '@/utils/zoom2.js'

// eslint-disable-next-line no-undef
const props = defineProps({
  seatingChart: Object,
  navHeight: Number,
})

const seatsRef = ref(null)
const containerRef = ref(null)
const indexBarRef = ref(null)

//横排的总数量（矩阵高度）
const numbersOfRows = ref(props.seatingChart.height)
//所有横排中格子数量最多的单元格格数（矩阵宽度）
const maxNumbersOfCells = ref(props.seatingChart.width)

//横排样式
const rowStyle = ref(null)
//每个格子的样式
const cellStyle = ref(null)
//索引栏样式
const indexBarStyle = ref(null)
//座位间距
// const seatMargin = 2
//单元格尺寸
const cellSize = ref(null)

watch(
  [seatsRef, containerRef, indexBarRef],
  ([seatsRef, containerRef, indexBarRef]) => {
    indexBarRef

    cellSize.value =
      containerRef.getBoundingClientRect().width / maxNumbersOfCells.value - 4

    hammerIt(seatsRef)

    rowStyle.value = {
      width: cellSize.value * maxNumbersOfCells.value + 'px',
      height: cellSize.value + 4 + 'px',
    }
    cellStyle.value = {
      width: cellSize.value + 'px',
      height: cellSize.value + 'px',
    }
    indexBarStyle.value = {
      width: 15 + 'px',
      height: (cellSize.value + 4) * numbersOfRows.value + 'px',
    }
  }
)

// pinchScale
const indexBarTransStyle = computed(() => {
  return `transform: translate(0px, ${tMatrix.value[5]}px) scale(${tMatrix.value[3]})`
})
</script>

<style lang="less" scoped>

.container {
  width: 100%;
  height: 100%;
  background-color: gray;
  z-index: 99;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.index-bar {
  position:absolute;
  background-color: rgba(87, 143, 196, 0.884);
  z-index: 99;
}


.seats {
  background-color: steelblue;    
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
  background-color: cadetblue;
}
</style>