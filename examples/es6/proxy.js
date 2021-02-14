const target = { id: 1 };

const handler = {
  get() {
    // console.log({ target, prop, receiver });
    // if (prop === "id") {
    //   return target[prop];
    // }
    return Reflect.get(...arguments);
  },
  set(target, property, value, receiver) {
    return Reflect.set(...arguments);
  },
  has(target, prop) {
    return Reflect.has(...arguments);
  },
  defineProperty(target, prop, descriptor) {
    return Reflect.defineProperty(...arguments);
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy);
console.log(target);
