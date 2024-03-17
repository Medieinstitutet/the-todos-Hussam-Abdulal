import { useState } from "react";
import TodoList from "./Components/TodoList";
import AddTodoForm from "./Components/AddTodoForm";
import TodoHeader from "./Components/TodoHeader";
import TodoFooter from "./Components/TodoFooter";
import TodoLinethrough from "./Components/TodoLinethrough";
import TodoSortera from "./Components/TodoSortera"; 
import "./App.css";

function App() {

  // hantera todos//
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  
  // Spara todos i localStorage //
  localStorage.setItem("todos",JSON.stringify(todos));


  //lägga till en ny todo//
  const handleAddTodo = (text) => {
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
  };
  //markera en todo som slutförd eller avmarkera den//
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  
  //ta bort en todo//
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  //rensa alla todos//
  const clearAllTodos = () => {
    setTodos([]);
  };

   // sortera listan //
   const handleSortByName = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      return a.text.localeCompare(b.text);
    });
    setTodos(sortedTodos);
  };


  return (
    <div className="App">
      <TodoHeader />
      <TodoLinethrough />
      <div className="to-do-container">
      <TodoSortera handleSortByName={handleSortByName} />
        <TodoList
          todos={todos}
          handleItemDone={handleItemDone}
          handleDeleteItem={handleDeleteItem}
        />
        <AddTodoForm handleAddTodo={handleAddTodo} />
        <TodoFooter clearAllTodos={clearAllTodos} />
      </div>
    </div>
  );
}

export default App;
