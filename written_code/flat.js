/**
 * 数组扁平化
 */

let arrA = [1, [2, 3, 4]];

function flat(arr) {
  let res = [];
  for (let i in arr) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      let reChild = flat(arr[i]);
      res.push(...reChild);
    }
  }
}

console.log("arrA :>> ", arrA.flat(2));
