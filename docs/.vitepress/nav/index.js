const nav = [
  // 笔记相关, 自动生成 nav 和 siderbar
  {
    text: 'Notes',
    items: [
      { text: 'Timeline', link: '/timeline' },
      { text: 'Categories', link: '/category' },
      { text: 'Tags', link: '/tag' },
    ],
  },
  // 面试相关, 自动生成 nav 和 siderbar
  {
    text: 'Interview',
    items: [
      { text: 'Timeline', link: '/timeline' },
      { text: 'Categories', link: '/category' },
      { text: 'Tags', link: '/tag' },
    ],
  },
  // 项目相关, 得再画个页面
  {
    text: 'Projects',
    link: '/_PROJECTS/',
  },
  // 帖子相关, 依靠博客功能检索
  {
    text: 'Posts',
    items: [
      { text: 'Timeline', link: '/timeline' },
      { text: 'Categories', link: '/category' },
      { text: 'Tags', link: '/tag' },
    ],
  },
]

export default nav
