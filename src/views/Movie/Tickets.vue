<template>
  <div id="tickets" v-if="allCinemaList">
    <!-- title -->
    <van-nav-bar
      title="影院列表"
      fixed
      placeholder
      left-arrow
      @click-left="goback"
    >
      <template #right></template>
    </van-nav-bar>
    <Sticky :offset-top="46">
      <!-- 筛选器 -->
      <div class="cinema-filter">
        <div class="cinema-filter-child" @click="popup(0)">
          {{ currentregion }}
          <van-icon name="arrow-down" />
        </div>
        <div class="cinema-filter-child" @click="popup(1)">
          去过
          <van-icon name="arrow-down" />
        </div>
      </div>
    </Sticky>
    <!-- 列表 -->
    <div class="cinema-list">
      <van-list finished-text="没有更多了">
        <CinemaCell
          v-for="item in regionCinemaList"
          :key="item.districtId"
          :cinema="item"
          @click="selectCinema(item.cinemaId)"
        />
      </van-list>
    </div>
  </div>
  <!-- 模态框 -->
  <van-popup
    v-model:show="show"
    position="top"
    close-on-click-overlay
    @click-overlay="closePopup"
  >
    <template #default>
      <Popup
        :region="regionList"
        :type="popupType"
        :selectRegion="handleSelectRegion"
      />
    </template>
  </van-popup>
</template>

<script setup>
import CinemaCell from '@/components/cinema_components/CinemaCell.vue'
import Popup from '@/components/cinema_components/Popup.vue'
import { ref } from '@vue/reactivity'
import { Sticky } from 'vant'
import { initCinemasList } from '@/composables/initCinemas.js'
import { useStore } from 'vuex'
import router from '@/router'

// const route = useRoute()
// const { filmId } = route.params
const { cityId } = useStore().state.currentCity
const allCinemaList = ref([])
const regionCinemaList = ref([])
const regionList = ref([])
const ticketFlag = 1
const k = 6748065
const currentregion = ref('全部')

initCinemasList(
  allCinemaList,
  regionCinemaList,
  regionList,
  cityId,
  ticketFlag,
  k
)

//选中地区的回调
const handleSelectRegion = (regionName) => {
  currentregion.value = regionName
  regionCinemaList.value = allCinemaList.value.filter((item) => {
    return item.districtName === regionName
  })
  closePopup()
}
const selectCinema = (cinemaId) => {
  router.push(`/cinema/${cinemaId}`)
}

//模态窗口
const popupType = ref(0)
const show = ref(false)
const popup = (type) => {
  show.value = true
  popupType.value = type
}
const closePopup = () => {
  show.value = false
}

const goback = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
@cinema-filter-height:44pX;
@placerholder-height :@cinema-filter-height + 46px;
.bordered {
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
}
.cinema-filter {
  display: flex;
  width: 100vw;
  height: @cinema-filter-height;
  .bordered();
  background-color: #fff;
  .cinema-filter-child {
    flex: 1;
    text-align: center;
    line-height: @cinema-filter-height;
    font-size: 14pX;
  }
} 

.cinema-list{
  position: sticky;
  width: 100vw;
}
</style>

<style lang="less">
  :root {
  --van-nav-bar-icon-color: #555;
 }
</style>