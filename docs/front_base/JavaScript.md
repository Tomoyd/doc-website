---
id: js
title: JavaScript
sidebar_label: JavaScript
slug: /js
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



#### 网络请求与远程调用

- xhr(XMLHttpRequest)对象，赋予浏览器异步请求资源原生能力

- 使用：

  1. 创建对象   

  2. 打开做准备

  3. 设置头部(如果需要的话) setRequestHeader()

     > 设置请求头必须在open之后，send之前

  4. 发送数据(如果不发送数据，传入值必须为null)

  如果是异步请求，可以使用```abort()```方法取消请求，监听异步触发事件readystatechange,通过readyState值来判断是否数据全部返回

- GET和POST方法

  1. get 方法

     > 需要将查询字符串传递给open的url参数中，并使send(null)

  2. POST方法设置请求头，如果需要进行数据序列化

- Leve2

  1. 增加了timeout字段设置请求超时时间，如果超时会触发ontimeout事件

     > 设置这个字段后，如果超时，readyState会为4，此时访问status属性会发生错误，此时需要进行对status属性的代码封装到try/catch语句中

  2. FormData 

     > xhr能自动识别FormData并设置请求头，

  3. overrideMineType

     可以用来重写响应MIME类型，xhr将按设置的类型去处理它

- 进度事件

  1. loadstart
  2. progress(可以触发多次)
  3. error/abort/load
  4. loadend

  - load事件，响应接收完后立即触发，不用检测readyState属性了

    > 这个事件会有event对象，但并非所有浏览器都有它

  - progress事件

    >1. 会反复触发
    >2. 处理函数接收一个event对象，target是xhr对象
    >3. event对象有三个额外属性，lengthComputable 表示进度信息是否可以用，position：接收到的字节数，totalSize:Content_Length定义的总字节数

    ```javascript
    xhr.onprogress=(event)=>{
        if(event.lengthComputable){
           console.log(`总共${event.totalSize}字节，已经接收${event.position} 字节数据`)
        }
    }
    ```

    

