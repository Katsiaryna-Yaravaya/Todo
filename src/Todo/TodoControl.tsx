import React, {useMemo} from "react";
import TodoList from "./TodoList";
import Context from "../context";
import TodoAdd from "./TodoAdd";
import moment from "moment";
import TodoFilter from "./TodoFilter";

export interface ITodo {
    title: string
    id: number
    date: string
}

function TodoControl() {

    const [todos, setTodos] = React.useState<ITodo[]>([]);
    const [filteredTodos, setFilteredTodos] = React.useState<ITodo[]>([]);

    function todoAdd(title: string): void {
        const todo: ITodo = {
            title,
            id: Date.now(),
            date: moment().format("DD.MM.YYYY HH:mm:ss")
        }
        setTodos(todos.concat([todo]))
    }

    //удаление
    function removeTodo(id: number): void {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function todoFilter(value: string): void {
        setFilteredTodos(todos.filter((todo) => value === todo.date))
    }

    const printTodoList = useMemo(() => {
        let currentTodoList: ITodo[]
        currentTodoList = filteredTodos.length > 0 ? filteredTodos : todos
        return (
            <TodoList todos={currentTodoList}/>
        )
    }, [filteredTodos, todos])

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <TodoAdd onCreate={todoAdd}/>
                <TodoFilter todos={todos} setFilteredData={todoFilter}/>
                {printTodoList}
            </div>
        </Context.Provider>
    );
}

export default TodoControl;