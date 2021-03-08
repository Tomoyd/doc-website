---
id: base
title: ts基础类型
---

:::note 定义
TypeScript 是 JavaScript 的超集，
扩展了 JavaScript，捕捉错误提供解释，任何 JavaScript，TypeScript 都可以编译后运行

:::



##### 断言

- 尖括号
- as

##### 类型守卫

- in
- instanceof
- typeof
- 自定义判断

##### 联合类型

通常和null与undefined一起使用

可辨识联合类型类型守卫

- 可辨识：比如自己定义一些接口
- 联合：将定义的可以辨识的类型|联合起来
- 路由守卫：对于各个类型情况分类处理

##### 通过type可以为类型起名字

##### 交叉类型：必须含有多个类型全部都有的字段  &

##### 接口

- 可选：？
- 只读 readonly

##### 泛型工具类型

- typeof：获取变量声明或对象的类型
- keyof：获取一个对象所有的key值
- in: 遍历枚举类型
- infer:声明一个类型变量并对其进行使用，取得返回值类型后方便以后使用

##### Partial\<T\>所有T中的属性可选

```typescript
type Partial<T>={
    [k in keyof T]?:T[k]
}
```

#### 修饰器