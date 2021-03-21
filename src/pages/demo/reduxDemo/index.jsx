import React from "react";
import { Provider } from "react-redux";
import store from "../../../examples/reduxDemo";
import FilterFooter from "./Footer";
import VisibleTodoList from "./VisibleTodoList";

const DateNow = () => {
  console.log("Date.now() :>> ", Date.now());
  return null;
};
const Index = () => {
  return (
    <Provider store={store}>
      <div>
        <DateNow></DateNow>
        <VisibleTodoList></VisibleTodoList>
        <FilterFooter></FilterFooter>
      </div>
    </Provider>
  );
};

export default Index;
