import React, { useState } from 'react'
import './TodoItem.scss';
import { useDispatch } from 'react-redux';
import { checkTodo, removeTodo } from '../store/actions/todoActions';

function TodoItem(props) {
  // gives us access to dispatch actions
  const dispatch = useDispatch();

  // sets initial state of isChecked to false
  const [isChecked, setIsChecked] = useState(false);

  // dispatches checkTodo action and updates state of isChecked
  const handleClickTodo = () => {
    dispatch(checkTodo(props.todo.id));
    setIsChecked(props.todo.completed);
  };

  // dispatches removeTodo action which triggers reducer to remove clicked todo item from store
  const handleRemoveTodo = () => {
    dispatch(removeTodo(props.todo.id));
  }

  // render the component
  return (
    <div className="todo-item">
      <h5 className="todo-text" style={isChecked ? { textDecoration:'line-through'} : {textDecoration : 'none'}}>{props.todo.title} &nbsp;
        <div className="todo-actions">
          <label className="checkbox-label">
            <input type="checkbox" value={props.todo.title} checked={isChecked} onChange={handleClickTodo} />
            <span className="checkbox-custom border-primary"></span>
          </label>
          
          <button type="button" className="ml-2 px-2 py-0 btn btn-outline-danger" onClick={handleRemoveTodo}>X</button> 
        </div>
      </h5>
    </div>
  )
}

export default TodoItem;