function sendData() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "http://www.somewhere-else.com/page/", true);
  // xhr.setRequestHeader("Accept-encode", "utf-8");
  xhr.send(null);
}

function postData() {
  const xhr = new XMLHttpRequest();
  xhr.open("post", "test/name", true);
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // const form = document.getElementById("form1");

  // const formData = useFormData(form);
  const formData = useFormData({ name: 1 });
  xhr.send(formData);
  // const encodeUrl = serialize(form);
  // console.log("encodeUrl", encodeUrl);
  // xhr.send(encodeUrl);
}

function useFormData(form) {
  if (form instanceof HTMLFormElement) {
    return new FormData(form);
  }

  const formData = new FormData();

  Object.keys(form).forEach((key) => {
    formData.append(key, form[key]);
  });

  return formData;
}

function serialize(form) {
  let parts = [];
  for (let i of form.elements) {
    parts.push(`${encodeURIComponent(i.name)}=${encodeURIComponent(i.value)}`);
  }
  return parts.join("&");
}

function handleResponse(response) {
  console.log(`
  You're at IP address ${response.ip}, which is in
  ${response.city}, ${response.region_name}`);
}
// let script = document.createElement("script");
// script.src = "http://localhost:8000/json/?callback=handleResponse";
// document.body.insertBefore(script, document.body.firstChild);


