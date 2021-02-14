console.log("专用", self);

self.onmessage = (event) => {
  console.log("来自主线程", event.data);
  self.postMessage("你好，主人");
  self.close();
};

self.onerror = (event) => {
  console.log("error", event);
};
