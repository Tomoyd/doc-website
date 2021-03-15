import React from "react";
import MouseTracker, { PureMouse } from "../../../components/mouseTracker";
// 告知组件需要渲染内容的函数prop在技术上都可以被称为render prop
const Cat = ({ x, y }) => {
  return (
    <div>
      Cat is at ({x},{y})
    </div>
  );
};

const CatWithMouse = () => {
  return (
    <MouseTracker
      render={(position) => {
        return <Cat {...position}></Cat>;
      }}
    ></MouseTracker>
  );
};

function widthMouse(Component) {
  return () => (
    <MouseTracker
      render={(position) => <Component {...position}></Component>}
    ></MouseTracker>
  );
}
const Dog = ({ x = 0, y = 0 }) => {
  return (
    <div>
      dog is{x + 1}-{y + 1}
    </div>
  );
};
const DogWithMouse = widthMouse(Dog);

const Animal = () => {
  const pure = ({ x, y }) => (
    <div>
      PureComponent:{x},{y}
    </div>
  );
  return (
    <div>
      <CatWithMouse></CatWithMouse>
      <DogWithMouse></DogWithMouse>
      <PureMouse render={pure}></PureMouse>
    </div>
  );
};

export default Animal;
