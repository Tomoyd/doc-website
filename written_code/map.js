/**
 * map
 * 接收两个参数，一个 回调,一个this指向
 * 返回一个新数组
 */

Object.defineProperty(Array.prototype, "myMap", {
  value: function (fn, thisArg) {
    let res = [];
    let arr = this;

    for (let i in arr) {
      res.push(fn.apply(thisArg, [arr[i], i]));
    }
    return res;
  },
  enumerable: false,
});

let a = [1, 2, 4, 7];

let r = a.map(
  (i) => {
    return i;
  },
  { name: 123 },
);

console.log("r :>> ", r);

r = a.myMap((i) => {
  return i + 2;
});

console.log("r2", r);
