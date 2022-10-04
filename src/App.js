
import {useState}from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [editedItem, setEditedItem] = useState();

  const addTodo = (input) => {
    const todo = {
      id:  Math.floor(Math.random() * 10000),
      text: input,
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
    setEditedItem(undefined);
  }

  const removeTodo = (id) => {
     const updatedTodos = [...todos].filter((todo) => todo.id !== id);
     setTodos(updatedTodos);
  }

  const clearList = () => {
   setTodos([]);
  }

  const editTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    const selectedTodo = todos.find((todo) => todo.id === id);
    const newTodos = [...updatedTodos,  {...selectedTodo}]
    setTodos(newTodos)
    setEditedItem(selectedTodo)
  };


  return ( 
    <div className="container">
      <div className=" row">
        <div className=" col-10 mx-auto col-md-8 mt-5">
          <h3 className=" text-capitalize text-center">What's the Plan for Today?</h3> 
          <TodoForm addTodo={addTodo} editedItem={editedItem} />
          <TodoList todos={todos} removeTodo={removeTodo} clearList={clearList} editTodo={editTodo} />
          </div>
        </div>
      </div>
    
  );
}

export default App;
