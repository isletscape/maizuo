<template>
  <div class="hall-warpper">
    <div class="hall" :style="styles" :class="className">
      <div class="hall-text">123</div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  styles: String,
  className: {
    type: Object,
    default: () => ({}),
  },
})
props
</script>

<style lang="less" scoped>
.hall {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: center;
  left: 50%;
  position: relative;
  top: 0;
  z-index: 2;
}

.hall-text {
  color: #c9c9c9;
  font-size: 12px;
  margin-top: -18px;
  text-align: center;
  white-space: nowrap;
}
  
</style>