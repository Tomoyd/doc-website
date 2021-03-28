import React, { Component } from "react";
import reverseHOC from "../../../../hoc/reverseProxy";

class Reverse extends Component {
  state = {
    name: 123,
  };
  render() {
    return <div>123567</div>;
  }
}

// function Name(params) {
//   return <div>999</div>;
// }

const ReverseNew = reverseHOC(Reverse);
// const NameNew = reverseHOC(Name);  无状态无法使用
const Index = () => {
  return (
    <div>
      <ReverseNew></ReverseNew>
      {/* <NameNew></NameNew> */}
    </div>
  );
};

export default Index;
