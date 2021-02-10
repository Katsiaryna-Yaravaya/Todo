import React from "react";
import TodoItem from "./TodoItem";
import "./todoList.css";
import {ITodo} from "../App";


function TodoList(props: { todos: ITodo[] }) {
    return (
        <div className="container">
            <div className="section">
                <ul className="listUl">
                    {props.todos.length ? (props.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id}/>;
                    })) : (<p className="markUp">Данных нет</p>)}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
