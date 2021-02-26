import React from "react";
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
    const [filterValue, setFilterValue] = React.useState<string>();

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
        setFilterValue(value)
    }

    function printTodoList() {
        return filterValue ? todos.filter((todo) => filterValue === todo.date): todos;
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <TodoAdd onCreate={todoAdd}/>
                <TodoFilter todos={todos} setFilteredData={todoFilter}/>
                <TodoList todos={printTodoList()}/>

            </div>
        </Context.Provider>
    );
}

export default TodoControl;