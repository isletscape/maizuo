// 设置根元素字体
function getRem() {
  var html = document.querySelector('html') || document.documentElement
  var w = document.body.clientWidth || document.documentElement.clientWidth
  // 按照设计稿375，设置根元素字体，
  // 视口宽度小于560，视为小屏设备，
  // 视口宽度大于560，根元素大小设置为固定54px(参考flexible)
  html.style.fontSize = w < 560 ? 10 + 'vw' : 54 + 'px'
}
getRem()
window.addEventListener('resize', function () {
  getRem()
})
