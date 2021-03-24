/**
 * reduce方法
 * 接受一个回调
 * preVious的值
 * current
 * index
 * array
 * 一个初始化值
 */

function reducer(fn, init) {
  let arr = this;
  console.log("arr :>> ", arr);
  let i = 1;
  let pre = arr[0];

  if (init !== undefined) {
    i = 0;
    pre = init;
  }
  while (i < arr.length) {
    pre = fn(pre, arr[i], i, arr);
    i++;
  }
  return pre;
}

Object.defineProperty(Array.prototype, "myReduce", {
  value: reducer,
  enumerable: false,
});

let a = [1, 2, 3, 5];

let bR = a.myReduce((i, n) => i + n);
console.log("bR :>> ", bR);
