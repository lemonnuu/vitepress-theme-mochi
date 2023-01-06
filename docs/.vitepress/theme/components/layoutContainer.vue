<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutContainer',
})
</script>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
const teleportTarget = ref('')
onMounted(() => (teleportTarget.value = '.VPPage'))
</script>

<template>
  <Teleport v-if="teleportTarget" :to="teleportTarget">
    <slot></slot>
  </Teleport>
</template>

<style scoped lang="scss"></style>
