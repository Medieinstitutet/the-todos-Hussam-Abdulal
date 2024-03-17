import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleItemDone, handleDeleteItem }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          handleItemDone={handleItemDone}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}

export default TodoList;
