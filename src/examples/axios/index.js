function axios(options) {
  const { url, method, data, headers } = options || {};

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    setHeaders(headers || {});
    xhr.open(method, url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send(data);
  });
}

function setHeaders(headers = {}, xhr) {
  Object.entries(headers).forEach((item) =>
    xhr.setRequestHeader(item[0], item[1])
  );
}

export default axios;
