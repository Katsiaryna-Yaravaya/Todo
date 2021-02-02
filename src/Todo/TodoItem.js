import React, { useContext } from "react";
import Context from "../context";
import "./todoItem.css";

function TodoItem({ todo }) {
  const { removeTodo } = useContext(Context);

  return (
    <li className="itemLi">
      {todo.title}
      <button className="rm" onClick={() => removeTodo(todo.id)}>x</button>
    </li>
  );
}

export default TodoItem;
