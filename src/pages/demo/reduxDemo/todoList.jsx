import React from "react";
import Todo from "./ToDo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            {...todo}
            onClick={() => {
              onTodoClick(index);
            }}
          ></Todo>
        );
      })}
    </ul>
  );
};

export default TodoList;
