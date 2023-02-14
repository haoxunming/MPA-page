module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
<div class="${compoenntName}">
  ${compoenntName} page
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${compoenntName}',
  setup () {
    return { }
  }
})
</script>
<style lang="scss" scoped>
@import "@/common/scss/function.scss";
.${compoenntName} {
}
</style>`
  },
  entryTemplate: (compoenntName) => {
    return `/* eslint-disable */
import { createApp } from 'vue'
import App from './index.vue'
// 全局组件
import { componentsUse } from '@/common/page-setting/d'
import '@/common/page-setting/index'

const app = createApp(App)
componentsUse(app)
app.mount('#app')`
  },
  htmlTemplate: (compoenntName, titleName) =>  {
    return `<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>${titleName}</title>
    <% if(process.env.NODE_ENV==='production'){htmlWebpackPlugin.options.cdn.js.forEach(function(item){ if(item){ %>
      <link href="<%= item %>" rel="preload" as="script"></link>
      <% }})} %>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <% if(process.env.NODE_ENV==='production'){htmlWebpackPlugin.options.cdn.js.forEach(function(item){ if(item){ %>
      <script type="text/javascript" src="<%= item %>"></script>
      <% }})} %>
    <% if(process.env.NODE_ENV==='production'){ %>
      <script type="text/javascript">
      try {
        var vConsole = new window.VConsole();
      } catch (error) {
        
      };
      </script>
      <%} %>
    <!-- built files will be auto injected -->
  </body>
</html>`
  }
}