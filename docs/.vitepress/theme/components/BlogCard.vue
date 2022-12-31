<script setup>
import { randomRGB } from '../utils/color'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const titleBackground = () => `-webkit-linear-gradient(90deg, ${randomRGB()}, ${randomRGB()})`

const emit = defineEmits(['click'])
</script>

<template>
  <div
    @click="emit('click', data)"
    class="card-wrap bg-white dark:bg-zinc-900 rounded-md shadow dark:shadow-slate-700 border border-zinc-100 dark:border-zinc-800 mb-[5%] pl-[5%] flex flex-col pb-[4%] cursor-pointer group hover:shadow-md hover:border-zinc-300 hover:scale-105 duration-300"
  >
    <p class="card-title mt-[6%] text-lg font-bold">
      {{ data.title }}
    </p>
    <div class="mt-[4%] flex flex-wrap text-sm text-zinc-400">
      <div class="flex items-center justify-center mr-8 mb-1">
        <svg class="icon-font mr-3" aria-hidden="true">
          <use xlink:href="#icon-touxiang" class="fill-zinc-500"></use>
        </svg>
        {{ data.author }}
      </div>
      <div class="flex items-center justify-center mr-8 mb-1">
        <svg class="icon-font mr-3" aria-hidden="true">
          <use xlink:href="#icon-shijian" class="fill-zinc-500"></use>
        </svg>
        {{ data.date }}
      </div>
      <div class="flex flex-wrap items-center mr-8 mb-1">
        <svg class="icon-font mr-3" aria-hidden="true">
          <use xlink:href="#icon-tag-fill" class="fill-zinc-500"></use>
        </svg>
        <span class="tag" v-for="tag in data.tags" :key="tag"> {{ tag }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  &::after {
    content: '、';
    display: inline;
  }
  &:last-child::after {
    content: none;
  }
}

.card-wrap {
  &:hover {
    .card-title {
      background: v-bind(titleBackground());
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>
