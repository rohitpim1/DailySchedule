import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
const App = () => {

  const [todos, setTodos] = useState([
    { text: " get up at 5am",
    isCompleted:false,
  },
  
  ]);

  /* function to add item in an existing array of object i.e todos with
  the help of TodoForm.jsx*/

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  /*function to complete the form and striking it out with lep of todo,jsx*/

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  /*function to remove the txt by clicking on x sign*/

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
    <h1>to do list</h1>
   <div className="app">
   <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </>
  );
};
export default App;