<template>
  <div>
    <p><slot></slot></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  setup () {
    return {
    }
  }
})
</script>
<style lang="scss">
@import "@/common/scss/function.scss";
.tost {
  position: fixed;
  bottom: rem(100px);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 rem(30px);
  box-sizing: border-box;
  animation-duration: 1.5s;
  animation-name: tost;
  animation-fill-mode: forwards;
  p {
    font-size: rem(26px);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: rem(6px) rem(24px);
    box-sizing: border-box;
    border-radius: rem(10px);

  }
}
@keyframes tost {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
