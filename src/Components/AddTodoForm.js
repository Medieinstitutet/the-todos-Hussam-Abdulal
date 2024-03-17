import React, { useRef } from "react";

function AddTodoForm({ handleAddTodo }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      handleAddTodo(text);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Enter item...." />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
