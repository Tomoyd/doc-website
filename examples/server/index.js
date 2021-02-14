const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  // res.setHeader("Access-Control-Allow-Methods", "no-cors");
  //   const options = url.parse(req.method);
  res.setHeader("status", 200);
  //   http.request({
  //     host: options.host,
  //     path: options.path,
  //     method: req.method,
  //     headers: req.headers
  //   });
  res.end(`handleResponse({ id: 99 })`);
});

server.listen("8000", () => {
  console.log("server on http://localhost:8000");
});
