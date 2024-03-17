import React from "react";

function TodoItem({ index, todo, handleItemDone, handleDeleteItem }) {
  return (
    <div className="item">
      <li
        className={todo.completed ? "done" : ""}
        onClick={() => handleItemDone(index)}
      >
        {todo.text}
      </li>
      <span className="cross-mark" onClick={() => handleDeleteItem(index)}>
        ❌
      </span>
    </div>
  );
}

export default TodoItem;
