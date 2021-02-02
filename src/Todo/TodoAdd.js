import React, { useState } from "react";
import "./todoAdd.css";

function TodoAdd({ onCreate }) {
    const [value, setValue] = useState("");

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            // очищает строку
            setValue("");
        }
    }

    return (
        <form className="todoForm" onSubmit={submitHandler}>
            <input
                className="todoInput"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button className="todoButton" type="submit" disabled="disabled">Добавить</button>
        </form>
    );
}

export default TodoAdd;
