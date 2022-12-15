---
title: Pinia
titleTemplate: 入门
outline: [2,4]
---

# Pinia 入门

## 安装

首先使用喜欢的包管理器安装 Pinia：

```shell
# Vue3
npm install pinia

# Vue2 (@vue/composition-api : 组合式 API 包)
npm install pinia @vue/composition-api

# Nuxt
npm install @pinia/nuxt
```

> 如果是 Vue CLI 使用 Pinia, 可能还得需要这个[非官方插件](https://github.com/wobsoriano/vue-cli-plugin-pinia), 但是 Vue CLI 还是使用 Vuex 吧。

### 基础使用

Pinia 的使用非常简单, 只需<i>创建一个 pinia 实例(根 store) 并将其传递给 Vue 应用</i>即可。

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia' // [!code focus]
import App from './App.vue'

const pinia = createPinia() // [!code focus]
const app = createApp(App)

app.use(pinia) // [!code focus]
app.mount('#app')
```

如果使用的是 Vue2 的话, 还得额外安装 PiniaVuePlugin 插件才能提供 devtools 的支持, 并在应用的根部注入创建的 Pinia 实例：

```js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // ...
  // 注意，同一个`pinia'实例, 可以在同一个页面的多个 Vue 应用中使用
  pinia,
})
```

### Store 是什么?

<i>Pinia 中的 Store 是一个保存状态和业务逻辑的实体, 并不与组件树绑定, 承载着全局状态, 每个组件都可以读取和写入它。</i>

<i>它有三个概念, 分别是 state、getter 和 action, 可以假设这些概念相当于组件中的 data、computed 和 methods。</i>

#### 应该什么时候使用 Store?

> 首先需要明确的是, 并非所有的应用都需要访问全局状态, 合适才是最好的, 切勿为了技术而技术。

一个 Store 应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据, 例如显示在导航栏中的用户信息, 以及需要通过页面保存的数据, 例如一个非常复杂的多步骤表单。

另一方面, 应该避免在 Store 中引入那些原本可以在组件中保存的本地数据, 例如一个元素在页面的可见性。

## Store



