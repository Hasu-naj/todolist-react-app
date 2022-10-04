import { useEffect } from "react";
import { useState, useRef } from "react";

const TodoForm = (props) => {
  
  const{ editedItem, addTodo }= props;
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    if(editedItem !== undefined)
     setInput(editedItem.text);
  }, [editedItem] )

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(input)
    
    setInput("");
  };

  return (
   <div className="card card-body my-3">
    <form onSubmit={formSubmitHandler}>
      <div className="input-group">
      <input
        className="form-control text-capitalize"
        type="text"
        value={input}
        placeholder="Add a todo"
        onChange={changeHandler}
        ref={inputRef}

      />
     </div>
      <button  
      type="submit" 
      disabled={input ? false : true}
      className= {editedItem === undefined ? "btn btn-block btn-success mt-3  text-uppercase" 
      :  
      "btn btn-block btn-primary mt-3 text-uppercase"}>
        {editedItem !== undefined ? "edit item" : "add item"}
      </button>
      
    </form>
    </div>
  );
};

export default TodoForm;
