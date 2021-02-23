import React, {ChangeEvent, FormEvent, useState} from "react";
import "./todoFilter.css"
import {ITodo} from "./TodoControl";
import InputMask from 'react-input-mask';
import moment from "moment";

interface Props {
    todos: ITodo[]
    setFilteredData: (value: string) => void
}

function TodoFilter({todos, setFilteredData}: Props) {

    const [value, setValue] = useState<string>("")
    const [warningMessage, setWarningMessage] = useState<boolean>(false)

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function submitHandler(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setFilteredData(value);
        setWarningMessage(!moment(value, "DD.MM.YYYY HH:mm:ss").isValid())
        if (value === ""){
            setWarningMessage(false)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="filterForm">
                <InputMask mask="99.99.9999 99:99:99"
                           className="inputFilter"
                           maskChar={null}
                           value={value}
                           onChange={changeHandler}
                           disabled={todos.length <= 0}
                           placeholder="01.01.2020 23:59:59"
                />
                <button className="filterButton" type="submit">Фильтр</button>
            </div>
            {warningMessage && <span className="warningMessage">Дата не валидна</span>}
        </form>
    )
}

export default TodoFilter;