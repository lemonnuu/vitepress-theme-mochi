<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter, useData } from 'vitepress'
import { isMobileTerminal } from '../utils/flexible'
import pages from '../../../../helper/pages.json'
import BlogCard from './BlogCard.vue'
import Pagination from './Pagination.vue'
import JumpTo from './JumpTo.vue'
import HomeInfo from './HomeInfo.vue'
import { message } from '../lib/message'

const router = useRouter()
const data = useData()
console.log('和撒旦撒擦擦大苏打', data.frontmatter.value)

// 渲染图片的 src
const imgSrc = computed(() => {
  const zd = isMobileTerminal.value ? 'mobile' : 'pc'
  // return `https://imgapi.cn/api.php?zd=${zd}&fl=dongman&gs=images`
  return `https://imgapi.cn/api.php?zd=${zd}&fl=suiji&gs=images`
  // return `https://imgapi.cn/cos.php`
})

// 主页上移的高度, 因为有 navBar
const mtNavBar = ref(0)
onMounted(() => {
  const navBarEle = document.querySelector('.VPNav')
  const { height } = navBarEle.getBoundingClientRect()
  mtNavBar.value = `${-height}px`
})

// 博客文章列表
const blogList = pages.sort((a, b) => b.timestamp - a.timestamp)
console.log(blogList)

// 根据 blogList 生成分页的 pagingBlogList
const generatePagingBlogList = (blogList, pageSize) => {
  const res = []
  let temp = []
  blogList.forEach((item, index) => {
    if (index === 0 || index % pageSize === 0) {
      res.push(temp)
      temp = []
    }
    temp.push(item)
  })
  temp.length && res.push(temp)
  return res
}

// 分页
const total = blogList.length
const pageSize = computed(() => data.frontmatter.value.pageSize || 6)
const pagesNumber = computed(() => Math.ceil(total / pageSize.value))
const currentPage = ref(1)
const pagingBlogList = ref([])
const pagerCount = ref(5)
pagingBlogList.value = generatePagingBlogList(blogList, pageSize.value)

const toJumpLink = (target) => {
  router.go(target.link)
}

const onHandleClickPagination = (targetPage) => {
  if (currentPage.value === targetPage) return
  setTimeout(() => {
    const ele = document.querySelector('#blogblog')
    ele.scrollIntoView({ behavior: 'smooth' })
  }, 100)
  if (typeof targetPage === 'number') return (currentPage.value = targetPage)
  if (targetPage === 'Prev') return (currentPage.value -= 1)
  if (targetPage === 'Next') return (currentPage.value += 1)
  const step = pagerCount.value - 2
  if (targetPage === 'leftDot') {
    let temp = currentPage.value - step
    if (temp < 1) temp = 1
    return (currentPage.value = temp)
  }
  if (targetPage === 'rightDot') {
    let temp = currentPage.value + step
    if (temp > pagesNumber.value) temp = pagesNumber.value
    return (currentPage.value = temp)
  }
}

const jumpPage = (page) => {
  if (page < 1 || page > pagesNumber.value) {
    message('error', '输入页码不再范围内, 请重新输入!', 2000)
  } else if (page === currentPage.value) {
    message('warn', `当前页码就是 ${page}, 请确认输入是否正确!`, 2000)
  } else {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="home-view">
    <div class="h-screen overflow-hidden">
      <img class="min-h-screen align-bottom dark:opacity-[0.6]" :src="imgSrc" alt="" />
    </div>
    <div id="blogblog" class="flex flex-col mt-[5%] xl:mt-0 xl:pt-[72px] mx-[5%] xl:flex-row xl:mx-[12%]">
      <!-- 博客列表 -->
      <div class="w-full mb-[20px]">
        <BlogCard
          v-for="item in pagingBlogList[currentPage]"
          :key="item.link"
          :data="item"
          @click="toJumpLink"
        ></BlogCard>
        <div class="xl:flex xl:flex-wrap xl:justify-between xl:items-center">
          <div class="flex justify-center">
            <Pagination
              :pages-number="pagesNumber"
              :current-page="currentPage"
              :pager-count="pagerCount"
              @click="onHandleClickPagination"
            ></Pagination>
          </div>
          <JumpTo @click="jumpPage"></JumpTo>
        </div>
      </div>
      <!-- 信息 -->
      <HomeInfo :frontmatter="data.frontmatter.value"></HomeInfo>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  margin-top: v-bind(mtNavBar);
  width: 100%;
}
</style>
