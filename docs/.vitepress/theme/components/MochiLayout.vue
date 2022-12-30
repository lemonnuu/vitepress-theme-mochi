<script setup>
// Layout 暴露了插槽 https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
import DefaultTheme from 'vitepress/theme'
import { defineComponent, ref, watch, computed, nextTick } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress' // vitepress 暴露的 API
import pages from '../../../../helper/pages.json'

const data = useData()
const route = useRoute()
const router = useRouter()
console.log('data', data)
console.log('route', route)
console.log('router', router.routes)
console.log(pages[0])

const { Layout } = DefaultTheme

// 是否处于暗黑模式
const isDark = computed(() => data.isDark.value)

// outline 眼睛图标背景色
const eyeBeforeBgColor = computed(() => (isDark.value ? '#ffffff' : '#242424'))

// outline 眼睛图标字体色
const eyeBeforeColor = computed(() => (isDark.value ? '#242424' : '#ffffff'))

// outline 是否显示状态, 根据这个值来判断要不要渲染眼睛, 只有为 true 时, 才需要渲染
const outlineShowState = computed(() => data.page.value.headers.length > 0)

// 记录 outline 当前初始状态, 默认为 true
const recordOutlineShowState = ref(true)

// 切换 outline 的显示状态
const toggleOutlineShow = () => {
  const outlineEle = document.querySelector('.VPDocAsideOutline')
  const display = recordOutlineShowState.value ? 'none' : 'block'
  outlineEle.style.display = display
  recordOutlineShowState.value = !recordOutlineShowState.value
}

// 监听 outline 是否显示, 以便更改 outline 的行内样式
watch(outlineShowState, (val) => {
  nextTick(() => {
    const outlineEle = document.querySelector('.VPDocAsideOutline')
    if (!outlineEle) return
    if (!val) return (outlineEle.style.display = 'none')
    const display = recordOutlineShowState.value ? 'block' : 'none'
    outlineEle.style.display = display
  })
})

// 记录 menu 当前初始状态, 默认为 true
const recordMenuShowState = ref(true)

// 切换 menu 的显示状态
const toggleMenuShow = () => {
  const sidebarEle = document.querySelector('.VPSidebar')
  const display = recordMenuShowState.value ? 'none' : 'block'
  sidebarEle.style.display = display
  recordMenuShowState.value = !recordMenuShowState.value
}

// 只有 layout 为 docs 或 undefined 时才显示菜单控制
const isShowMenuControl = computed(() => {
  const layout = data.page.value.frontmatter.layout
  if (typeof layout === 'undefined' || layout === 'docs') return true
  return false
})
</script>

<script>
export default defineComponent({})
</script>

<template>
  <!-- 控制菜单的显示与隐藏 -->
  <div v-if="isShowMenuControl" class="sidebar-nav-toggle" @click="toggleMenuShow">
    <svg class="icon-font icon-arrow" aria-hidden="true">
      <use :xlink:href="recordMenuShowState ? '#icon-zuojiantou' : '#icon-youjiantou'"></use>
    </svg>
  </div>
  <Layout>
    <template #doc-footer-before>doc-footer-before</template>
    <template #doc-before>doc-before</template>
    <template #doc-after>doc-after</template>
    <template #sidebar-nav-before> </template>
    <template #sidebar-nav-after>sidebar-nav-after</template>
    <template #aside-top v-if="outlineShowState">
      <div class="aside-top" @click="toggleOutlineShow" :class="[recordOutlineShowState ? 'show' : 'hidden']">
        <svg class="icon-font icon-eye" aria-hidden="true">
          <use :xlink:href="recordOutlineShowState ? '#icon-yincang' : '#icon-yanjing_xianshi_o'"></use>
        </svg>
      </div>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .sidebar-nav-toggle {
    visibility: visible !important;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
}
.sidebar-nav-toggle {
  transition: opacity 0.5s;
  visibility: hidden;
  position: fixed;
  cursor: pointer;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background-color: var(--vp-c-bg-alt);
  .icon-arrow {
    font-size: 28px;
    fill: var(--vp-c-text-1);
  }
}

.aside-top {
  position: absolute;
  left: 52px;
  cursor: pointer;
  z-index: 2;

  &:hover::before {
    display: block;
    width: 64px;
    top: -32px;
    left: -18px;
    font-size: 12px;
    text-align: center;
    background-color: v-bind(eyeBeforeBgColor);
    color: v-bind(eyeBeforeColor);
    padding: 4px;
    border-radius: 6px;
    position: absolute;
  }

  &.show:hover::before {
    content: '隐藏大纲';
  }

  &.hidden:hover::before {
    content: '显示大纲';
  }

  .icon-eye {
    font-size: 28px;
    fill: var(--vp-c-text-1);
  }
}
</style>
