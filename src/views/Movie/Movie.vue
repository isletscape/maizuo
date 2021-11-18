<template>
  <div>
    <CitySelector />
    <TitleBar />
    <MovieSwipe />
    <TabBar />
  </div>
</template>

<script setup>
import CitySelector from '@/components/movie_components/CitySelector.vue'
import TabBar from '@/components/movie_components/TabBar.vue'
import MovieSwipe from '@/components/movie_components/MovieSwipe.vue'
import TitleBar from '@/components/movie_components/TitleBar.vue'
</script>
