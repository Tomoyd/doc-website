---
id: Vue
title: Vue
---

#### Vue 响应式原理

> 在前端的学习过程中，应避免执着于 API 和命令，因为迭代式很快的，API 和命令的变动也是难免的，因此需要深入原理
> 这样在每次迭代改变后也知道如何去应对

> Vue 中的数据模型是被代理的对象，当修改它们时，视图会进行更新

#### 响应式

> 以声明式方式去适应变化的一种编程范例

#### Vue 中是如何追踪变化的呢？

1. 把一个 JavaScript 对象作为 data 选项传递给应用或组件的时候
2. 遍历所有 data 的 property 并将其带有 getter setter 的 Proxy
3. setter 方法一方面保证相应式，另一方面也会通知侦听器实例

#### 组合 API

setup

#### ref 和 reactive

Ref 通常用来处理基本类型数据 通过 getter setter
reactive 用来处理对象 通过代理方式
Ref 中传入对象或数组，会自动的将其 value 转为 Proxy 的对象，经过了 reactive 的处理

#### 计算属性与监视

computed();
watchEffect()
toRefs();
toRef()

#### Vue3 将响应式更加灵活写法，便于逻辑复用
