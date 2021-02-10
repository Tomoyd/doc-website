function axios() {}

function sendData(config) {
  var xhr = new XMLHttpRequest();
  const { method, url, headers } = config;
  xhr.open(method, url, true);
  for (let k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }
  xhr.send(null);
  xhr.onreadystatechange = () => {
    const readyState = xhr.readyState;
    const status = xhr.status;
    // 已接收全部数据
    if (readyState === 4) {
      if ((status >= 200 && status < 300) || status === 304) {
        console.log(xhr.responseText);
      } else {
        throw Error("failed" + xhr.status);
      }
    }
  };
}

// 处理get请求参数

function transformValidUrl(url = "", query = {}) {
  if (!query) {
    return url;
  }
  const keys = Object.keys(query);
  if (!keys?.length) {
    return url;
  }

  if (!url.includes("?")) {
    const k1 = keys.pop();
    url = `${url}?${encodeURIComponent(k1)}=${encodeURIComponent(query[k1])}`;
  }
  const qStr = keys.map((k) => `${k}=${query[k]}`).join("&");
  return qStr ? url : url + "&" + encodeURIComponent(qStr);
}
