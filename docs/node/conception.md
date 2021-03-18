#### nodejs 基本概念

##### nodejs 是什么

> 基于 Chrome V8 引擎的 JavaScript 运行环境

1. 是 js 一种运行环境
2. 基于 chrome V8

#### 学什么

#### 基础

- 模块

  > if V8 is the engine of nodejs, npm is its soul

  1. 模块的类型

  - builtin module:以 C++形式提供的模块 优先级最高
  - constants module: 定义常量的模块，用来导出 signal， openssl 库，文件访问权限等常量 次之
  - native module : 以 JavaScript 形式提供的模块，如 https，http fs 等，有些需要借助 built module 如 buffer 需要 builtin node_buffer.cc，来申请实现大容量内存的申请和管理 再次之
  - 3rd-party module：以上都可以认为是内建模块，如 express

  2.  模块加载

  ```javascript
  var http = require("http");
  ```

  - require 做的事情

    - 判断传入的参数
    - 如果在缓存中，从缓存中导出
    - 如果是原生模块，使用 NativeModule.require()导出，也会先去缓存中找

  3.  process

      > 从底层 C++传递给 JavaScript 的变量 process
      > 程序启动时会先配置好 process
      > 然后将其当做参数去调用主程序返回的函数，这样就传递到 JavaScript 中

  4.  vm runInThisContext 类似 eval

  总结 通过 cache 解决无限循环引用的问题

#### 全局对象

- global
  > node 所在的全局环境
- process
  > 表示当前的进程
- console

#### 全局函数

- setTimeout()

  > 返回一个整数 最小 1ms 最大 24.8 天，返回一个定时器编号

- setInterval();
- clearInterval()
- require()
- Buffer() 操作二进制

#### 伪全局变量（模块内部的局部变量）

- \_\_filename:当前运行的脚本文件名
- \_\_dirname:当前运行所在的目录

#### module.exports 和 exports

nodejs 永远导出的是 module.exports 指向的对象
默认情况下 exports 指向与 module.exports 相同
修改 exports 的指向会导致问题，因为不是和 module.exports 指向相同

#### 事件循环

> 在单线程中一切都是有顺序的一个一个执行
> node 中采用 V8 作为 JavaScript 的执行引擎，同时使用 libuv 实现事件驱动异步 IO 事件循环就是 libuv 的默认事件循环

#### 错误处理

1. 未捕获的异常
   process.on("uncaughtException")
2. promise .catch async await 时 try catch
3. try catch

#### 退出程序

process.exit()

#### 命令行中接收参数

process.argv 数组 node 环境当前代码环境

#### package.json 指南

name
author
dependencies

devDependence
version
description
main 应用程序的入口

Scripts 脚本
engines
browserslist
contributors
homepage
license
keywords
private

#### setImmediate 与 setTimeout process.nextTick

#### 事件触发器 eventEmitter emit on off once removeListener removeAllListeners
