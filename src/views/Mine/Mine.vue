<template>
  <div id="mine">
    <div class="nav">
      <van-image
        round
        width="70pX"
        height="70pX"
        :src="
          store.state.userInfo
            ? require('@/assets/cat.png')
            : require('@/assets/default.png')
        "
        @click="loginAction"
      />
      <div class="nav-title" @click="loginAction">
        {{ store.state.userInfo ? store.state.userInfo.id : '立即登录' }}
      </div>
    </div>
    <van-cell
      title="优惠券"
      size="large"
      is-link
      value="需要登录验证"
      @click="clickOn('coupons')"
    />
    <van-cell
      title="余额"
      size="large"
      is-link
      value="暂未开放"
      @click="clickOn('unable')"
    />
    <van-cell
      title="设置"
      size="large"
      is-link
      value="暂未开放"
      @click="clickOn('unable')"
    />
    <van-cell
      title="退出登录"
      size="large"
      is-link
      v-if="store.state.userInfo"
      @click="clickOn('singout')"
    />
    <VanDialog />
  </div>
</template>

<script setup>
import { Toast, Dialog, Image as VanImage, Cell as VanCell } from 'vant'
import router from '@/router'
import store from '@/store'

const loginAction = () => {
  if (!store.state.userInfo) {
    router.push('/login')
  }
}

const clickOn = (type) => {
  switch (type) {
    case 'unable':
      Toast('暂未开放')
      break
    case 'coupons':
      router.push('/coupons')
      break
    case 'singout':
      Dialog.confirm({
        title: '确认退出账号',
      }).then(() => {
        store.commit('clearUserInfo')
        router.go(0)
      })

      break
    default:
      break
  }
}

const VanDialog = Dialog.Component
</script>

<style scoped>
#mine {
  background: #f4f4f4;
  height: 100vh;
}
.nav {
  height: 200pX;
  padding-left: 30pX;
  padding-top: 10pX;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #1989fa;
}

.nav .nav-title {
  font-size: 15pX;
  padding: 0 20pX;
}


.margin-set {
  background: #fff;
  padding: 0 15px;
  height: 49pX;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
}
.margin-set .icon {
  width: 20pX;
  height: 20px;
}
.margin-set .label {
  margin-left: 15pX;
  color: #191a1b;
  font-size: 14pX;
  flex: 1;
}
.margin-set .arrow {
  text-align: right;
  width: 15pX;
  height: 15pX;
}

</style>






