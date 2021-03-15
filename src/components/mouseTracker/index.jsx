import React, { PureComponent, useState } from "react";
// 告知组件需要渲染内容的函数prop在技术上都可以被称为render prop
const MouseTracker = ({ render = () => {} }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <h1>move mouse</h1>
      {render({ x, y })}
    </div>
  );
};

class PureMouse extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { x: 1, y: 3 };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(event) {
    this.setState({ x: event.clientX, y: event.clientY });
  }
  render() {
    console.log("1233 :>> ", 1233);
    return (
      <div onMouseMove={this.handleMouseMove}>
        <h1>pure mouse</h1>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export { PureMouse };

export default MouseTracker;
