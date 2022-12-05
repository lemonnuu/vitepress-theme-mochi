<script setup>
// Layout 暴露了插槽 https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
import DefaultTheme from 'vitepress/theme'
import { defineComponent } from 'vue'

const { Layout } = DefaultTheme
</script>

<script>
export default defineComponent({})
</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before> My custom sidebar top content </template> -->
  </Layout>
</template>
