<template>
  <div class="container" ref="containerRef">
    <!-- 索引条 -->
    <div
      class="index-bar"
      :style="[indexBarStyle, indexBarTransStyle]"
      ref="indexBarRef"
    >
      <div class="indexCell" v-for="rowCount in numbersOfRows" :key="rowCount">
        {{ rowCount }}
      </div>
    </div>
    <!-- 座位区域 -->
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
import { hammerIt, tMatrix } from '@/utils/gestuter.js'

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
      width: cellSize.value * maxNumbersOfCells.value + 'pX',
      height: cellSize.value + 4 + 'pX',
    }
    cellStyle.value = {
      width: cellSize.value + 'pX',
      height: cellSize.value + 'pX',
    }
    indexBarStyle.value = {
      height: (cellSize.value + 4) * numbersOfRows.value + 'pX',
    }
  }
)

const indexBarTransStyle = computed(() => {
  return `transform: translate(0pX, ${tMatrix.value[5]}pX) scale(${tMatrix.value[3]})`
})
</script>

<style lang="less" scoped>

.container {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 239, 239);
  z-index: 9;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.index-bar {
  position:absolute;
  left: 3pX;
  background-color: rgba(141, 141, 141, 0.493);
  z-index: 99;
  width: 20pX;
  border-radius: 10pX;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  
}
.indexCell{
  width: 100%;
  text-align: center;
  font-size: 5pX;
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
  
}
</style>