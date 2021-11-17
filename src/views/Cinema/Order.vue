<template>
  <div id="order">
    <van-nav-bar title="标题" left-arrow fixed placeholder>
      <template #left>
        <van-icon name="arrow-left" color="#444" @click="back" />
      </template>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <span class="count-down" v-if="current.seconds > 0">
          {{ current.seconds }}
        </span>
      </template>
    </van-nav-bar>

    <cell center>
      <!-- 使用 title 插槽来自定义标题 -->

      <template #icon>
        <van-icon name="sign" size="30pX" />
      </template>
      <template #title>
        <span class="custom-title">188 8888 8888</span>
      </template>
      <template #label>
        <span class="custom-title">温馨提示：请确认您的订单信息</span>
      </template>
    </cell>

    <div class="movie-info">
      <div class="poster">
        <img src="@/assets/poster.jpg" alt="" />
      </div>
      <div class="content">
        <p class="content-name">铁道英雄(2D订座票)</p>
        <p class="content-common">星期五 2021-11-19 11:05</p>
        <p class="content-common">大地影院（大红门合生广场店）</p>
        <p class="content-common">6号厅(影厅冠名招商)(1张)</p>
      </div>
    </div>
    <cell class="price" title="商品金额" value="¥12.15" />

    <cell-group>
      <cell icon="bill-o" title="代金券" value="0张可用" size="large" is-link />
      <cell icon="balance-pay" title="余额" size="large" is-link />
      <cell
        icon="coupon-o"
        title="发票"
        value="不开发票"
        size="large"
        is-link
      />
    </cell-group>

    <cell-group class="notice-message" inset>
      <cell
        title="单元格"
        label="描述信息述信息述信息述/n${``}信息述信息述信息述信息述信息述信息述信息述信息述信息述信息述信息述信息述信息述信息述信息"
      />
    </cell-group>

    <submit-bar :price="3050" button-text="提交订单" @submit="submitOrder" />

    <van-dialog />
  </div>
</template>

<script setup>
import { useCountDown } from '@vant/use'
import { Dialog } from 'vant'
import { Cell, CellGroup, SubmitBar } from 'vant'

import router from '@/router'
const VanDialog = Dialog.Component

const submitOrder = () => {}

const back = () => {
  router.go(-1)
}
const countDown = useCountDown({
  time: 10 * 1000, // 倒计时 10 秒
  onFinish: () => {
    Dialog.alert({
      title: '标题',
      message: '弹窗内容',
    }).then(() => {
      // on close
    })
  },
})
countDown.start()
const { current } = countDown
</script>

<style lang="less" scoped>
#order{
  height: 100vh;
  background-color: #f4f4f4;
}
.movie-info{
  display: flex;
  flex-flow: row nowrap;
  background-color: #fff;
  margin-top: 14pX;
  .poster{
    width: 85pX;
    height: 117pX;
    margin: 15pX;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .content {
    font-size: 13pX;
    .content-name {
      font-size: 16pX;
      color: #111;
    }
    .content-common {
      color: #797d82;
      font-size: 13pX;
      line-height: 10pX;
    }
  }
}
.price{
  margin-bottom: 14pX;
}
.notice-message{
  margin-top: 15pX;
}
.count-down{
  color: #f3632a;
}
  .custom-title {
    margin-left: 10pX;
    vertical-align: middle;
  }
</style>
