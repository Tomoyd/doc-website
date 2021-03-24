/**
 * 实现原理
 * 对象 __proto__属性与 类型prototype对比，直到找到或者prototype为0
 * null undefined 不能进行 instanceOf 操作
 */

function myInstanceOf(instance, targetType) {
  while (instance) {
    if (instance.__proto__ === targetType.prototype) {
      return true;
    }
    instance = instance.__proto__;
  }

  return false;
}

console.log(myInstanceOf([], String));
