import Hammer from 'hammerjs'
import { ref } from 'vue'

const tMatrix = ref([])
export { tMatrix }
export function hammerIt(el) {
  var reqAnimationFrame = (function () {
    return (
      window[Hammer.prefixed(window, 'requestAnimationFrame')] ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
  tMatrix.value = [1, 0, 0, 1, 0, 0] // x缩放，无，无，y缩放，x平移，y平移

  var initScale = 1 // 初始化scale
  var mc = new Hammer.Manager(el)
  var ticking = false
  var poscenter = point2D(0, 0) // 缓存双指的中心坐标
  var duration = '' // 设置过渡效果，用于双击缩放效果
  var lastTranslate = point2D(0, 0) // 记录上次的偏移值

  var lastcenter = point2D(el.offsetWidth / 2, el.offsetHeight / 2) // 图像的中心点，用于对比双指中心点

  var center = lastcenter
  mc.add(new Hammer.Pan({ threshold: 0, pointers: 1 }))
  mc.add(new Hammer.Pinch({ threshold: 0 }))
  mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }))
  mc.on('panmove', onPan)
  mc.on('panstart', onPanStart)
  mc.on('pinchmove', onPinch)
  mc.on('pinchstart', onPinchStart)
  // mc.on('doubletap', onDoubleTap)

  function point2D(x, y) {
    return { x: x, y: y }
  }
  function onPanStart() {
    lastTranslate = point2D(tMatrix.value[4], tMatrix.value[5]) // 缓存上一次的偏移值
  }
  function onPan(ev) {
    duration = ''
    el.className = ''
    tMatrix.value[4] = lastTranslate.x + ev.deltaX
    tMatrix.value[5] = lastTranslate.y + ev.deltaY
    requestElementUpdate('onpan')
  }
  function onPinchStart(ev) {
    duration = ''
    lastTranslate = point2D(tMatrix.value[4], tMatrix.value[5]) // 记录上一次的偏移值
    initScale = tMatrix.value[0] || 1
    poscenter = point2D(ev.center.x, ev.center.y)

    lastcenter = point2D(center.x + lastTranslate.x, center.y + lastTranslate.y) // 重新计算放大后的中心坐标
    poscenter = point2D(ev.center.x - lastcenter.x, ev.center.y - lastcenter.y)
    requestElementUpdate('onpinchStart')
  }
  function onPinch(ev) {
    // eslint-disable-next-line no-unused-vars
    var nowScale = (tMatrix.value[0] = tMatrix.value[3] = initScale * ev.scale)
    // eslint-disable-next-line no-unused-vars
    var composscal = 1 - ev.scale
    tMatrix.value[4] =
      poscenter.x -
      ((poscenter.x - lastcenter.x) * ev.scale + lastcenter.x) +
      lastTranslate.x // 最后加上上一次的偏移值
    tMatrix.value[5] =
      poscenter.y -
      ((poscenter.y - lastcenter.y) * ev.scale + lastcenter.y) +
      lastTranslate.y
    tMatrix.value[4] = (1 - ev.scale) * poscenter.x + lastTranslate.x
    tMatrix.value[5] = (1 - ev.scale) * poscenter.y + lastTranslate.y
    requestElementUpdate('onpinch')
  }

  // function onDoubleTap(ev) {
  //   duration = '.3s ease all'
  //   var nowScale = tMatrix.value[0]
  //   if (nowScale != 1 || tMatrix.value[4] != 0) {
  //     //scale不等于1，要重回1
  //     tMatrix.value[0] = tMatrix.value[3] = 1
  //     tMatrix.value[4] = tMatrix.value[5] = 0
  //   } else {
  //     var pointer = ev.center
  //     var scale = 2
  //     tMatrix.value[0] = tMatrix.value[3] = scale
  //     //var last = point2D
  //     //tMatrix.value[4] = pointer.x - ((pointer.x-lastcenter.x) * scale + lastcenter.x);
  //     //tMatrix.value[5] = pointer.y - ((pointer.y-lastcenter.y) * scale + lastcenter.y);
  //     tMatrix.value[4] = (1 - scale) * (pointer.x - center.x)
  //     tMatrix.value[5] = (1 - scale) * (pointer.y - center.y)
  //   }
  //   requestElementUpdate('doubleTap')
  // }

  function updateElementTransform() {
    el.style.transition = duration
    var tmp = tMatrix.value.join(',')

    el.style.transform = 'matrix(' + tmp + ')'
    ticking = false
  }

  function requestElementUpdate() {
    // arguments && console.log(arguments[0])

    if (!ticking) {
      reqAnimationFrame(updateElementTransform)
      ticking = true
    }
  }

  requestElementUpdate()
}
