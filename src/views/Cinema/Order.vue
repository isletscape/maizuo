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
        <span class="custom-title">{{ tel }}</span>
      </template>
      <template #label>
        <span class="custom-title">温馨提示：请确认您的订单信息</span>
      </template>
    </cell>

    <div class="movie-info">
      <div class="poster">
        <img :src="poster" alt="" />
      </div>
      <div class="content">
        <p class="content-name">{{ movieName }}</p>
        <p class="content-common">{{ date }}</p>
        <p class="content-common">{{ cinemaName }}</p>
        <p class="content-common">{{ hallName }}{{ seatsString }}</p>
      </div>
    </div>
    <cell class="price" title="金额" :value="`¥${amount}`" />

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

    <submit-bar
      :price="Number(amount) * 100"
      button-text="提交订单"
      @submit="submitOrder"
    />

    <van-dialog />
  </div>
</template>

<script setup>
import { useCountDown } from '@vant/use'
import { Dialog } from 'vant'
import { Cell, CellGroup, SubmitBar } from 'vant'
import store from '@/store'
import router from '@/router'
import { ref } from '@vue/reactivity'
const VanDialog = Dialog.Component

const {
  user: { tel },
  poster,
  movieName,
  date,
  cinemaName,
  hallName,
  seats,
  amount,
} = store.state.orderInfo

const seatsString = ref('')
seats.forEach((item) => {
  seatsString.value += item.rowId + '排' + item.columnId + '座' + '  '
})
// {{ item.rowId }}排{{ item.columnId }}座
const submitOrder = () => {}

const back = () => {
  router.go(-1)
}
const countDown = useCountDown({
  time: 30 * 1000, // 倒计时 10 秒
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

.count-down{
  color: #f3632a;
}
  .custom-title {
    margin-left: 10pX;
    vertical-align: middle;
  }
</style>
