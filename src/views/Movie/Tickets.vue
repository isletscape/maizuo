<template>
  <div id="tickets" v-if="cinemas">
    <van-nav-bar title="标题" left-arrow @click-left="goback">
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
      </template>
    </van-nav-bar>

    <van-tabs sticky>
      <template #nav-bottom>
        <div id="cinema-type">
          <div class="cinema-type-child" @click="choseCinemaType(0)">
            全部影院
            <van-icon name="arrow-down" />
          </div>
          <div class="cinema-type-child" @click="choseCinemaType(2)">
            去过的影院
            <van-icon name="arrow-down" />
          </div>
        </div>
      </template>
      <van-tab title="今天">
        <van-list finished-text="没有更多了">
          <CinemaCell
            v-for="item in cinemas"
            :key="item.districtId"
            :cinema="item"
            @click="selectCinema(item.cinemaId)"
          />
        </van-list>
      </van-tab>
      <van-tab title="明天">
        <van-list finished-text="没有更多了">
          <CinemaCell
            v-for="item in cinemas"
            :key="item.districtId"
            :cinema="item"
            @click="selectCinema(item.cinemaId)"
          />
        </van-list>
      </van-tab>
      <van-tab title="后天">
        <van-list finished-text="没有更多了">
          <CinemaCell
            v-for="item in cinemas"
            :key="item.districtId"
            :cinema="item"
            @click="selectCinema(item.cinemaId)"
          />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>

  <van-popup
    v-model:show="show"
    position="top"
    close-on-click-overlay
    @click-overlay="closePopup"
  >
    <!-- <template #default> -->
    <Popup
      :region="regionList"
      :type="filterType"
      :selectRegion="handleSelectRegion"
    />
    <!-- </template> -->
  </van-popup>
</template>

<script setup>
import CinemaCell from '@/components/cinema_components/CinemaCell.vue'
import Popup from '@/components/cinema_components/Popup.vue'
import { ref } from '@vue/reactivity'
import { initCinemasList } from '@/composables/initCinemas.js'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Router from '@/router'

// const route = useRoute()
// const { filmId } = route.params
const { cityId } = useStore().state.currentCity
const show = ref(false)
const cinemas = ref([])
const regionList = ref([])
const ticketFlag = 1
const k = 6748065
const filterType = ref(0)
initCinemasList(cinemas, regionList, cityId, ticketFlag, k)

//选中地区的回调
const handleSelectRegion = (regionName) => {
  cinemas.value = cinemas.value.filter((item) => {
    return item.districtName === regionName
  })
  closePopup()
}
const selectCinema = (cinemaId) => {
  Router.push(`/cinema/${cinemaId}`)
}

//模态窗口
const choseCinemaType = (type) => {
  show.value = true
  filterType.value = type
}
const closePopup = () => {
  show.value = false
}

const goback = () => {
  Router.go(-1)
}
</script>

<style lang="less" scoped>
#cinema-type {
  display: flex;
  height: 49pX;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
  .cinema-type-child {
    flex: 1;
    text-align: center;
    height: 49pX;
    line-height: 49pX;
    font-size: 14pX;
  }
} 
</style>

<style lang="less">
  :root {
  --van-nav-bar-icon-color: #555;
 }
</style>