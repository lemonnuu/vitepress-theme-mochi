---
title: Pinia
titleTemplate: 前言
---

# Pinia

[Pinia](https://pinia.vuejs.org/zh/) 是 Vue 的专属<u>状态管理</u>库, 允许<u>跨组件或页面共享状态</u>。

它是作为 Vuex5 的雏形而创建的, 也是 Vue 官方新推荐的大规模状态管理解决方案。其目的是设计一个拥有 Composition API 的 Vue 状态管理库, 且<u>同时支持 Vue2 和 Vue3</u>。

相比于老牌的 Vuex, 它有很多不同。

> Vuex 3.x 只适配 Vue2, 而 Vuex 4.x 是适配 Vue3 的。

- <u>mutation 已被弃用</u>, 它们经常被认为是极其冗余的。其设计初衷只是带来 devtools 的集成方案, 但现在已不再是个问题
- 不再有嵌套结构的模块, 却可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间, 虽然 Pinia 从设计上提供的是一个扁平的结构, 但能在 Store 间进行交叉组合, 甚至可以让 Stores 有循环依赖关系
- 不再有可命名的模块, 考虑到 Store 的扁平架构, Store 的命名取决于它们的定义方式, 甚至可以说所有的 Store 都应该命名
- 不需要创建自定义的复杂包装器来支持 TypeScript, 一切都可标注类型, API 的设计方式是尽可能地利用 TS 类型推理
- 不需要动态添加 Store, 它们默认都是动态的
- 没有过多的魔法字符串注入, 只需要导入函数并调用它们, 然后享受自动补全就好

***

接下来, 就让我们一起剖开这个菠萝。wiki 分为三个章节：

- x
- y

