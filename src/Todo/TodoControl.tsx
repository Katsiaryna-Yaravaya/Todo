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

    function handleOnChangeFilter(event: ChangeEvent<HTMLInputElement>) {
        const filterData = todos.filter((todo) => {
            const date = moment(todo.date, "DD.MM.YYYY HH:mm:ss");
            const dow = date.second(); //день в месяце (date), здесь секунды
            if (event.target.value === dow.toString()) {
                return todo
            }
        })
        setFilteredTodos(filterData)
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">

                <TodoAdd onCreate={todoAdd}/>
                <TodoFilter todos={todos} setFilteredData={handleOnChangeFilter}/>
                <TodoList todos={filteredTodos.length > 0 ? filteredTodos : todos}/>

            </div>
        </Context.Provider>
    );
}

export default TodoControl;
