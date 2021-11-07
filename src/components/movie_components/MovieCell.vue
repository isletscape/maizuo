<template>
  <div id="movieCell-box" @click="cilckOn('电影详情', movie.filmId)">
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
        <!-- <span>主演：xxx</span> -->
        <span>主演：{{ actors }}</span>
      </div>
      <div class="info">
        <span>{{ movie.nation }}</span>
        |
        <span>{{ movie.runtime }}分钟</span>
      </div>
      <p></p>
    </div>
    <div class="movieCell-operating">
      <button @click.stop="cilckOn('购票', movie.filmId)">购票</button>
    </div>
  </div>
</template>
<script setup>
import { useAttrs } from '@vue/runtime-core'

// eslint-disable-next-line no-undef
const props = defineProps({
  movie: {
    type: Object,
    default() {
      return {
        poster: {
          type: String,
          default: '',
        },
        actors: {
          type: [Array, Object],
          required: false,
        },
      }
    },
  },
})
const actors = props.movie.actors
  ? props.movie.actors
      .map((item) => {
        return item.name
      })
      .join(',')
  : '暂无信息'

const { clickAction } = useAttrs()

const cilckOn = (type, filmId) => {
  clickAction(type, filmId)
}
</script>

<style lang="less" scoped>
span {
  display: inline-block;
  height: 100%;
}
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
    height: 22px;
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
    height: 21px;
    .score {
      font-size: 14px;
      color: #ffb232;
    }
  }
  .staring {
    height: 19px;
    padding: 0;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    height: 19px;
    font-size: 16px;
  }
}
.movieCell-operating {
  button {
    width: 50px;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    text-align: center;
    border: 1px solid #1989fa;
    border-radius: 2px;
    color: #1989fa;
    padding: 0;
    background-color: #fff;
  }
}
</style>
