import React from "react";
import forwardHOC from "../../../../hoc/forwardProxy";

const NameItem = ({ name, age }) => {
  return (
    <div>
      {name}
      {age}
    </div>
  );
};
const Name = forwardHOC(NameItem);
const Index = () => {
  return (
    <div>
      正向代理高阶组件
      <Name age='18' name='99'></Name>
    </div>
  );
};

export default Index;
