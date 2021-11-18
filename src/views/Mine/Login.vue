<template>
  <div id="login">
    <div class="navbar">
      <van-icon class="backword" name="cross" size="27" @click="back" />
    </div>
    <van-form @submit="onSubmit" validate-trigger="onBlur">
      <van-cell-group inset>
        <van-field
          v-model="tel"
          name="tel"
          type="tel"
          placeholder="请输入手机号"
          :rules="[{ pattern, message: '请填写正确手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field name="checkboxGroup">
          <template #input>
            <van-checkbox name="1" v-model="keepLoginState" shape="square">
              保持登录状态
            </van-checkbox>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 30px">
        <van-button block type="primary" native-type="submit">登 陆</van-button>
      </div>
    </van-form>

    <van-cell title="账号:18888888888 密码:123456" style="margin: 15px" />
  </div>
</template>

<script setup>
import {
  Form as VanForm,
  Field as VanField,
  CellGroup as VanCellGroup,
  Button as VanButton,
  Cell as VanCell,
  Toast,
  Checkbox as VanCheckbox,
} from 'vant'
import { ref } from '@vue/reactivity'
import store from '@/store'
import router from '@/router/'

const tel = ref('')
const password = ref('')
const keepLoginState = ref(false)
// 手机号校验规则
const pattern = /^1[3456789]\d{9}$/

const onSubmit = () => {
  let second = 1
  const toast = Toast.loading({
    duration: 0,
    forbidClick: true,
  })
  // 模拟后台验证
  const timer = setInterval(() => {
    second--
    if (second) {
      toast.message = '正在登录...'
    } else {
      clearInterval(timer)
      Toast.clear()
      if (tel.value === '18888888888' && password.value === '123456') {
        verifySuccess()
      } else {
        verifyFailure()
      }
    }
  }, 1000)
}

const verifySuccess = () => {
  store.commit('updataUserInfo', {
    id: tel.value,
    keepLogin: keepLoginState.value,
  })
  if (router.currentRoute.value.params.fromPath) {
    router.push(router.currentRoute.value.params.fromPath)
  } else {
    router.push('/mine')
  }
  Toast('登录成功')
}

const verifyFailure = () => {
  Toast('帐号或密码错误')
}

const back = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
  #login {
    margin-top: 200pX;
  }
  .navbar{
    position: absolute;
    top: 20pX;
    left: 20pX;
  }
</style>