<template>
  <div id="mine">
    <div class="nav">
      <van-image
        round
        width="70pX"
        height="70pX"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        @click="loginAction"
      />
      <div class="nav-title" @click="loginAction">立即登录</div>
    </div>
    <!-- <div class="nav">
      <img class="nav-icon" src="" alt="" />
      <div class="nav-title">188****8888</div>
    </div> -->

    <div class="margin-set" @click="clickOn('unable')">
      <span class="label">卖座券</span>
      <div class="arrow">
        <Icon name="arrow" />
      </div>
    </div>
    <div class="margin-set" @click="clickOn('unable')">
      <span class="label">组合红包</span>
      <div class="arrow">
        <Icon name="arrow" />
      </div>
    </div>
    <div class="margin-set" @click="clickOn('unable')">
      <span class="label">余额</span>
      <div class="arrow">
        <Icon name="arrow" />
      </div>
    </div>
    <div class="margin-set" @click="clickOn('setting')">
      <span class="label">设置</span>
      <div class="arrow">
        <Icon name="arrow" />
      </div>
    </div>
    <div class="margin-set" @click="clickOn('singout')">
      <span class="label">退出登录</span>
      <div class="arrow">
        <Icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Image as VanImage } from 'vant'
import Icon from '@/icon/icon.vue'
import { Toast } from 'vant'

const loginAction = () => {
  console.log('login')
}
const clickOn = (type) => {
  console.log(type)
  switch (type) {
    case 'unable':
      Toast('暂未开放')
      break
    case 'setting':
      console.log('setting')
      break
    case 'singout':
      console.log('singout')
      break
    default:
      break
  }
}
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






