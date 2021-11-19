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
        <div class="content-name">{{ movieName }}</div>
        <div class="content-common">{{ date }}</div>
        <div class="content-common">{{ cinemaName }}</div>
        <div class="content-common">{{ hallName }}{{ seatsString }}</div>
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
      button-text="提交"
      @submit="submitOrder"
      :disabled="disabled"
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
import { Toast } from 'vant'

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

const disabled = ref(false)
const submitOrder = () => {
  let second = 3
  const toast = Toast.loading({
    duration: 0,
    forbidClick: true,
  })
  // 模拟后台验证
  const timer = setInterval(() => {
    second--
    if (second) {
      toast.message = '等待支付结果...'
    } else {
      clearInterval(timer)
      toast.clear()
      Toast('支付成功')
      countDown.pause()
      disabled.value = true
    }
  }, 1000)
}

const countDown = useCountDown({
  time: 30 * 1000, // 倒计时 10 秒
  onFinish: () => {
    Dialog.alert({
      title: '支付超时',
      message: '订单已失效，请重新确认订单',
    }).then(() => {
      router.go(-1)
    })
  },
})
countDown.start()
const { current } = countDown

const back = () => {
  router.go(-1)
}
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
  padding: 15pX;
  .poster{
    width: 85pX;
    height: 117pX;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 1;
    font-size: 13pX;
    margin: 0 10pX;
    &>div{
      margin-bottom: 5pX;
    }
    .content-name {
      font-size: 16pX;
      color: #111;
      margin-bottom: 10pX;
    }
    .content-common {
      color: #797d82;
      font-size: 13pX;
      line-height: 15pX;
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
