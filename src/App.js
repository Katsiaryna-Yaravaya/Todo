import React from 'react'
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    //деструктуризация массива
    const [todos, setTodos] = React.useState([])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
    //удаление
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <AddTodo onCreate={addTodo}/>


                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                ) : (
                    <p>Данных нет</p>
                )
                }
            </div>
        </Context.Provider>
    );
}

export default App;
