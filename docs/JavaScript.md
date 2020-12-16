---
id: JavaScript
title: JavaScript
sidebar_label: JavaScript
slug: /
---



### 错误捕获

> JS 错误捕获一般需要关注三种异常
- 资源加载异常
- JS执行异常
- 未捕获的Promise

:::note
 对于资源加载的异常,可以通过 addEventListener，对error事件进行捕获(也就是addEventListener的第三个参数为true)来对资源加载错误进行处理，
 对于Js执行的异常通过，window.onerror即可处理
 对于未捕获的Promise异常，通过监听unhandledrejection事件可以达到需求
:::

:::important

对于事件回调函数里面的抛出的异常，不会中断程序的运行，并可以通过window.onerror捕获
react的错误边界的捕获就很巧妙的运用了这一特点

:::

