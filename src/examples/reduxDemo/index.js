import { applyMiddleware, createStore } from "redux";
import { VisibilityFilters } from "./actions";
import middlewares from "./middleware";

import todoApp from "./reducers";
// compose 从左到右接收，增强store，最右边的参数可以是传多个参数，其余只接受一个参数，返回从右到左合成的最终函数
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      text: "READ the DOC",
      completed: false,
    },
    {
      text: "write code",
      completed: true,
    },
  ],
};

const store = createStore(
  todoApp,
  initialState,
  applyMiddleware(...middlewares),
);

// 警告：这只是一种“单纯”的实现方式！
// 这 *并不是* Redux 的 API.
function applyMiddleware22(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));
  return Object.assign({}, store, { dispatch });
}
export default store;
