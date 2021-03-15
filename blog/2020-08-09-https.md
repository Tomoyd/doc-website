---
slug: js/错误处理
title: 一种基于事件回调的错误处理方式
author: huy
author_title: 简单的东西往往蕴含着巧妙
author_url: https://tomoyd.github.io
# author_image_url: https://tomoyd.github.io/img/tomo.png
tags: [js, error]
---

#### 需求

满足以下三点：

- 错误能被捕获
- 错误能配 chrome 浏览器 debug 到
- 错误不能中断 js 运行

其基本思路是，在事件回调中抛出的异常不会中断程序的运行，且能被 onerror 捕获到，且在 chrome 中可以 debug 到

```javascript
const startEvent = new Event("startup");
const toolEl = document.createElement("div");
function handleStartup() {
  throw "test";
}
window.onerror = (e) => {
  // handleError
  console.log({ e });
};
toolEl.addEventListener("startup", handleStartup, false);
toolEl.dispatch(startEvent);
```
