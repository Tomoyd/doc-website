---
slug: js/捕获错误
title: 错误捕获
author: huy
author_title: 简单的东西往往蕴含着巧妙
author_url: https://tomoyd.github.io
# author_image_url: https://tomoyd.github.io/img/tomo.png
tags: [js, error]
---

#### 需求

没有处理的错误：

#### 实现

onerror 捕获一些正常一些未捕获的错误

addEventListener("error",cb,true) 捕获相关资源加载错误
unhundlerejection 捕获未捕获的 promise 错误
