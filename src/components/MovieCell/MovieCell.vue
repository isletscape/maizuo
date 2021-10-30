<template>
  <div id="movieCell-box">
    <div class="movieCell-thumb">
      <img :src="movie.poster" alt="" />
    </div>
    <div class="movieCell-content">
      <div class="title">
        <span class="name">{{ movie.name }}</span>
        <span class="type">{{ movie.filmType.name }}</span>
      </div>
      <div class="grade">
        <span>
          观众评分：
          <span class="score">{{ movie.grade }}</span>
        </span>
      </div>
      <div class="staring">
        <span>主演：{{ actors.join(',') }}</span>
        <!-- <span>主演：{{ actors.length }}</span> -->
      </div>
      <div class="info">
        <span>{{ movie.nation }}</span>
        |
        <span>{{ movie.runtime }}分钟</span>
      </div>
      <p></p>
    </div>
    <div class="movieCell-operating">
      <button>购票</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MovieCell',
  props: {
    movie: Object,
  },
  setup(props) {
    const actors = props.movie.actors.map((item) => {
      return item.name
    })
    return {
      actors,
    }
  },
}
</script>
<style lang="less" scoped>
#movieCell-box {
  height: 94px;
  margin-left: 15px;
  padding: 15px 15px 15px 0;
  display: flex;
  align-items: center;
}

.movieCell-thumb {
  width: 66px;
  height: 97.5px;
  img {
    width: 100%;
    height: 100%;
  }
}
.movieCell-content {
  font-size: 13px;
  color: #797d82;
  padding: 0 10px 0 10px;
  flex: 1;
  height: 81px;
  overflow: hidden;
  .title {
    display: flex;
    align-items: center;
    .name {
      font-size: 16px;
      color: #555;
      margin-right: 3px;
    }
    .type {
      background-color: lightgray;
      margin: 0 2px 0 2px;
      color: #fff;
      border-radius: 2px;
      padding: 2px;
    }
  }
  .grade {
    .score {
      font-size: 14px;
      color: #ffb232;
    }
  }
  .staring {
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.movieCell-operating {
  button {
    width: 50px;
    height: 25px;
    font-size: 13px;
    border: 1px solid #ff5f16;
    border-radius: 2px;
    color: #ff5f16;
    background-color: #fff;
  }
}
</style>
