<template>
  <div id="movieCell-box" @click="cilckOn('电影详情', movie.filmId)">
    <!-- 电影图片 -->
    <div class="movieCell-thumb">
      <img :src="movie.poster" alt="" />
    </div>
    <!-- 电影信息 -->
    <div class="movieCell-content">
      <div class="title">
        <div class="name">{{ movie.name }}</div>
        <div class="type">{{ movie.filmType.name }}</div>
      </div>
      <div class="grade">
        <div>
          观众评分：
          <span class="score">{{ movie.grade }}</span>
        </div>
      </div>
      <div class="staring">主演：{{ actors }}</div>
      <div class="info">{{ movie.nation }} | {{ movie.runtime }}分钟</div>
    </div>
    <!-- 购票按钮 -->
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
#movieCell-box {
  height: 94pX;
  margin-left: 15pX;
  padding: 15pX 15pX 15pX 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.movieCell-thumb {
  width: 66pX;
  height: 97.5pX;
  img {
    width: 100%;
    height: 100%;
  }
}
.movieCell-content {
  font-size: 13pX;
  color: #797d82;
  padding: 0 10px 0 10px;
  flex: 1;
  height: 81pX;
  overflow: hidden;
  .title {
    height: 22pX;
    display: flex;
    align-items: center;

    .name {
      font-size: 16pX;
      color: #555;
      margin-right: 3pX;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
    height: 21pX;
    .score {
      font-size: 14pX;
      color: #ffb232;
    }
  }
  .staring {
    height: 19pX;
    width: 100%;
    padding: 0;
    line-height: 19pX;
    font-size: 13pX;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    height: 19pX;
    line-height: 19pX;
    font-size: 13pX;
  }
}
.movieCell-operating {
  button {
    width: 50pX;
    height: 25pX;
    line-height: 25pX;
    font-size: 13pX;
    text-align: center;
    border: 1px solid #1989fa;
    border-radius: 2px;
    color: #1989fa;
    padding: 0;
    background-color: #fff;
  }
}
</style>
