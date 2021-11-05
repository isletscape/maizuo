<template>
  <div id="citys">
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
import EventBus from '@/utils/EventBus/EventBus.js'

//顶部固定区域的高度
const offsettop = 100
//请求参数
const k = ref(3782949)
//城市列表
const citys = ref([])
//搜索关键字
const keyword = ref('')
//搜索结果列表
var serchResults = ref([])

//请求并处理城市列表数据
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
const handleSelectCity = (city) => {
  EventBus.emit('currentCity', city)
  closepage()
}
// 关闭页面
const closepage = () => {
  Router.push('/home')
}
</script>

<style lang="less" scoped>
#citys {
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
  height: 44px;
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
