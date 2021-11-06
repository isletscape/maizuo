<template>
  <div id="cinema-cell">
    <div class="left">
      <div class="name">爱上；打飞机啊；打飞机去骗我诶风景</div>
      <div class="adress">发生的放弃我的皮肤废弃物地方i家2【法迪飞机啊都是</div>
    </div>
    <div class="right">
      <div class="price">
        ¥
        <span>49.9</span>
        起
      </div>
      <div class="distance">距离未知</div>
    </div>
  </div>
</template>

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