import React, {ChangeEvent} from "react";
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
        setFilteredTodos(filteredTodos.concat([todo]))
        setTodos(todos.concat([todo]))
    }

    //удаление
    function removeTodo(id: number): void {
        setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function todoFilter(event: ChangeEvent<HTMLInputElement>) {
        const filterData = todos.filter((todo) => event.target.value === todo.date)
        setFilteredTodos(filterData)
        // filteredTodos.length > 0 && event.target.value.trim() ? setFilteredTodos(filterData) : todos
        filteredTodos.length <= 0 && !event.target.value.trim() ? setFilteredTodos(todos) : todos
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <TodoAdd onCreate={todoAdd}/>
                <TodoFilter todos={todos} setFilteredData={todoFilter}/>
                <TodoList todos={filteredTodos}/>
            </div>
        </Context.Provider>
    );
}

export default TodoControl;
