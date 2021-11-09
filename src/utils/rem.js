/*
按照设计稿375设置根元素字体
视口宽度小于560，视为小屏设备，1rem = 10vw
视口宽度大于560，视为大屏设备，1rem = 54px (参考flexible的规则)
*/
function getRem() {
  var html = document.querySelector('html') || document.documentElement
  var w = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = w < 560 ? 10 + 'vw' : 54 + 'px'
}
getRem()
window.addEventListener('resize', function () {
  getRem()
})
