// src/Todo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="Todo">
      <h1>Todo Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
