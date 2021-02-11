import React, { useEffect } from "react";
import axios from "../../../../examples/axios";

const TestXHR = () => {
  useEffect(() => {
    async function load() {
      const res = await axios({ url: "http://localhost:8000", method: "get" });
      console.log("res :>> ", res);
    }
    load();
  }, []);
  return <div>test</div>;
};

export default TestXHR;
