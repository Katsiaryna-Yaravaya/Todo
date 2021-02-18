import React, {ChangeEvent} from "react";
import "./todoFilter.css"
import {ITodo} from "./TodoControl";

function TodoFilter(props: { todos: ITodo[], setFilteredData: (event: ChangeEvent<HTMLInputElement>) => void }) {
    const {todos, setFilteredData} = props

    return (
        <div className="filterForm">
            <input
                className="inputFilter"
                placeholder="секунды"
                onChange={setFilteredData}
                disabled={todos.length > 0 ? false : true}
            />
        </div>
    )
}

export default TodoFilter;