// 文章文件夹
const articlePath = './docs'

// 获取所有的 md 文件时, 需要排除的目录
const excludeDirs = ['.vitepress', 'public', 'images']

// 保存 pages 的目录
const pagesPath = './helper'

module.exports = {
  articlePath,
  excludeDirs,
  pagesPath
}