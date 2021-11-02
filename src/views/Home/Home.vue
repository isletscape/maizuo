<template>
  <!-- 主页面 -->
  <div id="home">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/movie" icon="gem-o">电影</van-tabbar-item>
      <van-tabbar-item replace to="/cinema" icon="shop-o">影院</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
#home {
  height: 100vh;
}
</style>
