import React from "react";
import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../examples/reduxDemo/actions";
import TodoList from "./todoList";

const getVisibleTodo = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return { todos: getVisibleTodo(state.todos, state.visibilityFilter) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
