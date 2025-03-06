// Handles adding and removing tasks in todo.

import React, { useReducer, useState } from "react";

// Reducer function for managing the todos state
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Adds a new todo with a unique ID
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE":
      // Removes a todo based on its ID
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state; // Returns current state if no valid action type
  }
};

const TodoApp = () => {
  // useReducer for managing the list of todos
  const [todos, dispatch] = useReducer(todoReducer, []);

  // useState for managing the input field value
  const [input, setInput] = useState("");

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>3. Todo List with Add & Remove</h1>

      {/* Input field for adding new todos */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />


      {/* Button to add a new todo, dispatching an ADD action */}
      <button style={{backgroundColor:"#000"}} onClick={() => dispatch({ type: "ADD", text: input })}>
        Add Todo
      </button>

      {/* Display list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {/* Button to remove a todo, dispatching a REMOVE action */}
            <button style={{backgroundColor:"#e38690"}} onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

//  If this were just a single todo item, useState would be fine. 
// But since we manage an array of items with multiple actions like add and remove, useReducer is the better choice. 
