<template>
  <div id="titlebar" :style="heightStyleObject" @click="onclick">标题</div>
</template>

<script>
// import { toRefs } from '@vue/reactivity'
import { titleBarHeight } from '@/utils/styles/style.js'
import { inject } from '@vue/runtime-core'

// import { ref } from '@vue/runtime-core'
export default {
  setup() {
    //样式绑定响应式对象
    const per = inject('offsetPercentage')

    const onclick = () => {
      console.log('title', per)
    }

    var heightStyleObject = {
      height: titleBarHeight + 'px',
      lineHeight: titleBarHeight + 'px',
      // top: -titleBarHeight + 3 + 'px',
    }

    return {
      heightStyleObject,
      onclick,
      per,
    }
  },
}
</script>

<style lang="less" scoped>
#titlebar {
  position: absolute;
  top: 0;
  background-color: skyblue;
  width: 100%;
  z-index: 999;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}
</style>
