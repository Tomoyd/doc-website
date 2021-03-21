// const worker = new Worker("./simWorker.js");
// console.log("worker", worker);
// worker.onmessage = (event) => {
//   console.log("来自专用工作线程", event.data);
//   worker.terminate();
// };
// worker.onerror = (event) => {
//   console.log("main", event);
// };

// worker.postMessage("hello");

const shareWorker = new SharedWorker("share.js");

shareWorker.port.onmessage = (event) => {
  console.log("来自共享工作线程", event.data);
  //   worker.terminate();
};
// console.log('object', object)
shareWorker.port.postMessage("123");
