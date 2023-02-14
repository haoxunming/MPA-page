<template>
  <div class="loading-block">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/common/scss/function.scss";
.loading-block {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba($color: #fff, $alpha: 0.7);
  z-index: 1000;
  .lds-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: rem(80px);
    height: rem(80px);
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: rem(64px);
    height: rem(64px);
    margin: rem(8px);
    border: rem(8px) solid #ff4705;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ff4705 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
