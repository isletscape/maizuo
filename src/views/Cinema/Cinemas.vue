<template>
  <div id="cinema">
    <van-nav-bar title="影院">
      <template #left>{{ name }}</template>
      <template #right>
        <van-icon name="search" size="18" color="#333" />
      </template>
    </van-nav-bar>

    <div>
      <div id="cinema-filter">
        <div class="cinema-filter-child" @click="popup(0)">
          {{ currentregion }}
          <van-icon name="arrow-down" />
        </div>
        <div class="cinema-filter-child" @click="popup(1)">
          APP订票
          <van-icon name="arrow-down" />
        </div>
        <div class="cinema-filter-child" @click="popup(2)">
          最近去过
          <van-icon name="arrow-down" />
        </div>
      </div>
    </div>

    <van-list class="cinema-list" finished-text="没有更多了">
      <CinemaCell
        v-for="item in regionCinemaList"
        :key="item.cinemaId"
        :cinema="item"
        @click="choseCinema(item.cinemaId)"
      />
    </van-list>
  </div>

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
import { ref } from '@vue/reactivity'
import Popup from '@/components/cinema_components/Popup.vue'
import CinemaCell from '@/components/cinema_components/CinemaCell.vue'
import { initCinemasList } from '@/composables/initCinemas.js'
import { useStore } from 'vuex'
import Router from '@/router/index.js'

const { cityId, name } = useStore().state.currentCity
const ticketFlag = 1
const k = 7845835
const allCinemaList = ref([])
const regionList = ref([])
const regionCinemaList = ref([])
const currentregion = ref('全部')

//初始化电影院列表，地区列表
initCinemasList(
  allCinemaList,
  regionCinemaList,
  regionList,
  cityId,
  ticketFlag,
  k
)

//去往购票页
const choseCinema = (cinemaId) => {
  Router.push(`/cinema/${cinemaId}`)
}
//pop选择地区的回调
const handleSelectRegion = (regionName) => {
  currentregion.value = regionName
  regionCinemaList.value = allCinemaList.value.filter((item) => {
    return item.districtName === regionName
  })
  closePopup()
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
</script>

<style lang="less" scoped>
  #cinema-filter {
  display: flex;
  height: 49pX;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
    .cinema-filter-child {
    flex: 1;
    text-align: center;
    height: 49pX;
    line-height: 49pX;
    font-size: 14pX;
  }
}

</style>