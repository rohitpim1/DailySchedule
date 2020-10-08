import React, { useState } from 'react';
import App from './App';
const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("");
  
    /*function to handle form submition */
    
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder = "enter your schedule"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

export default TodoForm;