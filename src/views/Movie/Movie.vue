<template>
  <h1>movie</h1>
</template>

<script>
import { getMovie } from '@/api/api.js'
export default {
  name: 'Movie',
  created() {
    this.initMovies()
  },
  methods: {
    async initMovies() {
      const { data: res } = await getMovie(130800, 1, 10)

      console.log(res)
    },
  },
}
</script>
