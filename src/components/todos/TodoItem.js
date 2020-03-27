import React from 'react'
import TodoCheckbox from '../layout/TodoCheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import RemoveTodo from './RemoveTodo';



const TodoItem = (props) => {

  const { todo, deleteTodoItem } = props;
  

  return (
    <div className="clearfix my-3 py-3 bg-white row">
      <TodoCheckbox />
      <div className="float-right col-10 pt-2">
        <h4 className="w-100">
          {todo.title}

          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="lg" 
            color="danger" 
            className="float-right text-danger pointer"
            onClick={() => deleteTodoItem(todo.id)}
          />
        </h4>
      </div>
    </div>
  )
}

export default TodoItem

