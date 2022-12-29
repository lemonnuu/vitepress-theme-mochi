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

Pinia 的使用非常简单, 只需创建一个 pinia 实例(根 store) 并将其传递给 Vue 应用即可。

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

在深入研究核心概念之前, 首先得知道 Store 是用 `defineStore()` 定义的。

1. 第一个参数要求是一个独一无二的 id, Pinia 将用它来连接 store 和 devtools
2. 第二个参数可接受两类值：Option 对象或 Setup 函数

```js
import {defineStore} from 'pinia'

export const useOptionStore = defineStore('optionStore', {
  state() { return {} },
  getters: {},
  actions: {}
})

export const useSetupStore = defineStore('setupStore', () => {
  // ref、computed、function
  return {}
})
```

> 为了符合 Composition 函数风格, 习惯性将返回的函数命名为 use...

### Option Store

与 Vue 的 Options API 类似, `defineStore()` 可以接收一个带有 state、actions 与 getters 属性的 Option 对象：

```js
import {defineStore} from 'pinia'

export const useOptionStore = defineStore('optionStore', {
  state() { return {} },
  getters: {},
  actions: {}
})
```

可以认为 state 是 store 的数据(data), getters 是 store 的计算属性(computed), 而 actions 则是方法(methods)。

### Setup Store

也存在另外一种定义 store 的可用语法。与 Vue Composition API 的 setup 函数类似。

`defineStore()` 可以接收一个函数, 该函数定义了一些响应式属性和方法, 并且返回一个带有想暴露出去的属性和方法的对象。

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

在 Setup Store 中：

- ref() 就是 state 属性
- computed() 就是 getters
- function() 就是 actions

Setup Store 比 Option Store 更灵活, 因为可以在一个 store 内创建侦听器, 并自由的使用任何组合式函数。

不过, 使用组合式函数会让 SSR 变得更复杂。

### 使用 Store

store 的使用也有两种方式：

- composition API 组件 -> 直接使用
- options API 组件 -> 借助映射辅助函数(mapState...)



## 草稿

getters 里面的参数只能是 state, 或者没有参数？与 actions 里面可以写 this

坑?: 用了 state 就不要用 this 了

改变 state: 
1. 直接改变, store.xxx = xxx
2. store.$patch(() => {})
3. 通过 actions 改变


