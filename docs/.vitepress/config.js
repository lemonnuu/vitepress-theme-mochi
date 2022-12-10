import { defineConfig } from 'vitepress'
import nav from './nav'
import * as sidebar from './sidebar'

const themeConfig = {
  logo: { light: '/logo.png', dark: '' }, // 主页 logo
  siteTitle: 'Mochi Blog', // 主页标题, 设置为 false 可不显示
  nav,
  sidebar: {
    '/HTML/': sidebar.htmlSidebar,
    '/CSS/': sidebar.cssSidebar,
    '/ROLLUP/': sidebar.buildToolSidebar,
    '/ESBUILD/': sidebar.buildToolSidebar,
    '/PARCEL/': sidebar.buildToolSidebar,
    '/WEBPACK/': sidebar.buildToolSidebar,
  },
  outlineTitle: '大纲', // 大纲标题
  outline: [2, 3], // 大纲层级
  lastUpdatedText: '上次更新时间',
  docFooter: {
    prev: '上一页',
    next: '下一页',
  },
  editLink: {
    pattern: 'https://github.com/lemonnuu/mochi-blog/blob/master/docs/:path', // 编辑链接
    text: '编辑此页',
  },
  socialLinks: [{ icon: 'github', link: 'https://github.com/lemonnuu' }],
  algolia: {
    // 搜索功能
    apiKey: 'your_api_key',
    indexName: 'index_name',
  },
  footer: {
    message: "Mochi's personal blog.",
    copyright: 'Copyright © 2021-present Mochi',
  },
}

const config = defineConfig({
  base: '/mochi-blog', // 基础路径
  title: 'Mochi', // 网页标题
  titleTemplate: 'Blog',
  description: "Mochi's personal blog.", // 描述
  lastUpdated: true, // 开启最近更新时间
  ignoreDeadLinks: true, // 忽略无效链接
  outDir: './dist', // 输出目录
  themeConfig,
})

export default config
