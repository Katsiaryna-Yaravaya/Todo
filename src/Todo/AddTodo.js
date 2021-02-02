import React, {useState} from 'react'
import './addTodo.css'

function AddTodo ({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate (value)
            // очищает строку
            setValue('')
        }
    }

    return (
        <form className='todoForm' onSubmit={submitHandler}>
            <input className='todoInput' value={value} onChange={event => setValue(event.target.value)} />
            <button className='todoButton' type='submit'>Добавить</button>
        </form>
    )
}

export default AddTodo