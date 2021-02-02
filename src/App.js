import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import TodoAdd from "./Todo/TodoAdd";

function App() {
  //деструктуризация массива
  const [todos, setTodos] = React.useState([]);

  //удаление
  function removeTodo(id) {
    setTodos (todos.filter((todo) => todo.id !== id));
  }

  function todoAdd(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <TodoAdd onCreate={todoAdd} />

        {todos.length ? (
          <TodoList todos={todos} />
        ) : (
          <p>Данных нет</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
