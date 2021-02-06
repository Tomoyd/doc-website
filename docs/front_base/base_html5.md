---
id: html5
title: HTML5
sidebar_label: html5
---

### 错误捕获

> JS 错误捕获一般需要关注三种异常

- 资源加载异常
- JS 执行异常
- 未捕获的 Promise

:::note
对于资源加载的异常,可以通过 addEventListener，对 error 事件进行捕获(也就是 addEventListener 的第三个参数为 true)来对资源加载错误进行处理，
对于 Js 执行的异常通过，window.onerror 即可处理
对于未捕获的 Promise 异常，通过监听 unhandledrejection 事件可以达到需求
:::

:::important

对于事件回调函数里面的抛出的异常，不会中断程序的运行，并可以通过 window.onerror 捕获
react 的错误边界的捕获就很巧妙的运用了这一特点

:::
