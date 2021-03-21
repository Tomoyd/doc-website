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

import { SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";

const initialState = {
  visibilityFilter: VisibilityFilters,
  todos: [],
};

function todoApp(state = { initialState }, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter });

    default:
      return state;
  }
}

//  combineReducers  将多个合成一个
