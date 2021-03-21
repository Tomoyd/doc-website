//get 发送数据

function getData() {
  fetch("http://localhost:8000/get?name=1", { method: "no-cors" }).then(
    (res) => {
      console.log("rescors", res);
    }
  );
}

// 发送json数据

function sendJSON(json) {
  const jsonHeaders = new Headers({
    "Content-Type": "application/json"
  });
  fetch("/send", {
    method: "POST",
    body: JSON.stringify(json),
    headers: jsonHeaders
  }).then((res) => {
    console.log("res", res);
  });
}

// 发送参数表单参数

function postFormData(data) {
  const urlencoded = Reflect.ownKeys(data)
    .map((k) => `${k}=${data[k]}`)
    .join("&");

  fetch("/sendUrl", {
    method: "POST",
    body: urlencoded,
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  });
}

function fetchPostFile() {
  const fileData = new FormData();
  const fileInput = document.querySelector("input[type='file'][multiple]");
  for (let i of fileInput.files) {
    fileData.append("image", i);
  }

  fetch("/upload", {
    method: "POST",
    body: fileData
  });
}

// 加载Blob文件

function loadImage() {
  fetch("/static/img/css3.svg")
    .then((res) => res.blob())
    .then((blob) => {
      const imageElement = document.querySelector("img");
      imageElement.src = URL.createObjectURL(blob);
    });
}

// 中断请求
function abortFetchRequest() {
  let abort = new AbortController();
  fetch("wik.zip", { signal: abort.signal }).catch((err) => {
    console.log("err", err);
  });
  abort.abort();
}
