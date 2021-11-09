<template>
  <div class="screen">
    <div class="screen-body" id="screenBody">
      <div class="screen-table" id="screenTable">我是Johu我能拖动还能缩放</div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
export default {
  name: 'ScreenJQ',
  data() {
    return {
      scaleFloor: 1,
      scaleStep: 0.1,
      preDownPos: {},
    }
  },
  mounted() {
    const docScreen = $('#screenBody')
    docScreen.on('mousewheel DOMMouseScroll', this.scrollFunc)
    docScreen.on('mousedown', this.downFunc)
    docScreen.on('mouseup', this.upFunc)
  },
  methods: {
    scrollFunc(e) {
      e = e || window.event
      if (e.originalEvent.wheelDelta) {
        // IE/Opera/Chrome
        this.mouseScroll(e.originalEvent.wheelDelta)
      } else if (e.originalEvent.detail) {
        // Firefox
        this.mouseScroll(-e.originalEvent.detail)
      }
    },
    downFunc() {
      $('#screenBody').on('mousemove', this.moveFunc)
      this.preDownPos = this.getMousePos()
    },
    moveFunc() {
      const mosPostion = this.getMousePos()
      this.moveScreenTable(
        mosPostion.x - this.preDownPos.x,
        mosPostion.y - this.preDownPos.y
      )
      this.preDownPos = this.getMousePos()
    },
    upFunc() {
      $('#screenBody').off('mousemove', this.moveFunc)
    },
    moveScreenTable(x, y) {
      const docScreen = document.getElementById('screenTable')
      let moveX = this.getPixelValue(docScreen, 'left')
      let moveY = this.getPixelValue(docScreen, 'top')
      moveX += x
      moveY += y
      $('#screenTable')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
    },
    mouseScroll(step) {
      if (step > 0) {
        this.scaleFloor += this.scaleStep
      } else if (step < 0 && this.scaleFloor > this.scaleStep * 2) {
        this.scaleFloor -= this.scaleStep
      }
      if (this.scaleFloor > 0) {
        $('#screenTable').css('transform', 'scale(' + this.scaleFloor + ')')
      } else {
        $('#screenTable').css('transform', '')
      }
    },
    getMousePos(event) {
      const e = event || window.event
      const x = e.clientX - document.getElementById('screenBody').offsetLeft
      const y = e.clientY - document.getElementById('screenBody').offsetTop
      return { x: x, y: y }
    },
    getPixelValue(doc, key) {
      return Number(doc.style[key].replace('px', ''))
    },
  },
}
</script>

<style lang="less" scoped>
  .screen{
    height: 100%;
    display: flex;
    .screen-body{
      position: relative;
      width: 100%;
      background: #E6E6E6;
      overflow: hidden;
      .screen-table{
        width: 200px;
        height: 200px;
        position: absolute;
        background: #ffffff;
        left: 0;
        top: 0;
        z-index: 9;
        box-shadow: 0px 0px 20px #7b7b7b;
        overflow: hidden;
      }
    }
  }
</style>