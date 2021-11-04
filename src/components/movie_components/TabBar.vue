<template>
  <van-tabs sticky :offset-top="titleBarHeight" @scroll="onScroll">
    <Tab :type="1" :city="130100" title="正在热映"></Tab>
    <Tab :type="2" :city="652900" title="xxx"></Tab>
  </van-tabs>
</template>

<script setup>
// import { ref } from 'vue'
import EventBus from '@/utils/EventBus/EventBus.js'
import { titleBarHeight, swipeHeight } from '@/global_styles/GlobalStyles.js'
import Tab from '@/components/movie_components/Tab/Tab.vue'

// const type = ref(1)

const onScroll = (swipe) => {
  //注册监听滚动距离
  EventBus.emit(
    'scrollPercentage',
    swipe.scrollTop / (swipeHeight - titleBarHeight)
  )
}

// function xxx() {
//   var cityID = ref(110100)
//   var pageNum = ref(1)
//   var pageSize = ref(10)
//   var type = ref(1)
//   var loading = ref(false)
//   var finished = ref(false)
//   var movies_x = ref([
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//     {
//       poster: 'asd',
//       name: 'asd',
//       filmType: {
//         name: 'asd',
//       },
//       grade: 123,
//       actors: [{ name: '123' }, { name: '123' }, { name: '123' }],
//       nation: 'asd',
//       runtime: 123,
//     },
//   ])
//   var movies = ref([])
//   var movies_2 = ref([])

//   initMovies(movies, cityID, pageNum, pageSize, type, loading, finished)

//   //默认加载页面触发一次,上滑到底部再次触发
//   // const onLoad = () => {
//   // initMovies(movies, cityID, pageNum, pageSize, type, loading, finished)
//   // }

//   const changeTab = (_, tabName) => {
//     if (tabName === '即将上映') {
//       type.value = 2
//       loading.value = false
//       finished.value = false
//       initMovies(
//         movies_2,
//         cityID,
//         pageNum,
//         pageSize,
//         type,
//         loading,
//         finished
//       )
//     }
//     console.log('m2.data', movies_2.value)
//   }

//   const onScroll = (swipe) => {
//     EventBus.emit('tabScrollTop', swipe.scrollTop)
//   }
//   return {
//     movies,
//     loading,
//     finished,
//     // onLoad,
//     onScroll,
//     changeTab,
//     titleBarHeight,
//     swipeHeight,
//     movies_x,
//     movies_2,
//   }
// }
</script>
