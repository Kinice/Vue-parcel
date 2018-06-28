<template>
  <div id="app">
    你好啊
  </div>
</template>

<script>
import app from './app.js'

export default {
  name: 'App'
}
</script>

<style lang="less">
html, body, #app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
