import React, {ChangeEvent, useState} from "react";
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
    const [showWarningMessage, setShowWarningMessage] = useState<boolean>(false)

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)

        if (!event.target.value) {
            setShowWarningMessage(false)
            setFilteredData(event.target.value)
        } else if (moment(event.target.value, "DD.MM.YYYY HH:mm:ss").isValid()) {
            setShowWarningMessage(false)
            setFilteredData(event.target.value);
        } else {
            setShowWarningMessage(true)
        }
    }

    return (
        <div>
            <div className="filterForm">
                <InputMask mask="99.99.9999 99:99:99"
                           className="inputFilter"
                           maskChar={null}
                           value={value}
                           onChange={changeHandler}
                           disabled={todos.length <= 0}
                           placeholder="01.01.2020 23:59:59"
                />
            </div>
            {showWarningMessage && <span className="warningMessage">Дата не валидна</span>}
        </div>
    )
}

export default TodoFilter;