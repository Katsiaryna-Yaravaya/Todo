import React, {useContext} from "react";
import Context from "../context";
import "./todoItem.css";

import {ITodo} from "../App";

function TodoItem(props: { todo: ITodo }) {
    const {removeTodo} = useContext(Context);

    return (
        <li className="itemLi">
            {props.todo.title.length > 27 ?
                <p className="itemTitle" title={props.todo.title}>{props.todo.title}</p> :
                <p className="itemTitle">{props.todo.title}</p>
            }
            <p>{new Date().toJSON().slice(0, 10)}</p>
            <button className="rm" onClick={() => removeTodo(props.todo.id)}>x</button>
        </li>
    );
}

export default TodoItem;
