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

<style lang="less" scoped></style>
