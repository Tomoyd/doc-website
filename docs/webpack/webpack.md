---
id: webpack
title: webpack
---

#### webpack

#### 理解前端模块化

1. 作用域变量资源的可见性 在 JavaScript 中，全局作用域和局部作用域 块作用域

   - 传统的引入脚本文件会导致全局变量的冲突
     - 命名空间 解决命名冲突，但是命名空间也可以访问到容易被修改
     - 闭包->理解执行函数

2. 模块化优点

   - 作用域封装
   - 重用性
   - 解除耦合

3. 模块化方案

   1. AMD(异步模块定义)

      ```
      define(moduleId,[depencies],funtion||object)
      ```

   2. commonJS(服务器端) ，module.exports 每个文件就是一个模块 require

      Gulp Grunt 自动化构建工具，完成一些重复的任务

   3. esModule import export 语法层面支持

      webpack 定位就是模块化

#### webpack 打包机制

1. webpack 与立即执行函数

2. webpack 打包核心逻辑

   1. 从入口文件开始，分析整个应用的依赖树

   2. 将每个模块包装起来，放到一个数组中，等待调用

   3. 实现模块加载方法，并把它放到模块执行的环境中，（模块化函数作用域）确保模块间可以相互调用

   4. 执行立即执行函数

3. npm 与包管理器

   1. 获取代码和分发代码的能力
   2. 依赖 node 环境
   3. 关键字段
      - name 包名称
      - version 版本号 ^ 中版本和小版本 ~小版本
      - main 包执行的入口
      - script 脚本命令功能
      - 依赖包
   4. npm install 过程
      - 包版本信息文件
      - 依赖包，信息文件是否一致

   #### 打包过程

   1. 运行 webpack 的时候，会读取传入的配置文件，然后运行 compiler.run 来初始化参数

      之后开始分析模块（environment）钩子

   2. 接下来进行 entryOption 阶段，webpack 开始读取配置入口 entry，开始递归遍历所有入口文件（entryOption 钩子）

   3. webpack 进入入口文件之后，开始分析依赖项，进行 compilation 过程（compilation 钩子函数）

   4. 将经过 loader 处理过的文件，经过解析成 ast 语法书分析文件的依赖关系，然后生成依赖数组，重复上面模块分析过程

   5. 使用配置好的 loader 对文件内容进行编译（buildModule 钩子函数），可以从回调参数 module 上拿到模块的路径资源

   6. emit 阶段所有文件都已转换完成，包含了最终输出的资源，可以在 assets 中拿到响应的数据，包括输出的资源和代码块 chunk 等信息

   7. done 阶段

   #### 核心特性

   1. 一切都是模块
   2. loader module plugins

   #### 性能

   构建速度

   打包体积

   tree-shaking

   缓存

   #### loader

   content ，map meta

   ### plugin

   一个包含 apply 方法的类，apply 中传入 compiler，利用 webpack 的事件流，钩子事件进行相应的操作
