import * as React from "react";
import TodoItem from "./TodoItem";
import "./todoList.css";
import {ITodo} from "../App";

function TodoList(props: { todos: ITodo[] }) {
  return (
    <ul className="listUl">
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default TodoList;
