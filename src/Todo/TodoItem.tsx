import React, {useContext} from "react";
import Context from "../context";
import "./todoItem.css";
import {ITodo} from "../App";

function TodoItem(props: { todo: ITodo }) {
    const {removeTodo} = useContext(Context);

    return (
        <li className="itemLi">
            <p className="itemTitle" title={props.todo.title}>{props.todo.title}</p>
            <p>{props.todo.date}</p>
            <button className="rm" onClick={() => removeTodo(props.todo.id)}>x</button>
        </li>
    );
}

export default TodoItem;
