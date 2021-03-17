const http = require("http");
let i = 1;
const hostname = "localhost";
const port = 3000;
//  http.js:Sever->_http_server.js:Sever->net.js:Sever->event.js:EventEmitter
const server = http.createServer((req, res) => {
  if (i > 1) {
    res.writeHead(304, "not modified");
    res.end();
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world\n");
  i++;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// process.on("SIGTERM", () => {
//   console.log("进程已终止 :>> ");
//   sever.close(() => {
//     console.log("进程已终止 :>> ");
//   });
// });

// setTimeout(() => {
//   process.kill(process.pid, "SIGTERM");
// }, 2000);

console.log("process.env :>> ", process.argv);
