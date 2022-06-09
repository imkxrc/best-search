<!--
 * @Author: ‘Yongsheng Huang 113082408@qq.com
 * @Date: 2022-06-08 10:17:26
 * @LastEditors: ‘Yongsheng Huang 113082408@qq.com
 * @LastEditTime: 2022-06-09 00:40:02
 * @FilePath: \best-search\src\loading\loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="m-spin-dot">
    <span class="u-dot-item"></span>
    <span class="u-dot-item"></span>
    <span class="u-dot-item"></span>
    <span class="u-dot-item"></span>
  </div>
</template>
<script>
export default {
  name: "Loading",
};
</script>
<style lang="scss">
.m-spin-dot {
  // 水平垂直居中
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 18px);
  margin: 0 auto;
  width: 36px;
  height: 36px;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* Internet Explorer */
  -moz-transform: rotate(45deg); /* Firefox */
  -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
  -o-transform: rotate(45deg); /* Opera */
  animation: rotate 1.2s linear infinite;
  -webkit-animation: rotate 1.2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(405deg);
    }
  }
}
.u-dot-item {
  // 单个圆点样式
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  opacity: 0.3;
  animation: spinMove 1s linear infinite alternate;
  -webkit-animation: spinMove 1s linear infinite alternate;
  @keyframes spinMove {
    100% {
      opacity: 1;
    }
  }
}
.u-dot-item:first-child {
  top: 0;
  left: 0;
}
.u-dot-item:nth-child(2) {
  top: 0;
  right: 0;
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.u-dot-item:nth-child(3) {
  bottom: 0;
  right: 0;
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
.u-dot-item:last-child {
  bottom: 0;
  left: 0;
  animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
</style>
