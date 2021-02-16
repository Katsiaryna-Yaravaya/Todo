import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import TodoAdd from "./Todo/TodoAdd";
import moment from "moment";

export interface ITodo {
    title: string
    id: number
    date: string
}

function App() {

    const [todos, setTodos] = React.useState<ITodo[]>([]);

    function todoAdd(title: string): void {
        const todo: ITodo = {
            title,
            id: Date.now(),
            date: moment().format("DD.MM.YYYY HH:mm:ss")
        }
        setTodos(
            todos.concat([
                todo
            ])
        )
    }

    //удаление
    function removeTodo(id: number): void {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">

                <TodoAdd onCreate={todoAdd}/>
                <TodoList todos={todos}/>

            </div>
        </Context.Provider>
    );
}

export default App;
