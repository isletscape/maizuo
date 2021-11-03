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

<script setup>
import CitySelector from '@/components/CitySelector/CitySelector.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import Swipe from '@/components/Swipe/Swipe.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { swipeHeight } from '@/global_styles/GlobalStyles.js'
</script>

<style lang="less" scoped></style>
