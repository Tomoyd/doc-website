// 可迭代协议 实现了Iterable接口
// 迭代器  一般可迭代对象都实现了自己的第二代其

// 自定义迭代器
/*
    实现next方法，实行Symbol.iterator方法
*/

function custom() {
  let text = {
    val: 1,
    next() {
      return { done: this.val > 10, value: this.val++ };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
  for (let i of text) {
    console.log("i", i);
  }
}

// 生成器
function* generatorA() {
  yield "1";
  yield* [1, 2, 4]; // 相当于 1,2,4的迭代器
}
