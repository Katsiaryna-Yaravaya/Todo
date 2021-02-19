import React, {ChangeEvent, useState} from "react";
import "./todoFilter.css"
import {ITodo} from "./TodoControl";
import InputMask from 'react-input-mask';
import moment from "moment";

function TodoFilter(props: { todos: ITodo[], setFilteredData: (event: ChangeEvent<HTMLInputElement>) => void }) {

    const [value, setValue] = useState<string>("")
    const [warningMessage, setWarningMessage] = useState<boolean>(false)

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        const data = moment(event.target.value, "DD.MM.YYYY HH:mm:ss").isValid();
        props.setFilteredData(event);
        !data ? setWarningMessage(true) : setWarningMessage(false);
        setValue(event.target.value)
    }

    return (
        <div>
            <div className="filterForm">
                <InputMask mask="99.99.9999 99:99:99"
                           className="inputFilter"
                           maskChar={null}
                           value={value}
                           onChange={changeHandler}
                           disabled={props.todos.length <= 0}
                           placeholder="01.01.2020 23:59:59"
                />
            </div>
            {warningMessage && <span className="warningMessage">Дата не валидна</span>}
        </div>
    )
}

export default TodoFilter;