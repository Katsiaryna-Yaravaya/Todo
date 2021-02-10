import React, { useContext } from "react";
import Context from "../context";
import "./todoItem.css";

import {ITodo} from "../App";

function TodoItem(props: { todo: ITodo }) {
  const { removeTodo } = useContext(Context);

  return (
    <li className="itemLi">
      {props.todo.title}
      <button className="rm" onClick={() => removeTodo(props.todo.id)}>x</button>
    </li>
  );
}

export default TodoItem;
