import React, {useContext} from 'react'
import Context from "../context";
import './todoItem.css'

function TodoItem({ todo, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li  className='itemLi'>
            {/*привели массив к строке*/}
            <span className={classes.join(' ')}>
                <input
                    className='itemInput'
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                {todo.title}
            </span>
            <button className='rm' onClick={removeTodo.bind(null, todo.id)}> x </button>
        </li>
    )
}

export default TodoItem