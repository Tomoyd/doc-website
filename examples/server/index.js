const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  //   const options = url.parse(req.method);
  res.setHeader("status", 200);
  //   http.request({
  //     host: options.host,
  //     path: options.path,
  //     method: req.method,
  //     headers: req.headers
  //   });
  res.end("hello");
});

server.listen("8000", () => {
  console.log("server on http://localhost:8000");
});
