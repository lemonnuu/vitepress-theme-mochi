<script setup>
import { onMounted, ref } from 'vue'
const teleportTarget = ref('')
onMounted(() => (teleportTarget.value = '.VPPage'))
</script>

<template>
  <div>
    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <slot></slot>
    </Teleport>
  </div>
</template>

<style scoped lang="scss"></style>
