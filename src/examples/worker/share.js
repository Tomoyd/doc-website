self.onconnect = function (e) {
  var port = e.ports[0];
  console.log("port", e.ports);
  port.onmessage = (e) => {
    var workerResult = "Result: " + e.data;
    port.postMessage(workerResult);
  };

  port.start();
};
