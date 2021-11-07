<template>
  <div id="cinema-cell">
    <div class="left">
      <div class="name">{{ cinema.name }}</div>
      <div class="adress">{{ cinema.address }}</div>
    </div>
    <div class="right">
      <div class="price">
        ¥
        <span>{{ cinema.lowPrice }}</span>
        起
      </div>
      <div class="distance">{{ cinema.Distance }}公里</div>
    </div>
  </div>
</template>

<script setup>
import { useAttrs } from '@vue/runtime-core'

const { cinema } = useAttrs()
</script>

<style lang="less" scoped>
#cinema-cell {
  display: flex;
  flex-flow: row nowrap;
  height: 75pX;
  padding: 10pX;
  padding-bottom: 0;
}
.left {
  flex:1;
  text-align: left;
  .name {
    height: 22pX;
    line-height: 22pX;
    font-size: 15pX;
    margin-bottom: 5pX;
  }
  .adress {
    height: 19pX;
    font-size: 13pX;
    color: #797d82;
  }
}
.right {
  min-width: 80pX;
  text-align: center;
  .price {
    height: 22pX;
    line-height: 22pX;
    color:#ff5f16;
    font-size: 8pX;
    margin-bottom: 5pX;
    span {
      font-size: 15pX;
    }
  }
  .distance {
    color: #797d82;
    font-size: 10pX;
    height: 19pX;
  }
}

</style>