
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti'

const TodoItem = ( props) => {
    const {todo, removeTodo, editTodo} = props;
     
    return (
       <li className='list-group-item text-capitalize d-flex 
       justify-content-between my-2'>
         <h6>
        {todo.text}</h6>
         
        <div className="todo-icon">
            <RiCloseCircleLine className='mx-2 text-danger' onClick={() => removeTodo(todo.id)} />
            <TiEdit className='mx-2 text-success' onClick={() => editTodo(todo.id)} />
        </div>
       </li>
      
);
}

export default TodoItem;