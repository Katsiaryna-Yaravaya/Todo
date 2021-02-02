import React from "react";
import TodoItem from "./TodoItem";
import "./todoList.css";

function TodoList(props) {
  return (
    <ul className="listUl">
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default TodoList;
