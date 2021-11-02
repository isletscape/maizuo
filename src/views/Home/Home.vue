<template>
  <!-- 主页面 -->
  <router-view></router-view>
  <van-tabbar route fixed placeholder>
    <van-tabbar-item replace to="/movie" icon="gem-o">电影</van-tabbar-item>
    <van-tabbar-item replace to="/cinema" icon="shop-o">影院</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
