const shareWorker = new SharedWorker("share.js");

shareWorker.port.onmessage = (event) => {
  console.log("P2", event.data);
  //   worker.terminate();
};
// console.log('object', object)
shareWorker.port.postMessage("P2");

function postData() {
  shareWorker.port.postMessage("P222");
}
