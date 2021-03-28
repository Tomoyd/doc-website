import React, { Component } from "react";
/**
 *  正向属性代理
 * 也就是源组件组件包裹一层代理组件，在代理组件上去做一些对源组件的代理操作
 * 在fiber tree上，先mounted代理组件，然后才是我们的业务组件
 * 优点：
 * 1. 正常属性代理可以和业务组件低耦合，零耦合，对于条件渲染和props属性增强，只负责控制子组件渲染和
 * 传递额外的props就可以了，不需要知道业务组件；更适合做一些开源项目的hoc
 * 2. 使用与class声明组件和function声明的组件
 * 3. 可以完全隔离业务组件的渲染，完全控制业务组件渲染与否，避免一些副作用
 * 4. 可以嵌套使用，多个hoc可以嵌套使用，并且一般不会限制包装HOC的先后顺序
 * 缺点：
 * 1. 无法直接获取业务主键的状态，需要ref获取组件实例
 * 2. 无法直接继承静态属性，需要手动处理，或引入第三方库
 */
function forwardHOC(WrapComponent) {
  return class ProxyComponent extends Component {
    state = {
      name: "alien",
    };

    render() {
      return <WrapComponent {...this.props} {...this.state}></WrapComponent>;
    }
  };
}

export default forwardHOC;
