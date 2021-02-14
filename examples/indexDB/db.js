function doDB() {
  const request = indexedDB.open("user", 3);
  request.onupgradeneeded = (event) => {
    console.log("result", event.target);
    const db = event.target.result;
    if (db.objectStoreNames.contains("users")) {
      db.deleteObjectStore("users");
    }
    // const index = store.createIndex("username", "username", { unique: true });
    // store.deleteIndex("username");
    db.createObjectStore("users", { keyPath: "username" });
  };
  return new Promise((resolve, reject) => {
    request.onerror = (event) => {
      reject(event.target.errorCode);
    };

    request.onsuccess = (event) => {
      console.log("event", event.target.result);
      const db = event.target.result;
      // 并发问题升级等问题
      db.onversionchange = () => database.close();
      const transition = db.transaction("users", "readwrite");
      console.log("db-success", transition);
      const store = transition.objectStore("users");

      resolve(store);
    };
  });
}

async function add() {
  try {
    const store = await doDB();
    store.add({ username: 3, age: 19 });
  } catch (error) {
    console.log("error", error);
  }
}

async function fetchUser() {
  const store = await doDB();
  const res = store.get(2);
  console.log("res", res);

  res.onsuccess = (event) => {
    render(event.target.result);
  };
}

function render(result) {
  if (result) {
    document.getElementById("result").innerText = JSON.stringify(result);
  }
}

// 使用游标
async function useCursor() {
  const store = await doDB();
  const res = store.openCursor(IDBKeyRange.lowerBound(2), "nextunique");
  // index 创建索引，以指定的属性为key，可以向store使用
  let curStr = "";
  res.onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      curStr += cursor.value.age;
      cursor.continue();
    } else {
      render(curStr);
      // cursor.continue();
      console.log("done", "");
    }
  };
  res.onerror = (event) => {
    console.log("event", event);
  };
}
