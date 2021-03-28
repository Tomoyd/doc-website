/**
 * 反向继承
 *
 * 高阶组件继承源组件，然后进行业务加强
 * 1. 方便获取内部状态，state，生命周期，绑定的事件函数等
 * 2. 可以良好继承静态属性，无需对静态属性进行额外处理
 *
 * 缺点：
 * 1. 无状态组件无法使用
 * 2. 耦合性比较大，强耦合
 * 3. 多个嵌套，当前会覆盖上一个，隐患比较大
 */

import React from "react";

function reverseHOC(ParentComponent) {
  return class WrapComponent extends ParentComponent {
    constructor(props) {
      super(props);
      console.log("super.state :>> ", super.state);
      console.log("this.state :>> ", this.state);
    }

    render() {
      return <div>{this.state.name}</div>;
    }
  };
}

export default reverseHOC;
