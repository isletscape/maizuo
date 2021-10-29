function getRem() {
  var html = document.querySelector('html') || document.documentElement
  var w = document.body.clientWidth || document.documentElement.clientWidth
  // 设置根元素字体
  // 视口宽度小于560，视为小屏设备，设计稿375
  // 视口宽度大于560，根元素大小设置为固定54px(参考flexible)
  html.style.fontSize = w < 560 ? 10 + 'vw' : 54 + 'px'
  // html.style.fontSize = 10 + 'vw'
}
getRem()
window.addEventListener('resize', function () {
  getRem()
})
