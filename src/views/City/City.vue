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
        当前城市
      </div>
      <van-search v-model="keyword" placeholder="请输入搜索关键词" />
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
import Router from '@/router/index.js'
import FullList from '@/components/city_components/FullList.vue'
import SearchResultList from '@/components/city_components/SearchResultList.vue'
import { useStore } from 'vuex'
const store = useStore()

//顶部固定区域的高度
const offsettop = 100
const k = ref(3782949)
var citys = ref([])
var serchResults = ref([])
//搜索关键字
const keyword = ref('')

//初始化城市数据
initCitys(citys, k)

//keyword改变实时触发生成检索结果
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

//选择城市的回调
const handleSelectCity = (city) => {
  store.commit('updateCurrentCity', city)
  closepage()
}

const closepage = () => {
  Router.push('/home')
}
</script>

<style lang="less" scoped>
#city {
  background-color: rgba(255, 255, 255, 0.5);
}
header {
  z-index: 99;
  position: sticky;
  top: 0;
  height: 100px;
  background: #fff;
}

.title {
  height: 44pX; /*no*/
  line-height: 44px;
  font-size: 17px;
  text-align: center;
  .colse_icon {
    float: left;
    top: 19/2px;
    left: 15px;
  }
}
</style>
