import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {

const {todos, removeTodo, clearList, editTodo} = props;
  return (
   <ul className="list-group my-5">
    <h3 className="text-capitalize text-center">todo list</h3>
    {todos.map((todo) => {
        return (
            <TodoItem
            key={todo.id}
            todo={todo}  
            removeTodo={removeTodo} 
            editTodo={editTodo }
            />
        )
    } )}
    <button type="button" className="btn btn-danger btn-block
    text-uppercase mt-5" onClick={clearList} >clear list</button>
   </ul>
   );
 }

export default TodoList;