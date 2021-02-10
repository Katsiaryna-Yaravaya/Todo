import React, {ChangeEvent, FormEvent, useState} from "react";
import "./todoAdd.css";

function TodoAdd(props: { onCreate: (value: string) => void }) {

    const [value, setValue] = useState<string>("");

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    function submitHandler(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (value.trim()) {
            props.onCreate(value);

            // очищает строку
            setValue("");
            setIsDisabled(true);
        }
    }

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);

        if (event.target.value) {
            setIsDisabled(false);
        }
    }

    return (
        <form className="todoForm" onSubmit={submitHandler}>
            <input
                className="todoInput"
                value={value}
                onChange={changeHandler}
            />
            <button className="todoButton" type="submit" disabled={isDisabled}>Добавить</button>
        </form>
    );
}

export default TodoAdd;
