<template>
  <div id="app">
    home
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ComponentInternalInstance, ref } from 'vue'

export default defineComponent({
  name: '',
  setup () {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const { $loading } = appContext.config.globalProperties
    $loading(true)
    
    return {}
  }
})
</script>

<style lang="scss" scope>
@import "@/common/scss/function.scss";
#app {
  font-size: rem(70px);
}
</style>
