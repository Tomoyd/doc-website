//  如何响应 action发送到store
// 尽可能把state规范化

// reducers是一个纯函数
// 接收旧的state，处理新的state

/**
 * 不要在reducer中
 * 1. 修改传入的参数
 * 2. 执行副作用操作
 * 3. 调用非纯函数
 */
import { combineReducers } from "redux";

import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
} from "./actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];

    case TOGGLE_TODO:
      return state.map((i, index) => {
        if (action.index === index) {
          return Object.assign({}, i, { completed: !i.completed });
        }
        return i;
      });

    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
