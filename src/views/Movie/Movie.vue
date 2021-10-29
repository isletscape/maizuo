<template>
  <h1>movie</h1>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'Movie',
  created() {
    this.initMovies()
  },
  methods: {
    async initMovies() {
      const { data: res } = await request.get('/gateway', {
        params: {
          cityId: 130800,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 3819095,
        },
      })
      console.log(res)
    },
  },
}
</script>
