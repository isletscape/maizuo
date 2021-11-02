<template>
  <CitySelector></CitySelector>
  <TitleBar></TitleBar>
  <Swipe :height="swipeHeight">
    <template v-slot:citySelector>
      <button class="citySelector">city</button>
    </template>
  </Swipe>
  <TabBar></TabBar>
</template>

<script>
import CitySelector from '@/components/CitySelector/CitySelector.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import Swipe from '@/components/Swipe/Swipe.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { swipeHeight } from '@/utils/styles/style.js'

export default {
  name: 'Movie',
  components: {
    CitySelector,
    TabBar,
    Swipe,
    TitleBar,
  },
  setup() {
    return {
      swipeHeight,
    }
  },
}
</script>

<style lang="less" scoped>
// #citySelector {
//   position: fixed;
//   top: 18px;
//   left: 7px;
//   color: #fff;
//   // width: 38px;
//   height: 30px;
//   padding: 0 5px 0 5px;
//   font-size: 13px;
//   background-color: rgba(0, 0, 0, 0.2);
//   border-radius: 15px;
//   border: none;
//   outline-style: none;
//   z-index: 20;
// }
</style>
