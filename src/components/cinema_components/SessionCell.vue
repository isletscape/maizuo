<template>
  <div id="session-cell">
    <div class="time">
      <p class="time-start top-line">01：10</p>
      <p class="time-end bottom-line">01：11散场</p>
    </div>
    <div class="hall">
      <p class="hall-type top-line">英语3D</p>
      <p class="hall-id bottom-line">英语3D</p>
    </div>
    <div class="price">
      <span>¥</span>
      12.5
    </div>
    <div class="buy">购票</div>
  </div>
</template>

<style lang="less" scoped>
  #session-cell {
    display: flex;
    flex-flow: row nowrap;
    padding: 15pX;
    align-items: center;
  }
  .time {
    width: 84pX;
    
  }
  .hall{
    flex: 1;
  }
  .top-line {
      font-size: 15pX;
    }
  .bottom-line {
    margin-top: 2pX;
    font-size: 13pX;
    color: #797d82;
  }
  .price {
    width: 50pX;
    height: 25pX;
    line-height: 25pX;
    color: #ff5f16;
    font-size: 15pX;
    padding-right: 10pX;
    span {
      font-size: 10pX;
    }
  }
  .buy {
    width: 50pX;
    height: 25pX;
    border: 1px solid #ff5f16;
    border-radius: 2px;
    font-size: 14pX;
    line-height: 25pX;
    color: #ff5f16;
    text-align: center;
  }
</style>