<script setup>
import { ref } from 'vue'
const props = defineProps({
  btnText: {
    type: String,
    default: 'Go',
  },
})
const emit = defineEmits(['click'])

const inputValue = ref('')

const onHandleClick = () => {
  if (!inputValue.value) return
  emit('click', inputValue.value)
  inputValue.value = ''
}
</script>

<template>
  <div class="flex justify-center items-center mt-3 xl:mt-0 mb-2">
    <span class="font-bold mr-3 inline-block h-8 leading-8">Jump To</span>
    <input
      class="inline-block w-24 text-sm font-bold h-8 leading-8 text-center px-2 rounded bg-white dark:bg-zinc-900 shadow-md dark:shadow dark:shadow-slate-700 border border-solid border-zinc-100 dark:border-zinc-800 mr-3 duration-200"
      type="number"
      v-model.trim="inputValue"
    />
    <button
      @click="onHandleClick"
      class="inline-block text-sm font-bold h-8 leading-8 text-center px-2 rounded bg-white dark:bg-zinc-900 shadow-md dark:shadow dark:shadow-slate-700 border border-solid border-zinc-100 dark:border-zinc-800 mr-3 duration-200"
    >
      Go
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
