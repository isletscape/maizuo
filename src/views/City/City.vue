<template>
  <div id="city">
    <!-- 固定头部区域 -->
    <header :style="{ height: `${offsettop}px` }">
      <div class="title">
        <van-icon
          class="colse_icon"
          name="cross"
          size="25px"
          @click="closepage"
        />
        当前城市-{{ cityName }}
      </div>
      <Search v-model="keyword" placeholder="请输入搜索关键词" />
    </header>

    <!-- 全部城市列表 -->
    <FullList
      v-if="keyword === ''"
      :citys="citys"
      :selectCity="handleSelectCity"
    />
    <!-- 搜索结果列表 -->
    <SearchResultList
      v-if="keyword !== ''"
      :citys="serchResults"
      :selectCity="handleSelectCity"
    />
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import initCitys from '@/composables/initCitys.js'
import router from '@/router/index.js'
import { Search } from 'vant'
import FullList from '@/components/city_components/FullList.vue'
import SearchResultList from '@/components/city_components/SearchResultList.vue'
import { useStore } from 'vuex'
const store = useStore()

const k = ref(3782949)
var citys = ref([])
var serchResults = ref([])
//搜索关键字
const keyword = ref('')

//城市数据
initCitys(citys, k)

//检索结果
watch(keyword, (keyword) => {
  // if (keyword === '') return (serchResults.value = [])
  serchResults.value = []
  citys.value.forEach((item) => {
    serchResults.value = [
      ...serchResults.value,
      ...item.list.filter((i) => {
        return i.pinyin.includes(keyword) || i.name.includes(keyword)
      }),
    ]
  })
})
const { name: cityName } = useStore().state.currentCity
const handleSelectCity = (city) => {
  store.commit('updateCurrentCity', city)
  closepage()
}
const closepage = () => {
  router.push('/movie')
}

//顶部固定区域的高度
const offsettop = 100
</script>

<style lang="less" scoped>
#city {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
}
header {
  z-index: 99;
  position: sticky;
  top: 0;
  height: 100pX;
  background: #fff;
}

.title {
  height: 44pX; /*no*/
  line-height: 44pX;
  font-size: 17pX;
  text-align: center;
  .colse_icon {
    float: left;
    top: 19/2pX;
    left: 15pX;
  }
}
</style>
